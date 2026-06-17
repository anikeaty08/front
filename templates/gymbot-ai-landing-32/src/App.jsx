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



        function openVideoModal(url) {
            const modal = document.getElementById('aura-video-modal');
            const videoPlayer = document.getElementById('aura-modal-player');
            if (modal && videoPlayer) {
                videoPlayer.src = url;
                modal.classList.remove('invisible', 'opacity-0', 'pointer-events-none');
                modal.classList.add('visible', 'opacity-100', 'pointer-events-auto');
                videoPlayer.play().catch(e => console.log('Playback failed:', e));
            }
        }

        function closeVideoModal() {
            const modal = document.getElementById('aura-video-modal');
            const videoPlayer = document.getElementById('aura-modal-player');
            if (modal && videoPlayer) {
                modal.classList.add('invisible', 'opacity-0', 'pointer-events-none');
                modal.classList.remove('visible', 'opacity-100', 'pointer-events-auto');
                videoPlayer.pause();
                videoPlayer.currentTime = 0;
                setTimeout(() => { videoPlayer.src = ''; }, 300);
            }
        }
    


      // ==========================================
      // TEXT REVEAL LOGIC
      // ==========================================
      document.addEventListener('DOMContentLoaded', () => {
          const revealText = document.getElementById('scroll-reveal-text');
          
          if(revealText) {
              // Split text into words
              const textContent = revealText.textContent.trim();
              const words = textContent.split(/\s+/);
              revealText.innerHTML = '';
              
              // Create spans for each word
              words.forEach(word => {
                  const span = document.createElement('span');
                  span.textContent = word + ' ';
                  // Base state: dark grey (zinc-700 equivalent)
                  span.className = 'reveal-span text-zinc-700';
                  revealText.appendChild(span);
              });

              const spans = revealText.querySelectorAll('span');

              // handleScroll function
              const handleScroll = () => {
                  const rect = revealText.getBoundingClientRect();
                  const windowHeight = window.innerHeight;
                  
                  // Logic: Start revealing when element is 85% down the viewport
                  // Finish revealing when element is 35% down the viewport (higher up)
                  const startRevealPoint = windowHeight * 0.85; 
                  const endRevealPoint = windowHeight * 0.35;
                  
                  // Calculate progress (0 to 1) based on scroll position
                  let progress = (startRevealPoint - rect.top) / (startRevealPoint - endRevealPoint);
                  progress = Math.max(0, Math.min(1, progress));
                  
                  // Determine how many words should be lit up
                  const activeCount = Math.floor(progress * spans.length);
                  
                  spans.forEach((span, index) => {
                      if (index < activeCount) {
                          // Active state: White
                          span.classList.remove('text-zinc-700');
                          span.classList.add('text-zinc-100');
                      } else {
                          // Inactive state: Dark Grey
                          span.classList.remove('text-zinc-100');
                          span.classList.add('text-zinc-700');
                      }
                      
                      // Cursor Logic: Add cursor to the last active word if in progress
                      if (index === activeCount - 1 && progress > 0 && progress < 1) {
                          span.classList.add('cursor-active');
                      } else {
                          span.classList.remove('cursor-active');
                      }
                  });
              };

              window.addEventListener('scroll', handleScroll);
              handleScroll(); // Init call
          }
      });


      // ==========================================
      // AIRTABLE CONFIGURATION
      // ==========================================
      // Replace these values to connect to your real sheet
      const AIRTABLE_CONFIG = {
          pat: 'patXXXXXXXXXXXXXX.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // Your Personal Access Token
          baseId: 'appXXXXXXXXXXXXXX', // Your Base ID
          tableName: 'Gyms', // Your Table Name (Case sensitive)
      };

      // Fallback Data (Used if Airtable connection fails or keys are missing)
      const FALLBACK_DATA = [
          { fields: { Name: "Tiger Muay Thai", Location: "Phuket", Price: "$400", Type: "All levels", Notes: "Huge facility, many classes." } },
          { fields: { Name: "Diamond Muay Thai", Location: "Koh Phangan", Price: "$250", Type: "Beginner friendly", Notes: "Quiet, island vibes." } },
          { fields: { Name: "Fairtex", Location: "Pattaya", Price: "$350", Type: "Pro focused", Notes: "Legendary gym, modern equipment." } },
          { fields: { Name: "Santai Muay Thai", Location: "Chiang Mai", Price: "$200", Type: "Traditional", Notes: "Authentic style, cheaper living cost." } },
          { fields: { Name: "Sinbi Muay Thai", Location: "Phuket", Price: "$300", Type: "Intermediate", Notes: "Great technical instruction." } }
      ];

      let gymDatabase = [];
      let isConnected = false;

      // Elements
      const form = document.getElementById('chat-form');
      const input = document.getElementById('user-input');
      const messagesContainer = document.getElementById('chat-messages');
      const statusDot = document.getElementById('status-dot');
      const connectionText = document.getElementById('connection-text');

      // Initialize and Fetch Data
      async function init() {
          try {
              // If keys are dummy keys, throw immediately to use fallback
              if(AIRTABLE_CONFIG.baseId.includes('XXXX')) throw new Error("Config missing");

              const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_CONFIG.baseId}/${AIRTABLE_CONFIG.tableName}?maxRecords=100&view=Grid%20view`, {
                  headers: {
                      Authorization: `Bearer ${AIRTABLE_CONFIG.pat}`
                  }
              });

              if (!response.ok) throw new Error("Network response was not ok");

              const data = await response.json();
              gymDatabase = data.records;
              isConnected = true;
              updateStatus(true);
          } catch (error) {
              console.warn("Airtable Connection Failed/Skipped:", error);
              console.log("Using Fallback Data");
              gymDatabase = FALLBACK_DATA;
              isConnected = false;
              updateStatus(false);
          }

          // Add Welcome Message
          setTimeout(() => {
              messagesContainer.appendChild(createMessage(
                  `Sawadee krup! 🥊 I've loaded ${gymDatabase.length} verified gyms from the database.<br><br>Tell me your budget and preferred location (e.g., "Phuket under $300"), and I'll filter the list for you.`
              , false));
          }, 500);
      }

      function updateStatus(connected) {
          if (connected) {
              statusDot.className = "absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-zinc-900 rounded-full status-pulse";
              connectionText.innerHTML = '<span class="iconify text-emerald-500" data-icon="lucide:database" data-width="10"></span> Connected to Airtable';
              connectionText.classList.remove('text-zinc-500');
              connectionText.classList.add('text-emerald-500/80');
          } else {
              statusDot.className = "absolute bottom-0 right-0 w-3 h-3 bg-orange-500 border-2 border-zinc-900 rounded-full";
              connectionText.innerHTML = '<span class="iconify text-orange-500" data-icon="lucide:database-zap" data-width="10"></span> Offline Mode (Demo Data)';
              connectionText.classList.remove('text-zinc-500');
              connectionText.classList.add('text-orange-500/80');
          }
      }

      const createMessage = (text, isUser = false) => {
          const wrapper = document.createElement('div');
          wrapper.className = `flex gap-4 ${isUser ? 'flex-row-reverse' : ''} fade-in-up`;

          const avatar = document.createElement('div');
          avatar.className = `w-8 h-8 rounded-full border flex-shrink-0 flex items-center justify-center mt-1
              ${isUser ? 'bg-zinc-100 border-zinc-200' : 'bg-zinc-800 border-white/10'}`;

          if (isUser) {
              avatar.innerHTML = '<span class="iconify text-zinc-900" data-icon="lucide:user" data-width="16"></span>';
          } else {
              avatar.innerHTML = '<span class="iconify text-orange-400" data-icon="lucide:bot" data-width="16"></span>';
          }

          const bubble = document.createElement('div');
          bubble.className = `px-4 py-3 rounded-2xl text-sm leading-relaxed max-w-[85%] shadow-sm
              ${isUser
                  ? 'bg-zinc-100 text-zinc-900 rounded-tr-none'
                  : 'bg-zinc-800/50 border border-white/5 text-zinc-200 rounded-tl-none'}`;

          bubble.innerHTML = text.replace(/\n/g, '<br>');

          wrapper.appendChild(avatar);
          wrapper.appendChild(bubble);
          return wrapper;
      };

      const createTypingIndicator = () => {
          const wrapper = document.createElement('div');
          wrapper.id = 'typing-indicator';
          wrapper.className = 'flex gap-4 fade-in-up';
          wrapper.innerHTML = `
              <div class="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex-shrink-0 flex items-center justify-center mt-1">
                  <span class="iconify text-orange-400" data-icon="lucide:bot" data-width="16"></span>
              </div>
              <div class="bg-zinc-800/50 border border-white/5 px-4 py-4 rounded-2xl rounded-tl-none flex items-center gap-1 h-[46px]">
                  <div class="w-1.5 h-1.5 bg-zinc-500 rounded-full typing-dot"></div>
                  <div class="w-1.5 h-1.5 bg-zinc-500 rounded-full typing-dot"></div>
                  <div class="w-1.5 h-1.5 bg-zinc-500 rounded-full typing-dot"></div>
              </div>
          `;
          return wrapper;
      };

      const getBotResponse = (query) => {
          const lowerQ = query.toLowerCase();

          // Logic to search the loaded database (works for both Airtable data and Fallback data)
          // Assumes fields are consistent (Name, Location, Price, Notes)
          let matches = gymDatabase.filter(record => {
              const f = record.fields;
              const priceNum = f.Price ? parseInt(f.Price.replace(/[^0-9]/g, '')) : 0;

              const matchesLocation = f.Location && lowerQ.includes(f.Location.toLowerCase());
              const matchesBudget = (lowerQ.includes('cheap') || lowerQ.includes('budget'))
                  ? priceNum < 300
                  : true;

              // If user specifies a number for price
              const userPrice = query.match(/\d+/);
              const matchesExactPrice = userPrice ? priceNum <= parseInt(userPrice[0]) : true;

              // Simple search logic
              if (lowerQ.includes(f.Location.toLowerCase())) return true;
              if (lowerQ.includes('phuket') && f.Location === 'Phuket') return true;
              if (lowerQ.includes('chiang mai') && f.Location === 'Chiang Mai') return true;

              return false;
          });

          // Default fallback if no matches found
          if (matches.length === 0) {
               // Return random 2 if no specific match
               matches = gymDatabase.slice(0, 2);
          }

          if (matches.length > 0) {
              const gymList = matches.map(r => {
                  const f = r.fields;
                  return `• <strong>${f.Name}</strong> (${f.Location}) - ${f.Price}/mo<br>  <span class="text-zinc-400 text-xs">${f.Notes || ''}</span>`;
              }).join('<br><br>');

              return `Found ${matches.length} matches in the database:<br><br>${gymList}<br><br>I can refine this if you tell me your experience level.`;
          }

          return "I couldn't find a specific match in the loaded data. Try asking for 'Phuket' or 'Chiang Mai'.";
      };

      form.addEventListener('submit', (e) => {
          e.preventDefault();
          const text = input.value.trim();
          if (!text) return;

          // Add User Message
          messagesContainer.appendChild(createMessage(text, true));
          input.value = '';
          messagesContainer.scrollTop = messagesContainer.scrollHeight;

          // Add Typing Indicator
          const typing = createTypingIndicator();
          messagesContainer.appendChild(typing);
          messagesContainer.scrollTop = messagesContainer.scrollHeight;

          // Simulate Network Delay (even if data is local)
          setTimeout(() => {
              typing.remove();
              const response = getBotResponse(text);
              messagesContainer.appendChild(createMessage(response, false));
              messagesContainer.scrollTop = messagesContainer.scrollHeight;
          }, 1000);
      });

      // Start the app
      init();
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-orange-500/30 transition-colors">
<svg aria-hidden="true" data-icon="lucide:flame" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0a5 5 0 0 1 1-3a1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-zinc-100 font-medium tracking-tight">
            FightLore
          </span>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium hover:text-zinc-100 hidden sm:block" href="#">
            Log in
          </a>
<a className="text-sm font-medium bg-zinc-100 text-zinc-900 px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors" href="#pricing">
            Get Access
          </a>
</div>
</div>
</nav>

<main className="pt-32 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none"></div>

<div className="max-w-3xl mx-auto text-center mb-12 relative z-10 px-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 text-xs font-medium mb-8">
<svg aria-hidden="true" data-icon="lucide:flame" data-strokeWidth="1.5" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0a5 5 0 0 1 1-3a1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
          Powered by Airtable Data
        </div>
<h1 className="text-4xl md:text-6xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-400 tracking-tight mb-6 leading-[1.1]">
          Find Your Perfect Thailand Gym
          <br/>
          in 60 Seconds with AI
        </h1>
<p className="leading-relaxed text-lg text-zinc-500 max-w-xl mr-auto ml-auto">
          Stop scrolling through outdated forums. Our AI accesses a live
          Fightlore database of Muay Thai &amp; MMA gyms to find the one that
          fits your budget.
        </p>
</div>

<div className="max-w-2xl mx-auto relative group mb-12 px-6">

<div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>

<div className="glass-panel rounded-xl overflow-hidden shadow-2xl shadow-black/50 relative flex flex-col h-[450px] md:h-[500px]">

<div className="px-6 py-4 border-b border-white/5 bg-zinc-900/50 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center">
<svg aria-hidden="true" data-icon="lucide:bot" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path>
</g>
</svg>
</div>

<div className="absolute bottom-0 right-0 w-3 h-3 bg-orange-500 border-2 border-zinc-900 rounded-full" id="status-dot"></div>
</div>
<div className="">
<div className="text-sm font-medium text-zinc-100">
                  Gym Finder AI
                </div>
<div className="text-xs flex items-center gap-1 transition-colors text-orange-500/80" id="connection-text"><svg aria-hidden="true" className="iconify text-orange-500 iconify--lucide" data-icon="lucide:database-zap" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 12 2.84M21 5v3m0 4l-3 5h4l-3 5"></path><path d="M3 12a9 3 0 0 0 11.59 2.87"></path></g></svg> Offline Mode (Demo Data)</div>
</div>
</div>
<div className="flex gap-2">
<span className="text-[10px] border border-white/10 px-2 py-1 rounded text-zinc-500">
                v2.1 Beta
              </span>
</div>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide bg-gradient-to-b from-zinc-900/30 to-zinc-950/30" id="chat-messages">

<div className="flex gap-4 fade-in-up">
<div className="w-8 h-8 rounded-full border flex-shrink-0 flex items-center justify-center mt-1 bg-zinc-800 border-white/10">
<svg aria-hidden="true" data-icon="lucide:bot" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path>
</g>
</svg>
</div>
<div className="px-4 py-3 rounded-2xl text-sm leading-relaxed max-w-[85%] shadow-sm bg-zinc-800/50 border border-white/5 text-zinc-200 rounded-tl-none">
                Sawadee krup! 🥊 I've loaded 5 verified gyms from the
                database.Tell me your budget and preferred location (e.g.,
                "Phuket under $300"), and I'll filter the list for you.
              </div>
</div>
<div className="flex gap-4 fade-in-up"><div className="w-8 h-8 rounded-full border flex-shrink-0 flex items-center justify-center mt-1 bg-zinc-800 border-white/10"><svg aria-hidden="true" data-icon="lucide:bot" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg></div><div className="px-4 py-3 rounded-2xl text-sm leading-relaxed max-w-[85%] shadow-sm bg-zinc-800/50 border border-white/5 text-zinc-200 rounded-tl-none">Sawadee krup! 🥊 I've loaded 5 verified gyms from the database.Tell me your budget and preferred location (e.g., "Phuket under $300"), and I'll filter the list for you.</div></div><div className="flex gap-4 fade-in-up"><div className="w-8 h-8 rounded-full border flex-shrink-0 flex items-center justify-center mt-1 bg-zinc-800 border-white/10"><svg aria-hidden="true" data-icon="lucide:bot" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg></div><div className="px-4 py-3 rounded-2xl text-sm leading-relaxed max-w-[85%] shadow-sm bg-zinc-800/50 border border-white/5 text-zinc-200 rounded-tl-none">Sawadee krup! 🥊 I've loaded 5 verified gyms from the database.Tell me your budget and preferred location (e.g., "Phuket under $300"), and I'll filter the list for you.</div></div><div className="flex gap-4 fade-in-up"><div className="w-8 h-8 rounded-full border flex-shrink-0 flex items-center justify-center mt-1 bg-zinc-800 border-white/10"><svg aria-hidden="true" data-icon="lucide:bot" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg></div><div className="px-4 py-3 rounded-2xl text-sm leading-relaxed max-w-[85%] shadow-sm bg-zinc-800/50 border border-white/5 text-zinc-200 rounded-tl-none">Sawadee krup! 🥊 I've loaded 5 verified gyms from the database.Tell me your budget and preferred location (e.g., "Phuket under $300"), and I'll filter the list for you.</div></div><div className="flex gap-4 fade-in-up"><div className="w-8 h-8 rounded-full border flex-shrink-0 flex items-center justify-center mt-1 bg-zinc-800 border-white/10"><svg aria-hidden="true" data-icon="lucide:bot" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg></div><div className="px-4 py-3 rounded-2xl text-sm leading-relaxed max-w-[85%] shadow-sm bg-zinc-800/50 border border-white/5 text-zinc-200 rounded-tl-none">Sawadee krup! 🥊 I've loaded 5 verified gyms from the database.Tell me your budget and preferred location (e.g., "Phuket under $300"), and I'll filter the list for you.</div></div><div className="flex gap-4 fade-in-up"><div className="w-8 h-8 rounded-full border flex-shrink-0 flex items-center justify-center mt-1 bg-zinc-800 border-white/10"><svg aria-hidden="true" className="iconify text-orange-400 iconify--lucide" data-icon="lucide:bot" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg></div><div className="px-4 py-3 rounded-2xl text-sm leading-relaxed max-w-[85%] shadow-sm bg-zinc-800/50 border border-white/5 text-zinc-200 rounded-tl-none">Sawadee krup! 🥊 I've loaded 5 verified gyms from the database.Tell me your budget and preferred location (e.g., "Phuket under $300"), and I'll filter the list for you.</div></div><div className="flex gap-4 fade-in-up"><div className="w-8 h-8 rounded-full border flex-shrink-0 flex items-center justify-center mt-1 bg-zinc-800 border-white/10"><svg aria-hidden="true" className="iconify text-orange-400 iconify--lucide" data-icon="lucide:bot" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg></div><div className="px-4 py-3 rounded-2xl text-sm leading-relaxed max-w-[85%] shadow-sm bg-zinc-800/50 border border-white/5 text-zinc-200 rounded-tl-none">Sawadee krup! 🥊 I've loaded 5 verified gyms from the database.Tell me your budget and preferred location (e.g., "Phuket under $300"), and I'll filter the list for you.</div></div><div className="flex gap-4 fade-in-up"><div className="w-8 h-8 rounded-full border flex-shrink-0 flex items-center justify-center mt-1 bg-zinc-800 border-white/10"><svg aria-hidden="true" className="iconify text-orange-400 iconify--lucide" data-icon="lucide:bot" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg></div><div className="px-4 py-3 rounded-2xl text-sm leading-relaxed max-w-[85%] shadow-sm bg-zinc-800/50 border border-white/5 text-zinc-200 rounded-tl-none">Sawadee krup! 🥊 I've loaded 5 verified gyms from the database.Tell me your budget and preferred location (e.g., "Phuket under $300"), and I'll filter the list for you.</div></div></div>

<div className="bg-zinc-900/80 border-white/5 border-t pt-4 pr-4 pb-4 pl-4 backdrop-blur-sm">
<form className="relative flex items-center gap-2" id="chat-form">
<div className="relative flex-1 group/input">
<input autocomplete="off" className="w-full bg-zinc-950/50 border border-zinc-800 text-zinc-200 text-sm rounded-lg pl-4 pr-4 py-3 focus:outline-none focus:ring-1 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all placeholder:text-zinc-600" id="user-input" placeholder="E.g., I want a Muay Thai gym in Phuket under $400/mo..." type="text"/>
</div>
<button className="bg-zinc-100 hover:bg-white text-zinc-900 rounded-lg p-3 transition-all hover:scale-105 active:scale-95 disabled:opacity-50" type="submit">
<svg aria-hidden="true" data-icon="lucide:arrow-up" data-strokeWidth="2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12l7-7l7 7m-7 7V5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</form>
</div>
</div>
</div>

<section className="overflow-hidden bg-zinc-950 w-full mb-24 pt-32 pb-32 relative">
<style>
        @keyframes marquee-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee-linear {
            animation: marquee-scroll 60s linear infinite;
        }
        /* Hover pause effect */
        .group:hover .animate-marquee-linear {
            animation-play-state: paused;
        }
    </style>


<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none"></div>

<div className="relative z-10 max-w-[1400px] mx-auto px-6 mb-10 flex items-center gap-3">
<div className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-orange-500">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
<h2 className="text-2xl font-semibold text-white tracking-tight">Real Gym Tours - See Before You Book</h2>
</div>

<div className="w-full relative z-10 group">

<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none"></div>

<div className="flex animate-marquee-linear w-max gap-x-8 gap-y-8 items-center">

<div className="relative w-[450px] aspect-video rounded-xl border border-white/10 bg-zinc-900 overflow-hidden shadow-2xl shadow-black/50 transition-all duration-500 hover:scale-[1.02] hover:border-orange-500/30 cursor-pointer group/card" onclick="openVideoModal('https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4')">
<video autoplay="" className="w-full h-full object-cover opacity-90 group-hover/card:opacity-100 transition-opacity duration-500" loop="" muted="" playsinline="" src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"></video>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100">
<div className="absolute bottom-5 left-5 w-full pr-5">
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-0.5">PK Saenchai Gym</h3>
<p className="text-sm text-zinc-400 font-medium">Bangkok</p>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/10 text-xs font-medium text-white mr-5">
<svg className="text-orange-500" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                5.0 <span className="text-white/60">(41)</span>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-[450px] aspect-video rounded-xl border border-white/10 bg-zinc-900 overflow-hidden shadow-2xl shadow-black/50 transition-all duration-500 hover:scale-[1.02] hover:border-blue-500/30 cursor-pointer group/card" onclick="openVideoModal('https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_30fps.mp4')">
<video autoplay="" className="w-full h-full object-cover opacity-90 group-hover/card:opacity-100 transition-opacity duration-500" loop="" muted="" playsinline="" src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_30fps.mp4"></video>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100">
<div className="absolute bottom-5 left-5 w-full pr-5">
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-lg font-semibold text-white tracking-tight mb-0.5">Yokkao Training</h3>
<p className="text-sm text-zinc-400 font-medium">Phuket</p>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/10 text-xs font-medium text-white mr-5">
<svg className="text-orange-500" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                4.8 <span className="text-white/60">(156)</span>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-[450px] aspect-video rounded-xl border border-white/10 bg-zinc-900 overflow-hidden shadow-2xl shadow-black/50 transition-all duration-500 hover:scale-[1.02] hover:border-emerald-500/30 cursor-pointer group/card" onclick="openVideoModal('https://videos.pexels.com/video-files/1526909/1526909-hd_1920_1080_24fps.mp4')">
<video autoplay="" className="w-full h-full object-cover opacity-90 group-hover/card:opacity-100 transition-opacity duration-500" loop="" muted="" playsinline="" src="https://videos.pexels.com/video-files/1526909/1526909-hd_1920_1080_24fps.mp4"></video>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100">
<div className="absolute bottom-5 left-5 w-full pr-5">
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-0.5">FA Group Gym</h3>
<p className="text-sm text-zinc-400 font-medium">Chiang Mai</p>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/10 text-xs font-medium text-white mr-5">
<svg className="text-orange-500" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                4.9 <span className="text-white/60">(89)</span>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-[450px] aspect-video rounded-xl border border-white/10 bg-zinc-900 overflow-hidden shadow-2xl shadow-black/50 transition-all duration-500 hover:scale-[1.02] hover:border-purple-500/30 cursor-pointer group/card" onclick="openVideoModal('https://videos.pexels.com/video-files/2759750/2759750-uhd_2560_1440_25fps.mp4')">
<video autoplay="" className="w-full h-full object-cover opacity-90 group-hover/card:opacity-100 transition-opacity duration-500" loop="" muted="" playsinline="" src="https://videos.pexels.com/video-files/2759750/2759750-uhd_2560_1440_25fps.mp4"></video>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100">
<div className="absolute bottom-5 left-5 w-full pr-5">
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-0.5">Tiger Muay Thai</h3>
<p className="text-sm text-zinc-400 font-medium">Phuket</p>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/10 text-xs font-medium text-white mr-5">
<svg className="text-orange-500" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                4.7 <span className="text-white/60">(312)</span>
</div>
</div>
</div>
</div>
</div>


<div className="relative w-[450px] aspect-video rounded-xl border border-white/10 bg-zinc-900 overflow-hidden shadow-2xl shadow-black/50 transition-all duration-500 hover:scale-[1.02] hover:border-orange-500/30 cursor-pointer group/card" onclick="openVideoModal('https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4')">
<video autoplay="" className="w-full h-full object-cover opacity-90 group-hover/card:opacity-100 transition-opacity duration-500" loop="" muted="" playsinline="" src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"></video>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100">
<div className="absolute bottom-5 left-5 w-full pr-5">
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-0.5">PK Saenchai Gym</h3>
<p className="text-sm text-zinc-400 font-medium">Bangkok</p>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/10 text-xs font-medium text-white mr-5">
<svg className="text-orange-500" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                5.0 <span className="text-white/60">(41)</span>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-[450px] aspect-video rounded-xl border border-white/10 bg-zinc-900 overflow-hidden shadow-2xl shadow-black/50 transition-all duration-500 hover:scale-[1.02] hover:border-blue-500/30 cursor-pointer group/card" onclick="openVideoModal('https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_30fps.mp4')">
<video autoplay="" className="w-full h-full object-cover opacity-90 group-hover/card:opacity-100 transition-opacity duration-500" loop="" muted="" playsinline="" src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_30fps.mp4"></video>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100">
<div className="absolute bottom-5 left-5 w-full pr-5">
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-0.5">Yokkao Training</h3>
<p className="text-sm text-zinc-400 font-medium">Phuket</p>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/10 text-xs font-medium text-white mr-5">
<svg className="text-orange-500" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                4.8 <span className="text-white/60">(156)</span>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-[450px] aspect-video rounded-xl border border-white/10 bg-zinc-900 overflow-hidden shadow-2xl shadow-black/50 transition-all duration-500 hover:scale-[1.02] hover:border-emerald-500/30 cursor-pointer group/card" onclick="openVideoModal('https://videos.pexels.com/video-files/1526909/1526909-hd_1920_1080_24fps.mp4')">
<video autoplay="" className="w-full h-full object-cover opacity-90 group-hover/card:opacity-100 transition-opacity duration-500" loop="" muted="" playsinline="" src="https://videos.pexels.com/video-files/1526909/1526909-hd_1920_1080_24fps.mp4"></video>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100">
<div className="absolute bottom-5 left-5 w-full pr-5">
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-0.5">FA Group Gym</h3>
<p className="text-sm text-zinc-400 font-medium">Chiang Mai</p>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/10 text-xs font-medium text-white mr-5">
<svg className="text-orange-500" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                4.9 <span className="text-white/60">(89)</span>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-[450px] aspect-video rounded-xl border border-white/10 bg-zinc-900 overflow-hidden shadow-2xl shadow-black/50 transition-all duration-500 hover:scale-[1.02] hover:border-purple-500/30 cursor-pointer group/card" onclick="openVideoModal('https://videos.pexels.com/video-files/2759750/2759750-uhd_2560_1440_25fps.mp4')">
<video autoplay="" className="w-full h-full object-cover opacity-90 group-hover/card:opacity-100 transition-opacity duration-500" loop="" muted="" playsinline="" src="https://videos.pexels.com/video-files/2759750/2759750-uhd_2560_1440_25fps.mp4"></video>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100">
<div className="absolute bottom-5 left-5 w-full pr-5">
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-0.5">Tiger Muay Thai</h3>
<p className="text-sm text-zinc-400 font-medium">Phuket</p>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/10 text-xs font-medium text-white mr-5">
<svg className="text-orange-500" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                4.7 <span className="text-white/60">(312)</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative z-10 flex justify-center mt-12">
<button className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-100 hover:bg-white text-zinc-950 font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]">
<span className="">Watch real tours of verified gyms before you book</span>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="fixed inset-0 z-[100] invisible opacity-0 pointer-events-none flex items-center justify-center bg-black/95 backdrop-blur-2xl transition-all duration-500 ease-out">
<button className="absolute top-8 right-8 text-zinc-400 hover:text-white transition-colors z-50 p-2 rounded-full hover:bg-white/10" onclick="closeVideoModal()">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div className="w-full h-full p-4 md:p-12 flex items-center justify-center">
<div className="relative w-full max-w-7xl aspect-video rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(255,255,255,0.1)] border border-white/10 bg-zinc-900">
<video className="w-full h-full object-contain" controls=""></video>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-36 bg-zinc-950 flex justify-center mb-12">
<div className="max-w-[1000px] px-8 md:px-12 relative z-10">
<p className="text-3xl md:text-5xl font-medium tracking-tight text-center leading-[1.3] text-zinc-800" id="scroll-reveal-text"><span className="reveal-span">Our </span><span className="reveal-span">Lab </span><span className="reveal-span">is </span><span className="reveal-span">where </span><span className="reveal-span">we </span><span className="reveal-span">explore </span><span className="reveal-span">emerging </span><span className="reveal-span">tools, </span><span className="reveal-span">AI-driven </span><span className="reveal-span">workflows, </span><span className="reveal-span">and </span><span className="reveal-span">modern </span><span className="reveal-span">creative </span><span className="reveal-span">production </span><span className="reveal-span">methods. </span><span className="reveal-span">It's </span><span className="reveal-span">where </span><span className="reveal-span">we </span><span className="reveal-span">experiment </span><span className="reveal-span">with </span><span className="reveal-span">ideas </span><span className="reveal-span">like </span><span className="reveal-span">AI </span><span className="reveal-span">video </span><span className="reveal-span">ads </span><span className="reveal-span">for </span><span className="reveal-span">performance </span><span className="reveal-span">marketing, </span><span className="reveal-span">test </span><span className="reveal-span">new </span><span className="reveal-span">approaches </span><span className="reveal-span">to </span><span className="reveal-span">video </span><span className="reveal-span">content, </span><span className="reveal-span">and </span><span className="reveal-span">bring </span><span className="reveal-span">proven </span><span className="reveal-span">innovations </span><span className="reveal-span">into </span><span className="reveal-span">real </span><span className="reveal-span">client </span><span className="reveal-span">work. </span></p>
</div>
</section>

<section className="max-w-2xl mx-auto px-6" id="pricing">
<div className="border border-white/10 rounded-3xl bg-zinc-900/20 overflow-hidden relative">

<div className="bg-gradient-to-r from-transparent via-orange-500/50 to-transparent w-full h-[1px] absolute top-0 left-0"></div>
<div className="md:p-10 pt-8 pr-8 pb-8 pl-8 relative rounded-3xl overflow-hidden">

<style>
              @keyframes border-rotate {
                  from { transform: translate(-50%, -50%) rotate(0deg); }
                  to { transform: translate(-50%, -50%) rotate(360deg); }
              }
            </style>

<div className="absolute inset-0 z-0 pointer-events-none rounded-3xl" style={{padding: '1.5px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude'}}>
<div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#f97316_360deg)]" style={{animation: 'border-rotate 4s linear infinite'}}></div>
</div>

<div className="relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
<div className="">
<h2 className="text-2xl font-medium text-zinc-100 tracking-tight mb-2">
                    What You Get
                  </h2>
<p className="text-sm text-zinc-500">
                    Everything you need to plan your training trip.
                  </p>
</div>
<div className="text-right hidden md:block">
<div className="text-3xl font-medium text-zinc-100 tracking-tight">
                    $97
                  </div>
<div className="text-xs text-zinc-500 uppercase tracking-wider font-medium mt-1">
                    One-time payment
                  </div>
</div>
</div>
<div className="space-y-4 mb-10">

<div className="flex items-start gap-3">
<div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
<svg aria-hidden="true" data-icon="lucide:check" data-strokeWidth="3" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="">
<span className="text-zinc-200 text-sm font-medium">
                      AI Gym Finder (Unlimited Use)
                    </span>
<p className="text-xs text-zinc-500 mt-0.5">
                      Real-time queries against our verified Airtable dataset.
                    </p>
</div>
</div>

<div className="flex items-start gap-3">
<div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
<svg aria-hidden="true" data-icon="lucide:check" data-strokeWidth="3" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="">
<span className="text-zinc-200 text-sm font-medium">
                      Live Airtable Database Access
                    </span>
<p className="text-xs text-zinc-500 mt-0.5">
                      Read-only access to the raw table data.
                    </p>
<a className="inline-flex items-center gap-1 text-[10px] text-orange-400 mt-1 hover:underline" href="#">
<svg aria-hidden="true" data-icon="lucide:table" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 3v18"></path>
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M3 9h18M3 15h18"></path>
</g>
</svg>
                      View Sample Sheet
                    </a>
</div>
</div>

<div className="flex items-start gap-3">
<div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
<svg aria-hidden="true" data-icon="lucide:check" data-strokeWidth="3" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="">
<span className="text-zinc-200 text-sm font-medium">
                      Lifetime Updates
                    </span>
<p className="text-xs text-zinc-500 mt-0.5">
                      We update prices and gym conditions monthly.
                    </p>
</div>
</div>
</div>

<div className="flex md:hidden items-baseline gap-2 mb-6">
<span className="text-3xl font-medium text-zinc-100 tracking-tight">
                  $97
                </span>
<span className="text-sm text-zinc-500">One-time payment</span>
</div>
<button className="w-full bg-zinc-100 hover:bg-white text-zinc-950 font-medium py-4 rounded-xl transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 shadow-lg shadow-white/5">
<span>Buy Now</span>
<svg aria-hidden="true" data-icon="lucide:arrow-right" data-strokeWidth="2" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="mt-4 flex items-center justify-center gap-4">
<div className="flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border border-zinc-900" src="https://i.pravatar.cc/100?img=1"/>
<img alt="" className="w-6 h-6 rounded-full border border-zinc-900" src="https://i.pravatar.cc/100?img=2"/>
<img alt="" className="w-6 h-6 rounded-full border border-zinc-900" src="https://i.pravatar.cc/100?img=3"/>
</div>
<p className="text-xs text-zinc-500">Trusted by 500+ fighters</p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 py-12 bg-zinc-950">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:flame" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0a5 5 0 0 1 1-3a1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-sm text-zinc-500">
            © 2026 FightLore. All rights reserved.
          </span>
</div>
<div className="flex gap-6 text-sm text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-300 transition-colors" href="mailto:support@fightlore.com">
            Contact
          </a>
</div>
</div>
</footer>



    </>
  );
}
