import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  let inputText = '';
  let shiftActive = true; 
  let currentMode = 'letters'; 

  document.querySelectorAll('.key[data-char]').forEach(key => {
    key.addEventListener('click', () => {
      const char = key.dataset.char;
      if (char === ' ') { addChar(' '); return; }
      
      if (currentMode === 'letters') {
          addChar(shiftActive ? char.toUpperCase() : char.toLowerCase());
          if (shiftActive) toggleShift(); 
      } else {
          addChar(char);
      }
    });
  });

  function addChar(char) {
    inputText += char;
    updateDisplay();
  }

  function deleteLast() {
    inputText = inputText.slice(0, -1);
    updateDisplay();
    if (inputText.length === 0 && !shiftActive && currentMode === 'letters') {
      toggleShift();
    }
  }

  function toggleShift() {
    shiftActive = !shiftActive;
    const shiftKey = document.getElementById('shiftKey');
    
    if(shiftActive) {
      shiftKey.classList.add('shift-active', 'bg-white');
      shiftKey.classList.remove('bg-[#ACB1B8]');
    } else {
      shiftKey.classList.remove('shift-active', 'bg-white');
      shiftKey.classList.add('bg-[#ACB1B8]');
    }
    
    document.querySelectorAll('#letterKeys .key[data-char]').forEach(k => {
      if (k.dataset.char !== ' ') {
        k.textContent = shiftActive ? k.dataset.char.toUpperCase() : k.dataset.char.toLowerCase();
      }
    });
  }

  function showLetters() {
    currentMode = 'letters';
    document.getElementById('letterKeys').classList.remove('hidden');
    document.getElementById('numericKeys').classList.add('hidden');
    document.getElementById('symbolKeys').classList.add('hidden');
  }

  function showNumbers() {
    currentMode = 'numbers';
    document.getElementById('letterKeys').classList.add('hidden');
    document.getElementById('numericKeys').classList.remove('hidden');
    document.getElementById('symbolKeys').classList.add('hidden');
  }

  function showSymbols() {
    currentMode = 'symbols';
    document.getElementById('letterKeys').classList.add('hidden');
    document.getElementById('numericKeys').classList.add('hidden');
    document.getElementById('symbolKeys').classList.remove('hidden');
  }

  function updateDisplay() {
    const display = document.getElementById('textDisplay');
    
    if (inputText.length > 0) {
      display.innerHTML = `<span class="text-base text-black font-normal break-all flex items-center whitespace-pre-wrap">${escapeHtml(inputText)}<span class="inline-block w-[1.5px] h-5 bg-blue-500 cursor-blink rounded-full ml-px"></span></span>`;
    } else {
      display.innerHTML = `<span class="w-[1.5px] h-5 bg-blue-500 cursor-blink rounded-full"></span>`;
    }
    display.scrollLeft = display.scrollWidth;
  }

  function escapeHtml(text) {
    return text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function appendUserMessage(text) {
    const area = document.getElementById('messagesArea');
    const row = document.createElement('div');
    row.className = 'text-white/80 text-base leading-relaxed text-right ml-8';
    row.innerHTML = escapeHtml(text);
    area.appendChild(row);
    area.scrollTop = area.scrollHeight;
  }

  function appendBotMessage(text) {
    const area = document.getElementById('messagesArea');
    const row = document.createElement('div');
    row.className = 'text-white/95 text-base leading-relaxed mr-8 mt-2';
    row.innerHTML = text; 
    area.appendChild(row);
    area.scrollTop = area.scrollHeight;
  }

  function sendMessage() {
    const text = inputText.trim();
    if (!text) return;

    appendUserMessage(text);
    
    inputText = '';
    updateDisplay();
    
    if (currentMode !== 'letters') {
      showLetters();
    }
    if (!shiftActive) {
      toggleShift(); 
    }

    setTimeout(() => {
      const lowerText = text.toLowerCase();
      
      if (lowerText.includes('vol') || lowerText.includes('volé') || lowerText.includes('voler') || lowerText.includes('perdu')) {
        const responseHtml = `
          Je suis vraiment désolé d'apprendre cela. Chaque minute compte maintenant, nous allons voir ensemble comment faire opposition à votre carte et en commander une nouvelle.
          <button class="mt-4 w-full bg-white text-neutral-900 font-medium py-3 px-4 rounded-xl flex items-center justify-center transition-transform active:scale-95 shadow-sm">
            Faire opposition à ma CB
          </button>
        `;
        appendBotMessage(responseHtml);
      } else if (lowerText.includes('conseiller') || lowerText.includes('contact') || lowerText.includes('parler')) {
        appendBotMessage("Je comprends que vous avez besoin d'aide, pourriez-vous m'expliquer quelle est votre problématique ?");
      } else {
        appendBotMessage("Je suis là pour vous aider. Que souhaitez-vous savoir ?");
      }
    }, 600);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') { deleteLast(); return; }
    if (e.key === 'Enter') { sendMessage(); return; }
    if (e.key === 'Shift') { 
        if (!shiftActive && currentMode === 'letters') toggleShift(); 
        return; 
    }
    if (e.key.length === 1) { addChar(e.key); }
  });

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative w-full h-full bg-gradient-to-b from-[#281854] to-[#36225D] flex flex-col">

<div className="flex items-center justify-between px-5 pt-6 pb-4 shrink-0 relative z-10">
<button className="text-white p-1 opacity-90 hover:opacity-100 transition-opacity flex items-center justify-center">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<div className="flex items-center gap-2 text-white">
<iconify-icon height="20" icon="solar:chat-square-linear" width="20"></iconify-icon>
<span className="text-lg tracking-tight font-medium">SoBot</span>
</div>
<button className="text-white p-1 opacity-90 hover:opacity-100 transition-opacity flex items-center justify-center">
<iconify-icon height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar px-6 pt-2 pb-4 flex flex-col gap-6" id="messagesArea">
<div className="text-white/95 text-base leading-relaxed">
      Bonjour,<br/>
      Je suis SoBot votre assistant virtuel. Comment puis-je vous aider aujourd'hui ?
    </div>
</div>

<div className="px-5 pb-5 shrink-0 z-10 relative">
<div className="bg-white rounded-2xl p-1.5 flex items-center min-h-[52px]">
<div className="flex-1 pl-3 pr-2 py-1 flex items-center overflow-x-auto no-scrollbar" id="textDisplay">
<span className="w-[1.5px] h-5 bg-black cursor-blink rounded-full"></span>
</div>
<button className="w-10 h-10 shrink-0 bg-[#D30018] rounded-[14px] flex items-center justify-center text-white transition-transform active:scale-95 shadow-sm" id="sendBtn" onclick="sendMessage()">
<iconify-icon className="ml-[-2px] mt-[2px]" height="20" icon="solar:plain-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="bg-[#D1D3D9] pb-8 pt-0 shrink-0 select-none flex flex-col relative z-20" id="keyboard">

<div className="flex border-b border-[#BCC0C6] h-[42px] items-center px-2 mb-2">
<div className="flex-1 text-center text-black/80 text-base font-normal truncate px-1">Je</div>
<div className="w-px h-5 bg-[#BCC0C6]/80 shrink-0"></div>
<div className="flex-1 text-center text-black/80 text-base font-normal truncate px-1">Tu</div>
<div className="w-px h-5 bg-[#BCC0C6]/80 shrink-0"></div>
<div className="flex-1 text-center text-black/80 text-base font-normal truncate px-1">C'est</div>
</div>

<div className="px-1.5 relative max-w-[500px] w-full mx-auto">

<div className="flex flex-col gap-2.5" id="letterKeys">

<div className="flex justify-center gap-1.5 w-full">
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="q">Q</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="w">W</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="e">E</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="r">R</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="t">T</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="y">Y</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="u">U</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="i">I</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="o">O</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="p">P</button>
</div>

<div className="flex justify-center gap-1.5 px-[4%] w-full">
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="a">A</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="s">S</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="d">D</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="f">F</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="g">G</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="h">H</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="j">J</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="k">K</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="l">L</button>
</div>

<div className="flex justify-center gap-1.5 w-full">
<button className="w-[12%] max-w-[42px] h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black flex items-center justify-center key-press-dark transition-colors shift-active" id="shiftKey" onclick="toggleShift()">
<iconify-icon height="20" icon="solar:alt-arrow-up-linear" width="20"></iconify-icon>
</button>
<div className="flex flex-1 justify-center gap-1.5">
<button className="key flex-1 max-w-[42px] h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="z">Z</button>
<button className="key flex-1 max-w-[42px] h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="x">X</button>
<button className="key flex-1 max-w-[42px] h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="c">C</button>
<button className="key flex-1 max-w-[42px] h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="v">V</button>
<button className="key flex-1 max-w-[42px] h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="b">B</button>
<button className="key flex-1 max-w-[42px] h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="n">N</button>
<button className="key flex-1 max-w-[42px] h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="m">M</button>
</div>
<button className="w-[12%] max-w-[42px] h-[42px] bg-[#ACB1B8] rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black flex items-center justify-center key-press-dark transition-colors" onclick="deleteLast()">
<iconify-icon height="24" icon="solar:backspace-linear" width="24"></iconify-icon>
</button>
</div>

<div className="flex justify-center gap-1.5 w-full">
<button className="w-[23%] max-w-[88px] h-[42px] bg-[#ACB1B8] rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-base font-normal key-press-dark transition-colors" onclick="showNumbers()">123</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-base font-normal key-press transition-colors" data-char=" ">space</button>
<button className="w-[23%] max-w-[88px] h-[42px] bg-[#ACB1B8] rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-base font-normal key-press-dark transition-colors" onclick="sendMessage()">retour</button>
</div>
</div>

<div className="hidden flex flex-col gap-2.5" id="numericKeys">

<div className="flex justify-center gap-1.5 w-full">
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="1">1</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="2">2</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="3">3</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="4">4</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="5">5</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="6">6</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="7">7</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="8">8</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="9">9</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="0">0</button>
</div>

<div className="flex justify-center gap-1.5 w-full">
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="-">-</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="/">/</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char=":">:</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char=";">;</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="(">(</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char=")">)</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="$">$</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="&amp;">&amp;</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="@">@</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char='"'>"</button>
</div>

<div className="flex justify-center gap-1.5 w-full">
<button className="w-[12%] max-w-[42px] h-[42px] bg-[#ACB1B8] rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black flex items-center justify-center key-press-dark transition-colors" onclick="showSymbols()">
<span className="text-base font-normal">#+=</span>
</button>
<div className="flex flex-1 justify-center gap-1.5">
<button className="key flex-1 max-w-[56px] h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char=".">.</button>
<button className="key flex-1 max-w-[56px] h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char=",">,</button>
<button className="key flex-1 max-w-[56px] h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="?">?</button>
<button className="key flex-1 max-w-[56px] h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="!">!</button>
<button className="key flex-1 max-w-[56px] h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="'">'</button>
</div>
<button className="w-[12%] max-w-[42px] h-[42px] bg-[#ACB1B8] rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black flex items-center justify-center key-press-dark transition-colors" onclick="deleteLast()">
<iconify-icon height="24" icon="solar:backspace-linear" width="24"></iconify-icon>
</button>
</div>

<div className="flex justify-center gap-1.5 w-full">
<button className="w-[23%] max-w-[88px] h-[42px] bg-[#ACB1B8] rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-base font-normal key-press-dark transition-colors" onclick="showLetters()">ABC</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-base font-normal key-press transition-colors" data-char=" ">space</button>
<button className="w-[23%] max-w-[88px] h-[42px] bg-[#ACB1B8] rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-base font-normal key-press-dark transition-colors" onclick="sendMessage()">retour</button>
</div>
</div>

<div className="hidden flex flex-col gap-2.5" id="symbolKeys">

<div className="flex justify-center gap-1.5 w-full">
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="[">[</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="]">]</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="{">{</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="}">}</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="#">#</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="%">%</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="^">^</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="*">*</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="+">+</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="=">=</button>
</div>

<div className="flex justify-center gap-1.5 w-full">
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="_">_</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="\">\</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="|">|</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="~">~</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="&lt;">&lt;</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="&gt;">&gt;</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="€">€</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="£">£</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="¥">¥</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="•">•</button>
</div>

<div className="flex justify-center gap-1.5 w-full">
<button className="w-[12%] max-w-[42px] h-[42px] bg-[#ACB1B8] rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black flex items-center justify-center key-press-dark transition-colors" onclick="showNumbers()">
<span className="text-base font-normal">123</span>
</button>
<div className="flex flex-1 justify-center gap-1.5">
<button className="key flex-1 max-w-[56px] h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char=".">.</button>
<button className="key flex-1 max-w-[56px] h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char=",">,</button>
<button className="key flex-1 max-w-[56px] h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="?">?</button>
<button className="key flex-1 max-w-[56px] h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="!">!</button>
<button className="key flex-1 max-w-[56px] h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-xl font-normal flex items-center justify-center key-press transition-colors" data-char="'">'</button>
</div>
<button className="w-[12%] max-w-[42px] h-[42px] bg-[#ACB1B8] rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black flex items-center justify-center key-press-dark transition-colors" onclick="deleteLast()">
<iconify-icon height="24" icon="solar:backspace-linear" width="24"></iconify-icon>
</button>
</div>

<div className="flex justify-center gap-1.5 w-full">
<button className="w-[23%] max-w-[88px] h-[42px] bg-[#ACB1B8] rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-base font-normal key-press-dark transition-colors" onclick="showLetters()">ABC</button>
<button className="key flex-1 h-[42px] bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-base font-normal key-press transition-colors" data-char=" ">space</button>
<button className="w-[23%] max-w-[88px] h-[42px] bg-[#ACB1B8] rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] text-black text-base font-normal key-press-dark transition-colors" onclick="sendMessage()">retour</button>
</div>
</div>
</div>

<div className="flex justify-between items-center px-6 pt-5 pb-2 relative max-w-[500px] w-full mx-auto">
<button className="text-[#555860] hover:text-black transition-colors flex items-center justify-center">
<iconify-icon height="28" icon="solar:smile-circle-linear" width="28"></iconify-icon>
</button>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[130px] h-[5px] bg-black rounded-full"></div>
<button className="text-[#555860] hover:text-black transition-colors flex items-center justify-center">
<iconify-icon height="28" icon="solar:microphone-2-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</div>


    </>
  );
}
