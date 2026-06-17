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
      
    // --- Particles.js background
    particlesJS("particles-js", {
      "particles": {
        "number": { "value": 46, "density": { "enable": true, "value_area": 750 } },
        "color": { "value": ["#2dd4bf", "#2563eb", "#a78bfa"] },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.17, "random": true },
        "size": { "value": 3, "random": true },
        "move": { "enable": true, "speed": 1.2, "direction": "none", "straight": false, "random": true }
      },
      "interactivity": { "events": { "onhover": { "enable": false } } },
      "retina_detect": true
    });

    // --- Demo Video Data
    const videos = [
      {
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        cover: "https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=2160&q=80",
        username: "astrodev",
        avatar: "https://randomuser.me/api/portraits/men/42.jpg",
        caption: "Stargazing from a rooftop 🌌",
        hashtags: ["#night", "#stars", "#sky"],
        likes: 1520,
        comments: 220
      },
      {
        url: "https://www.w3schools.com/html/movie.mp4",
        cover: "https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&q=80",
        username: "luna_art",
        avatar: "https://randomuser.me/api/portraits/women/43.jpg",
        caption: "Painting the moon in real time 🌙🎨",
        hashtags: ["#art", "#timelapse", "#moon"],
        likes: 2398,
        comments: 312
      },
      {
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        cover: "https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&q=80",
        username: "techbyte",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        caption: "Building a robot arm from scratch 🤖",
        hashtags: ["#diy", "#robotics", "#build"],
        likes: 3110,
        comments: 498
      },
      {
        url: "https://www.w3schools.com/html/movie.mp4",
        cover: "https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=2160&q=80",
        username: "oceaneyes",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg",
        caption: "Underwater wonders of the reef 🐠",
        hashtags: ["#ocean", "#nature", "#explore"],
        likes: 1845,
        comments: 211
      }
    ];

    // --- Render Videos, Only 1 on screen, stack above/below for swipe
    const feed = document.getElementById('videoFeed');
    const tpl = document.getElementById('video-card-template');
    let current = 0;

    function createVideoCard(data, index) {
      const node = tpl.content.cloneNode(true).children[0];
      // Video
      const video = node.querySelector('video');
      video.src = data.url;
      video.poster = data.cover;
      if(index === current) video.autoplay = true;
      video.oncanplay = () => {
        if(index === current) video.play();
      };
      // Profile
      node.querySelector('img').src = data.avatar;
      node.querySelector('.font-semibold').textContent = data.username;
      // Caption
      node.querySelector('p').textContent = data.caption;
      // Hashtags
      const hashtags = node.querySelectorAll('.hashtag');
      hashtags.forEach((el,i) => {
        el.textContent = data.hashtags[i] || "";
        if(!data.hashtags[i]) el.style.display = "none";
      });
      // Likes/Comments
      node.querySelectorAll('.video-action span')[0].textContent = data.likes;
      node.querySelectorAll('.video-action span')[1].textContent = data.comments;
      // Animations
      node.style.zIndex = (100 - Math.abs(current-index));
      node.style.opacity = index === current ? 1 : 0.45;
      node.style.pointerEvents = index === current ? "auto" : "none";
      node.style.transition = "opacity .47s cubic-bezier(.4,.2,.2,1), transform .6s cubic-bezier(.4,.2,.2,1)";
      node.style.transform = `translateY(${(index-current)*60}px) scale(${index===current?1:0.93})`;
      node.classList.add('animate-fade-in');
      node.style.animationDelay = `${.27 + Math.abs(index-current)*0.04}s`;
      // Pause video if not current
      video.muted = true;
      video.loop = true;
      if(index !== current) video.pause();

      // Like animation
      node.querySelectorAll('.video-action')[0].onclick = (e) => {
        e.preventDefault(); e.stopPropagation();
        let span = e.currentTarget.querySelector('span');
        span.textContent = parseInt(span.textContent)+1;
        e.currentTarget.querySelector('svg').classList.add('stroke-pink-500');
      };
      // Comment/share
      node.querySelectorAll('.video-action')[1].onclick = (e) => {e.preventDefault();};
      node.querySelectorAll('.video-action')[2].onclick = (e) => {e.preventDefault();};

      // Follow
      node.querySelector('button').onclick = (e) => {
        e.target.textContent = "Following";
        e.target.classList.remove("bg-gradient-to-r","from-blue-500","to-cyan-400");
        e.target.classList.add("bg-neutral-600");
      };

      // Prevent action click propagation
      node.querySelectorAll('.pointer-events-auto').forEach(el=>el.onclick = e=>e.stopPropagation());

      // Play/pause on tap
      node.onclick = () => {
        if(index !== current) return;
        if(video.paused) video.play();
        else video.pause();
      };

      return node;
    }

    function renderFeed() {
      feed.innerHTML = '';
      // Render previous, current, next for smooth swipe
      for(let i = -1; i <= 1; i++) {
        let idx = current+i;
        if(idx >= 0 && idx < videos.length) {
          let el = createVideoCard(videos[idx], idx);
          if(i === 0) el.classList.add('pointer-events-auto');
          feed.appendChild(el);
        }
      }
    }
    renderFeed();

    // --- Swipe Logic
    let startY = null, deltaY = 0, isDragging = false;

    feed.addEventListener('touchstart', (e) => {
      if(e.touches.length !== 1) return;
      startY = e.touches[0].clientY;
      isDragging = true;
    });
    feed.addEventListener('touchmove', (e) => {
      if(!isDragging) return;
      deltaY = e.touches[0].clientY - startY;
    });
    feed.addEventListener('touchend', () => {
      if(!isDragging) return;
      if(Math.abs(deltaY) > 60) {
        if(deltaY > 0 && current > 0) current--;
        else if(deltaY < 0 && current < videos.length-1) current++;
        renderFeed();
      }
      startY = null; deltaY = 0; isDragging = false;
    });

    // Mouse drag for desktop
    feed.addEventListener('mousedown', (e) => {
      startY = e.clientY; isDragging = true;
    });
    feed.addEventListener('mousemove', (e) => {
      if(!isDragging) return;
      deltaY = e.clientY - startY;
    });
    feed.addEventListener('mouseup', () => {
      if(!isDragging) return;
      if(Math.abs(deltaY) > 60) {
        if(deltaY > 0 && current > 0) current--;
        else if(deltaY < 0 && current < videos.length-1) current++;
        renderFeed();
      }
      startY = null; deltaY = 0; isDragging = false;
    });
    feed.addEventListener('mouseleave', () => { isDragging = false; });

    // Keyboard support
    window.addEventListener('keydown', e => {
      if(e.key === 'ArrowDown' && current < videos.length-1) { current++; renderFeed(); }
      if(e.key === 'ArrowUp' && current > 0) { current--; renderFeed(); }
    });

    // Responsive: keep feed centered
    window.addEventListener('resize', () => {
      renderFeed();
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
      

<div className="fixed inset-0 z-0 pointer-events-none" id="particles-js"></div>

<aside className="w-24 py-8 px-2 flex flex-col justify-between items-center blur-glass z-10 fixed left-0 top-0 bottom-0 h-full animate-fade-in" style={{animationDelay: '.1s'}}>
<div className="flex flex-col items-center gap-8">
<a className="mb-4" href="#">
<img alt="TikTok" className="h-8 w-8 drop-shadow-md" src="https://upload.wikimedia.org/wikipedia/commons/6/62/TikTok_Logo.svg"/>
</a>
<button className="sidebar-nav-btn active" title="For You">
<svg fill="none" height="28" stroke="currentColor" width="28"><use href="#lucide-home"></use></svg>
</button>
<button className="sidebar-nav-btn" title="Discover">
<svg fill="none" height="26" stroke="currentColor" width="26"><use href="#lucide-compass"></use></svg>
</button>
<button className="sidebar-nav-btn" title="Inbox">
<svg fill="none" height="26" stroke="currentColor" width="26"><use href="#lucide-message-square"></use></svg>
</button>
<button className="sidebar-nav-btn" title="Profile">
<svg fill="none" height="26" stroke="currentColor" width="26"><use href="#lucide-user"></use></svg>
</button>
</div>
<div className="mt-8 flex flex-col items-center">
<button className="icon-btn mb-5" title="Upload">
<svg fill="none" height="22" stroke="currentColor" width="22"><use href="#lucide-plus"></use></svg>
</button>
<img alt="Avatar" className="w-10 h-10 avatar-outline" src="https://randomuser.me/api/portraits/men/32.jpg"/>
</div>
</aside>

<main className="flex-1 flex flex-col items-center justify-center relative z-10 ml-24">
<div className="flex flex-col items-center justify-center h-screen w-full relative">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-1 animate-fade-in" style={{animationDelay: '.17s'}}>For You</h2>
<p className="text-neutral-400 text-md font-normal mb-4 animate-fade-in" style={{animationDelay: '.23s'}}>Personalized video feed</p>

<div className="relative w-full max-w-[420px] h-[72vh] flex flex-col justify-center items-center video-feed select-none" id="videoFeed">

</div>
</div>
</main>

<template id="video-card-template">
<div className="absolute inset-0 w-full h-full flex flex-col justify-end items-stretch pointer-events-auto transition-all duration-500">
<div className="relative w-full h-full rounded-3xl overflow-hidden video-shadow border border-neutral-800 video-gradient">
<video className="object-cover w-full h-full absolute top-0 left-0" loop="" muted="" playsinline="" preload="auto"></video>

<div className="absolute bottom-0 left-0 right-0 p-5 pb-6 z-10 flex flex-row justify-between items-end gap-5 pointer-events-none">
<div>
<div className="flex flex-row gap-3 items-center mb-1">
<img className="w-9 h-9 rounded-full avatar-outline pointer-events-auto"/>
<span className="font-semibold text-lg tracking-tight">User</span>
<button className="ml-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-xs font-medium text-white shadow-md hover:scale-105 transition pointer-events-auto">Follow</button>
</div>
<p className="text-md md:text-lg font-normal text-neutral-100 mb-1 max-w-[70vw] md:max-w-[300px] pointer-events-auto"></p>
<div className="flex gap-2 text-sm text-neutral-400 pointer-events-auto">
<span className="hashtag"></span>
<span className="hashtag"></span>
<span className="hashtag"></span>
</div>
</div>
<div className="flex flex-col gap-4 items-center pointer-events-auto">
<button className="video-action flex flex-col items-center group" title="Like">
<svg className="mb-1 group-hover:stroke-blue-400" fill="none" height="32" stroke="currentColor" width="32"><use href="#lucide-heart"></use></svg>
<span className="text-xs">0</span>
</button>
<button className="video-action flex flex-col items-center group" title="Comment">
<svg className="mb-1 group-hover:stroke-blue-400" fill="none" height="32" stroke="currentColor" width="32"><use href="#lucide-message-circle"></use></svg>
<span className="text-xs">0</span>
</button>
<button className="video-action flex flex-col items-center group" title="Share">
<svg className="mb-1 group-hover:stroke-blue-400" fill="none" height="32" stroke="currentColor" width="32"><use href="#lucide-share-2"></use></svg>
<span className="text-xs">Share</span>
</button>
</div>
</div>
</div>
</div>
</template>

<svg style={{display: 'none'}}>
<symbol id="lucide-home" viewbox="0 0 24 24"><path d="M3 9.5 12 4l9 5.5"></path><path d="M3 9.5V19a2 2 0 0 0 2 2h3m10-11.5V19a2 2 0 0 1-2 2h-3m-6 0V14a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v7"></path></symbol>
<symbol id="lucide-compass" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 9.76 9.76 7.76 16.24 14.24 14.24 16.24 7.76"></polygon></symbol>
<symbol id="lucide-message-square" viewbox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></symbol>
<symbol id="lucide-user" viewbox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-3-3.87"></path><path d="M4 21v-2a4 4 0 0 1 3-3.87"></path><circle cx="12" cy="7" r="4"></circle></symbol>
<symbol id="lucide-plus" viewbox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></symbol>
<symbol id="lucide-heart" viewbox="0 0 24 24"><path d="M20.8 4.6c-1.7-1.7-4.5-1.7-6.2 0l-.6.6-.6-.6C11.1 2.9 8.3 2.9 6.6 4.6c-1.7 1.7-1.7 4.5 0 6.2l8.6 8.6 8.6-8.6c1.7-1.7 1.7-4.5 0-6.2z"></path></symbol>
<symbol id="lucide-message-circle" viewbox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-1.9 5.4 8.5 8.5 0 0 1-6.6 3.1c-2.3 0-4.4-.9-6-2.6C3.7 15.3 3 13.4 3 11.5a8.5 8.5 0 0 1 8.5-8.5c2.3 0 4.4.9 6 2.6 1.7 1.7 2.6 3.8 2.6 6z"></path></symbol>
<symbol id="lucide-share-2" viewbox="0 0 24 24"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></symbol>
</svg>


    </>
  );
}
