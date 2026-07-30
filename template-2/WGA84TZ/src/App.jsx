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
      
    // Simple theme switcher for prototype
    function setTheme(theme) {
      document.documentElement.classList.remove('theme-blue', 'theme-green', 'theme-purple', 'theme-gray');
      document.documentElement.classList.add('theme-' + theme);
      document.getElementById('onboarding').classList.add('hidden');
      document.getElementById('chatbotStep').classList.remove('hidden');
    }
    function selectChatbot(personality) {
      document.getElementById('chatbotStep').classList.add('hidden');
      document.getElementById('dashboard').classList.remove('hidden');
      document.getElementById('chatbotPersonality').textContent = personality;
    }
    function showScreen(screen) {
      let screens = ['dashboard', 'outreach', 'chat', 'resources', 'settings'];
      screens.forEach(id => document.getElementById(id).classList.add('hidden'));
      document.getElementById(screen).classList.remove('hidden');
    }
    function showOutreachForm(type) {
      document.getElementById('outreachTypes').classList.add('hidden');
      document.getElementById('outreachForm').classList.remove('hidden');
      document.getElementById('outreachTypeLabel').textContent = type;
    }
    function resetOutreach() {
      document.getElementById('outreachForm').reset();
      document.getElementById('outreachTypes').classList.remove('hidden');
      document.getElementById('outreachForm').classList.add('hidden');
    }
  
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
      

<div className="w-full max-w-xs mx-auto py-10" id="onboarding">
<div className="mb-6 text-center">
<img alt="BCPS Logo" className="mx-auto w-12 h-12 mb-3 opacity-80" src="https://cdn.jsdelivr.net/gh/feathericons/feather@4.28.0/icons/shield.svg" />
<h1 className="text-2xl font-bold mb-1">Welcome to BCPS Bullying App</h1>
<p className="text-sm text-gray-500">Your private, supportive space to report bullying and get help.</p>
</div>
<div>
<h2 className="text-lg font-semibold mb-2">Choose your color vibe</h2>
<div className="grid grid-cols-2 gap-3">
<button className="rounded-xl border-2 border-primary bg-accent p-4 flex flex-col items-center hover:scale-105 transition focus-ring" onClick={(e) => { setTheme('blue') }}>
<span className="block w-6 h-6 rounded-full bg-blue-400 mb-1"></span>
<span className="text-xs font-medium">Calm Blue</span>
</button>
<button className="rounded-xl border-2 border-primary bg-accent p-4 flex flex-col items-center hover:scale-105 transition focus-ring" onClick={(e) => { setTheme('green') }}>
<span className="block w-6 h-6 rounded-full bg-green-400 mb-1"></span>
<span className="text-xs font-medium">Fresh Green</span>
</button>
<button className="rounded-xl border-2 border-primary bg-accent p-4 flex flex-col items-center hover:scale-105 transition focus-ring" onClick={(e) => { setTheme('purple') }}>
<span className="block w-6 h-6 rounded-full bg-purple-400 mb-1"></span>
<span className="text-xs font-medium">Chill Purple</span>
</button>
<button className="rounded-xl border-2 border-primary bg-accent p-4 flex flex-col items-center hover:scale-105 transition focus-ring" onClick={(e) => { setTheme('gray') }}>
<span className="block w-6 h-6 rounded-full bg-gray-400 mb-1"></span>
<span className="text-xs font-medium">Neutral Gray</span>
</button>
</div>
</div>
</div>

<div className="hidden w-full max-w-xs mx-auto py-10" id="chatbotStep">
<div className="mb-4 text-center">
<h2 className="text-lg font-semibold mb-2">Pick your AI companion</h2>
<p className="text-sm text-gray-500">Choose a chatbot vibe that fits you. You can change it later!</p>
</div>
<div className="space-y-3">
<button className="w-full flex items-center gap-3 p-3 border-2 border-primary rounded-lg bg-accent hover:scale-105 transition focus-ring" onClick={(e) => { selectChatbot('Serious & Supportive') }}>
<img className="w-7 h-7" src="https://cdn.jsdelivr.net/gh/feathericons/feather@4.28.0/icons/smile.svg" />
<span className="font-medium">Serious & Supportive</span>
</button>
<button className="w-full flex items-center gap-3 p-3 border-2 border-primary rounded-lg bg-accent hover:scale-105 transition focus-ring" onClick={(e) => { selectChatbot('Mature Peer') }}>
<img className="w-7 h-7" src="https://cdn.jsdelivr.net/gh/feathericons/feather@4.28.0/icons/user.svg" />
<span className="font-medium">Mature Peer</span>
</button>
<button className="w-full flex items-center gap-3 p-3 border-2 border-primary rounded-lg bg-accent hover:scale-105 transition focus-ring" onClick={(e) => { selectChatbot('Slightly Sarcastic') }}>
<img className="w-7 h-7" src="https://cdn.jsdelivr.net/gh/feathericons/feather@4.28.0/icons/coffee.svg" />
<span className="font-medium">Slightly Sarcastic</span>
</button>
</div>
<div className="mt-6 text-center">
<p className="text-xs text-gray-400">More companion styles coming soon!</p>
</div>
</div>

<div className="hidden w-full max-w-xs mx-auto py-6 flex flex-col h-full min-h-[90vh]" id="dashboard">
<header className="mb-6 flex items-center justify-between">
<span className="font-bold text-xl">Hi, Student 👋</span>
<button className="rounded-full bg-accent p-2 focus-ring" onClick={(e) => { showScreen('settings') }} title="Settings">
<img className="w-6 h-6" src="https://cdn.jsdelivr.net/gh/feathericons/feather@4.28.0/icons/settings.svg" />
</button>
</header>
<div className="bg-white rounded-xl shadow p-5 mb-6 flex flex-col items-center gap-2">
<div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mb-2">
<img className="w-8 h-8" src="https://cdn.jsdelivr.net/gh/feathericons/feather@4.28.0/icons/message-circle.svg" />
</div>
<span className="font-semibold text-lg">Your AI Companion</span>
<span className="text-primary text-sm" id="chatbotPersonality">Serious & Supportive</span>
<button className="mt-2 px-4 py-2 bg-primary text-white rounded-md font-medium focus-ring" onClick={(e) => { showScreen('chat') }}>Chat Now</button>
</div>
<nav className="grid grid-cols-2 gap-4 mb-8">
<button className="bg-accent rounded-xl p-5 flex flex-col items-center shadow hover:scale-105 transition focus-ring" onClick={(e) => { showScreen('outreach') }}>
<img className="w-7 h-7 mb-1" src="https://cdn.jsdelivr.net/gh/feathericons/feather@4.28.0/icons/alert-octagon.svg" />
<span className="font-semibold text-xs">Report / Reach Out</span>
</button>
<button className="bg-accent rounded-xl p-5 flex flex-col items-center shadow hover:scale-105 transition focus-ring" onClick={(e) => { showScreen('resources') }}>
<img className="w-7 h-7 mb-1" src="https://cdn.jsdelivr.net/gh/feathericons/feather@4.28.0/icons/book-open.svg" />
<span className="font-semibold text-xs">Resource Library</span>
</button>
</nav>
<div className="text-xs text-center text-gray-400 mt-auto">
      FERPA compliant • Private • No sign-in required
    </div>
</div>

<div className="hidden w-full max-w-xs mx-auto py-6 flex flex-col min-h-[90vh]" id="outreach">
<button className="mb-4 text-primary text-sm font-medium flex items-center gap-1 focus-ring" onClick={(e) => { showScreen('dashboard') }}>
<img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/feathericons/feather@4.28.0/icons/arrow-left.svg" /> Back
    </button>
<h2 className="font-bold text-xl mb-2">Connect with Support</h2>
<div className="space-y-4" id="outreachTypes">
<button className="w-full flex items-center gap-3 p-4 border-2 border-primary rounded-lg bg-accent hover:scale-105 transition focus-ring" onClick={(e) => { showOutreachForm('Check-in with Counselor') }}>
<img className="w-7 h-7" src="https://cdn.jsdelivr.net/gh/feathericons/feather@4.28.0/icons/heart.svg" />
<span className="font-medium">Request counselor check-in</span>
</button>
<button className="w-full flex items-center gap-3 p-4 border-2 border-primary rounded-lg bg-accent hover:scale-105 transition focus-ring" onClick={(e) => { showOutreachForm('Share Anonymously') }}>
<img className="w-7 h-7" src="https://cdn.jsdelivr.net/gh/feathericons/feather@4.28.0/icons/eye-off.svg" />
<span className="font-medium">Share concern anonymously</span>
</button>
<button className="w-full flex items-center gap-3 p-4 border-2 border-primary rounded-lg bg-accent hover:scale-105 transition focus-ring" onClick={(e) => { showOutreachForm('File Official Report') }}>
<img className="w-7 h-7" src="https://cdn.jsdelivr.net/gh/feathericons/feather@4.28.0/icons/file-text.svg" />
<span className="font-medium">File official incident report</span>
</button>
</div>
<form className="hidden mt-4 bg-white rounded-lg shadow p-4 space-y-3" id="outreachForm" onreset="resetOutreach()">
<div className="font-semibold text-primary mb-2" id="outreachTypeLabel"></div>
<label className="block text-sm font-medium mb-1">What happened?</label>
<textarea className="w-full border border-primary rounded-md p-2 focus-ring" placeholder="Describe the situation..." rows="2"></textarea>
<div className="flex gap-2">
<div className="flex-1">
<label className="block text-sm font-medium mb-1">When?</label>
<input className="w-full border border-primary rounded-md p-2 focus-ring" placeholder="e.g. Today at lunch" type="text" />
</div>
<div className="flex-1">
<label className="block text-sm font-medium mb-1">Where?</label>
<input className="w-full border border-primary rounded-md p-2 focus-ring" placeholder="e.g. Cafeteria" type="text" />
</div>
</div>
<label className="block text-sm font-medium mb-1">Who was involved? <span className="text-gray-400">(optional)</span></label>
<input className="w-full border border-primary rounded-md p-2 focus-ring" placeholder="Names (optional)" type="text" />
<label className="block text-sm font-medium mb-1">Add supporting material <span className="text-gray-400">(optional)</span></label>
<input className="w-full p-1 text-sm" type="file" />
<div className="flex justify-end gap-2 mt-3">
<button className="px-3 py-1 bg-gray-200 rounded font-medium focus-ring" type="reset">Back</button>
<button className="px-3 py-1 bg-primary text-white rounded font-medium focus-ring" type="submit">Send</button>
</div>
<div className="text-xs text-gray-400 mt-2">
<strong>Privacy:</strong> You don't need to share your name unless you want a follow-up. Your info is encrypted and only seen by support staff.
      </div>
</form>
</div>

<div className="hidden w-full max-w-xs mx-auto py-6 flex flex-col h-full min-h-[90vh]" id="chat">
<button className="mb-4 text-primary text-sm font-medium flex items-center gap-1 focus-ring" onClick={(e) => { showScreen('dashboard') }}>
<img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/feathericons/feather@4.28.0/icons/arrow-left.svg" /> Back
    </button>
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
<img className="w-7 h-7" src="https://cdn.jsdelivr.net/gh/feathericons/feather@4.28.0/icons/message-circle.svg" />
</div>
<span className="font-bold text-lg">Your AI Companion</span>
</div>
<div className="flex-1 bg-white rounded-xl shadow p-4 space-y-3 overflow-y-auto mb-4">
<div className="flex items-start gap-2">
<div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
<img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/feathericons/feather@4.28.0/icons/message-circle.svg" />
</div>
<div className="bg-accent rounded-lg px-3 py-2 text-sm max-w-[80%]">
          Hey! I'm here to help. How are you feeling today?
        </div>
</div>

</div>
<form className="flex items-center gap-2 mt-auto">
<input className="flex-1 border border-primary rounded-md p-2 focus-ring" placeholder="Type a message..." type="text" />
<button className="bg-primary text-white rounded-full p-2 focus-ring" type="submit">
<img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/feathericons/feather@4.28.0/icons/send.svg" />
</button>
</form>
<div className="text-xs text-gray-400 mt-2 text-center">
<strong>Tip:</strong> You can talk to me about anything, or I can guide you through reporting.
    </div>
</div>

<div className="hidden w-full max-w-xs mx-auto py-6 flex flex-col h-full min-h-[90vh]" id="resources">
<button className="mb-4 text-primary text-sm font-medium flex items-center gap-1 focus-ring" onClick={(e) => { showScreen('dashboard') }}>
<img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/feathericons/feather@4.28.0/icons/arrow-left.svg" /> Back
    </button>
<h2 className="font-bold text-xl mb-3">Resource Library</h2>
<div className="grid gap-3">
<div className="bg-accent rounded-lg p-4 flex flex-col gap-2">
<span className="font-medium">What is bullying?</span>
<div className="flex gap-2">
<button className="bg-primary text-white rounded px-2 py-1 text-xs focus-ring">Article</button>
<button className="bg-primary text-white rounded px-2 py-1 text-xs focus-ring">TikTok Video</button>
<button className="bg-primary text-white rounded px-2 py-1 text-xs focus-ring">Podcast</button>
<button className="bg-primary text-white rounded px-2 py-1 text-xs focus-ring">Summary</button>
</div>
</div>
<div className="bg-accent rounded-lg p-4 flex flex-col gap-2">
<span className="font-medium">How to help a friend</span>
<div className="flex gap-2">
<button className="bg-primary text-white rounded px-2 py-1 text-xs focus-ring">Article</button>
<button className="bg-primary text-white rounded px-2 py-1 text-xs focus-ring">Podcast</button>
</div>
</div>
<div className="bg-accent rounded-lg p-4 flex flex-col gap-2">
<span className="font-medium">When to escalate</span>
<div className="flex gap-2">
<button className="bg-primary text-white rounded px-2 py-1 text-xs focus-ring">Article</button>
<button className="bg-primary text-white rounded px-2 py-1 text-xs focus-ring">Summary</button>
</div>
</div>
<div className="bg-accent rounded-lg p-4 flex flex-col gap-2">
<span className="font-medium">Conflict resolution</span>
<div className="flex gap-2">
<button className="bg-primary text-white rounded px-2 py-1 text-xs focus-ring">Article</button>
<button className="bg-primary text-white rounded px-2 py-1 text-xs focus-ring">TikTok Video</button>
</div>
</div>
</div>
<div className="mt-4 text-xs text-gray-500 text-center">
      Can't find what you need? <a className="text-primary underline" href="#">Generate your own version</a>
</div>
</div>

<div className="hidden w-full max-w-xs mx-auto py-6 flex flex-col h-full min-h-[90vh]" id="settings">
<button className="mb-4 text-primary text-sm font-medium flex items-center gap-1 focus-ring" onClick={(e) => { showScreen('dashboard') }}>
<img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/feathericons/feather@4.28.0/icons/arrow-left.svg" /> Back
    </button>
<h2 className="font-bold text-xl mb-4">Settings</h2>
<div className="mb-4">
<label className="block font-medium mb-1">Theme palette</label>
<div className="flex gap-2">
<button className="w-7 h-7 rounded-full bg-blue-400 border-2 border-primary focus-ring" onClick={(e) => { setTheme('blue') }}></button>
<button className="w-7 h-7 rounded-full bg-green-400 border-2 border-primary focus-ring" onClick={(e) => { setTheme('green') }}></button>
<button className="w-7 h-7 rounded-full bg-purple-400 border-2 border-primary focus-ring" onClick={(e) => { setTheme('purple') }}></button>
<button className="w-7 h-7 rounded-full bg-gray-400 border-2 border-primary focus-ring" onClick={(e) => { setTheme('gray') }}></button>
</div>
</div>
<div className="mb-4">
<label className="block font-medium mb-1">AI chatbot personality</label>
<select className="w-full border border-primary rounded p-2 focus-ring" onChange={(e) => { selectChatbot(e.currentTarget.value) }}>
<option value="Serious & Supportive">Serious & Supportive</option>
<option value="Mature Peer">Mature Peer</option>
<option value="Slightly Sarcastic">Slightly Sarcastic</option>
</select>
</div>
<div className="mb-4">
<label className="block font-medium mb-1">Font size</label>
<select className="w-full border border-primary rounded p-2 focus-ring">
<option>Normal</option>
<option>Large</option>
<option>Extra Large</option>
</select>
</div>
<div className="mb-4 flex items-center gap-2">
<input className="focus-ring" id="high-contrast" type="checkbox" />
<label className="font-medium" htmlFor="high-contrast">High contrast mode</label>
</div>
<div className="mb-4 flex items-center gap-2">
<input className="focus-ring" id="voice-to-text" type="checkbox" />
<label className="font-medium" htmlFor="voice-to-text">Voice-to-text input</label>
</div>
<div className="mb-4">
<label className="block font-medium mb-1">Simple language</label>
<select className="w-full border border-primary rounded p-2 focus-ring">
<option>Normal</option>
<option>Simple English</option>
</select>
</div>
<div className="text-xs text-gray-400 mt-6">
<strong>Privacy:</strong> No personal info is needed for basic use. See <a className="text-primary underline" href="#">privacy policy</a>.
    </div>
</div>

    </>
  );
}
