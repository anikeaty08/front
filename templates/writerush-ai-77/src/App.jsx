import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      lucide.createIcons({
        attrs: {
          'stroke-width': 1.5
        }
      });

      // Interactive Caption Prototype
      const textarea = document.getElementById('caption-editor');
      const btnBold = document.getElementById('btn-bold');
      const btnItalic = document.getElementById('btn-italic');
      const btnBullet = document.getElementById('btn-bullet');
      const btnNumber = document.getElementById('btn-number');
      const btnBreak = document.getElementById('btn-break');
      const helper = document.getElementById('formatting-helper');

      // Fade out helper text on interaction
      textarea.addEventListener('focus', () => {
        if (helper) {
          helper.classList.add('opacity-0');
          setTimeout(() => {
            helper.style.display = 'none';
          }, 300);
        }
      });

      function toggleBold(text) {
        const chars = Array.from(text);
        let boldCount = 0;
        let alphaCount = 0;
        for (const char of chars) {
          const cp = char.codePointAt(0);
          const isBold = (cp >= 120224 && cp <= 120275);
          const isNormal = (cp >= 65 && cp <= 90) || (cp >= 97 && cp <= 122);
          if (isBold) {
            boldCount++;
            alphaCount++;
          } else if (isNormal) {
            alphaCount++;
          }
        }
        const shouldUnbold = alphaCount > 0 && (boldCount / alphaCount) >= 0.5;
        return chars.map(char => {
          const cp = char.codePointAt(0);
          if (shouldUnbold) {
            if (cp >= 120224 && cp <= 120249) return String.fromCodePoint(cp - 120159);
            if (cp >= 120250 && cp <= 120275) return String.fromCodePoint(cp - 120153);
          } else {
            if (cp >= 65 && cp <= 90) return String.fromCodePoint(cp + 120159);
            if (cp >= 97 && cp <= 122) return String.fromCodePoint(cp + 120153);
          }
          return char;
        }).join('');
      }

      function toggleItalic(text) {
        const chars = Array.from(text);
        let italicCount = 0;
        let alphaCount = 0;
        for (const char of chars) {
          const cp = char.codePointAt(0);
          const isItalic = (cp >= 120320 && cp <= 120371);
          const isNormal = (cp >= 65 && cp <= 90) || (cp >= 97 && cp <= 122);
          if (isItalic) {
            italicCount++;
            alphaCount++;
          } else if (isNormal) {
            alphaCount++;
          }
        }
        const shouldUnitalic = alphaCount > 0 && (italicCount / alphaCount) >= 0.5;
        return chars.map(char => {
          const cp = char.codePointAt(0);
          if (shouldUnitalic) {
            if (cp >= 120320 && cp <= 120345) return String.fromCodePoint(cp - 120255);
            if (cp >= 120346 && cp <= 120371) return String.fromCodePoint(cp - 120249);
          } else {
            if (cp >= 65 && cp <= 90) return String.fromCodePoint(cp + 120255);
            if (cp >= 97 && cp <= 122) return String.fromCodePoint(cp + 120249);
          }
          return char;
        }).join('');
      }

      function togglePrefix(tx, prefixPattern) {
        const val = tx.value;
        const start = tx.selectionStart;
        const end = tx.selectionEnd;
        const startLinePos = val.lastIndexOf('\n', start - 1) + 1;
        let endLinePos = val.indexOf('\n', end);
        if (endLinePos === -1) endLinePos = val.length;

        const affectedText = val.substring(startLinePos, endLinePos);
        const lines = affectedText.split('\n');
        const firstNonEmpty = lines.find(line => line.trim() !== '') || lines[0] || '';
        const shouldRemove = firstNonEmpty.startsWith(prefixPattern);

        const updatedLines = lines.map(line => {
          if (shouldRemove) {
            return line.startsWith(prefixPattern) ? line.substring(prefixPattern.length) : line;
          } else {
            return prefixPattern + line;
          }
        });

        const replacement = updatedLines.join('\n');
        tx.value = val.substring(0, startLinePos) + replacement + val.substring(endLinePos);
        tx.selectionStart = startLinePos;
        tx.selectionEnd = startLinePos + replacement.length;
      }

      function toggleNumberedList(tx) {
        const val = tx.value;
        const start = tx.selectionStart;
        const end = tx.selectionEnd;
        const startLinePos = val.lastIndexOf('\n', start - 1) + 1;
        let endLinePos = val.indexOf('\n', end);
        if (endLinePos === -1) endLinePos = val.length;

        const affectedText = val.substring(startLinePos, endLinePos);
        const lines = affectedText.split('\n');
        const hasNumber = lines.some(line => /^\d+\.\s/.test(line));

        const updatedLines = lines.map((line, idx) => {
          if (hasNumber) {
            return line.replace(/^\d+\.\s/, '');
          } else {
            return `${idx + 1}. ` + line;
          }
        });

        const replacement = updatedLines.join('\n');
        tx.value = val.substring(0, startLinePos) + replacement + val.substring(endLinePos);
        tx.selectionStart = startLinePos;
        tx.selectionEnd = startLinePos + replacement.length;
      }

      function insertLineBreak(tx) {
        const val = tx.value;
        const start = tx.selectionStart;
        const end = tx.selectionEnd;
        tx.value = val.substring(0, start) + '\n' + val.substring(end);
        tx.selectionStart = tx.selectionEnd = start + 1;
      }

      function updateActiveStates() {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = textarea.value.substring(start, end);

        let hasBold = false;
        let hasItalic = false;

        if (selectedText.length > 0) {
          const chars = Array.from(selectedText);
          for (const char of chars) {
            const cp = char.codePointAt(0);
            if (cp >= 120224 && cp <= 120275) hasBold = true;
            if (cp >= 120320 && cp <= 120371) hasItalic = true;
          }
        }

        if (hasBold) {
          btnBold.classList.add('bg-[#7c3aed]', 'text-white');
          btnBold.classList.remove('bg-white', 'text-[#50575e]');
        } else {
          btnBold.classList.remove('bg-[#7c3aed]', 'text-white');
          btnBold.classList.add('bg-white', 'text-[#50575e]');
        }

        if (hasItalic) {
          btnItalic.classList.add('bg-[#7c3aed]', 'text-white');
          btnItalic.classList.remove('bg-white', 'text-[#50575e]');
        } else {
          btnItalic.classList.remove('bg-[#7c3aed]', 'text-white');
          btnItalic.classList.add('bg-white', 'text-[#50575e]');
        }
      }

      btnBold.addEventListener('click', (e) => {
        e.preventDefault();
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        if (start === end) return;
        const selectedText = textarea.value.substring(start, end);
        const transformed = toggleBold(selectedText);
        textarea.value = textarea.value.substring(0, start) + transformed + textarea.value.substring(end);
        textarea.selectionStart = start;
        textarea.selectionEnd = start + transformed.length;
        textarea.focus();
        updateActiveStates();
      });

      btnItalic.addEventListener('click', (e) => {
        e.preventDefault();
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        if (start === end) return;
        const selectedText = textarea.value.substring(start, end);
        const transformed = toggleItalic(selectedText);
        textarea.value = textarea.value.substring(0, start) + transformed + textarea.value.substring(end);
        textarea.selectionStart = start;
        textarea.selectionEnd = start + transformed.length;
        textarea.focus();
        updateActiveStates();
      });

      btnBullet.addEventListener('click', (e) => {
        e.preventDefault();
        togglePrefix(textarea, '• ');
        textarea.focus();
        updateActiveStates();
      });

      btnNumber.addEventListener('click', (e) => {
        e.preventDefault();
        toggleNumberedList(textarea);
        textarea.focus();
        updateActiveStates();
      });

      btnBreak.addEventListener('click', (e) => {
        e.preventDefault();
        insertLineBreak(textarea);
        textarea.focus();
        updateActiveStates();
      });

      textarea.addEventListener('keyup', updateActiveStates);
      textarea.addEventListener('mouseup', updateActiveStates);
      document.addEventListener('selectionchange', () => {
        if (document.activeElement === textarea) {
          updateActiveStates();
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen flex flex-col">
<div className="h-8 bg-[#1d2327] text-white flex items-center justify-between px-3 text-sm">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<div className="h-5 w-5 rounded-full border border-white/70 flex items-center justify-center text-[0.65rem] font-medium">
              W
            </div>
<span className="text-sm">Site Title</span>
</div>
<div className="hidden md:flex items-center gap-4 text-white/95">
<div className="flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="rotate-cw"></i>
<span>3</span>
</div>
<div className="flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="search"></i>
<span>Ctrl+K</span>
</div>
<div className="flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="message-square"></i>
<span>0</span>
</div>
<div className="flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="plus"></i>
<span>New</span>
</div>
</div>
</div>
<div className="flex items-center gap-2 text-sm">
<span>Howdy, admin</span>
<div className="h-5 w-5 rounded-sm bg-white/90"></div>
</div>
</div>
<div className="flex flex-1">
<aside className="hidden md:flex md:w-40 lg:w-44 bg-[#1d2327] text-[#f0f0f1] flex-col">
<div className="py-3">
<div className="px-3 space-y-1 text-sm">
<div className="flex items-center gap-2 rounded px-2.5 py-2 hover:bg-white/5">
<i className="h-4 w-4" data-lucide="gauge"></i>
<span>Dashboard</span>
</div>
<div className="flex items-center gap-2 rounded px-2.5 py-2 hover:bg-white/5">
<i className="h-4 w-4" data-lucide="pin"></i>
<span>Posts</span>
</div>
<div className="relative -mx-0 bg-[#3858e9] text-white">
<div className="flex items-center gap-2 px-3 py-2.5">
<div className="h-4 w-4 rounded-full bg-[#8b5cf6] flex items-center justify-center text-[0.6rem] font-medium">
                    W
                  </div>
<span>WriteRush</span>
</div>
<div className="ml-3 pl-3 pb-2 space-y-1 text-[#dcdcde]">
<div className="py-1.5 text-sm">All Content</div>
<div className="py-1.5 text-sm">Blog</div>
<div className="py-1.5 text-sm">Brand Voice</div>
<div className="py-1.5 text-sm">License</div>
<div className="py-1.5 text-sm font-medium text-white">
                    Dashboard
                  </div>
<div className="py-1.5 text-sm">Keyword Research</div>
<div className="py-1.5 text-sm">Product</div>
</div>
</div>
<div className="flex items-center gap-2 rounded px-2.5 py-2 hover:bg-white/5">
<i className="h-4 w-4" data-lucide="image"></i>
<span>Media</span>
</div>
<div className="flex items-center gap-2 rounded px-2.5 py-2 hover:bg-white/5">
<i className="h-4 w-4" data-lucide="file-text"></i>
<span>Pages</span>
</div>
<div className="flex items-center gap-2 rounded px-2.5 py-2 hover:bg-white/5">
<i className="h-4 w-4" data-lucide="message-square"></i>
<span>Comments</span>
</div>
<div className="mt-4 space-y-1">
<div className="flex items-center gap-2 rounded px-2.5 py-2 hover:bg-white/5">
<i className="h-4 w-4" data-lucide="palette"></i>
<span>Appearance</span>
</div>
<div className="flex items-center justify-between rounded px-2.5 py-2 hover:bg-white/5">
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="plug"></i>
<span>Plugins</span>
</div>
<span className="rounded-full bg-[#3858e9] px-1.5 text-xs text-white">
                    1
                  </span>
</div>
<div className="flex items-center gap-2 rounded px-2.5 py-2 hover:bg-white/5">
<i className="h-4 w-4" data-lucide="users"></i>
<span>Users</span>
</div>
<div className="flex items-center gap-2 rounded px-2.5 py-2 hover:bg-white/5">
<i className="h-4 w-4" data-lucide="wrench"></i>
<span>Tools</span>
</div>
<div className="flex items-center gap-2 rounded px-2.5 py-2 hover:bg-white/5">
<i className="h-4 w-4" data-lucide="settings"></i>
<span>Settings</span>
</div>
</div>
</div>
</div>
<div className="mt-auto px-3 py-3 text-sm text-white">
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="arrow-left-circle"></i>
<span>Collapse Menu</span>
</div>
</div>
</aside>
<main className="flex-1">
<div className="p-4 sm:p-6">
<div className="rounded-2xl border border-[#dcdcde] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] px-6 py-4 flex items-center gap-4">
<button className="text-[#1d2327] hover:text-black">
<i className="h-6 w-6" data-lucide="chevron-left"></i>
</button>
<h1 className="text-4xl font-semibold tracking-tight bg-gradient-to-r from-[#4f46e5] to-[#a855f7] bg-clip-text text-transparent">
                Generated Post
              </h1>
</div>
<div className="mt-6 grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_34rem] gap-6">
<div className="space-y-6">
<section className="rounded-3xl border border-[#eceef2] bg-white px-6 py-6">
<h2 className="text-2xl font-semibold tracking-tight text-[#1d2327]">
                    Selected Platform
                  </h2>
<div className="mt-5">
<div className="inline-flex items-center gap-3 rounded-xl border border-[#7c3aed] bg-white px-5 py-4 shadow-sm">
<div className="h-10 w-10 rounded-lg bg-[#1877f2] flex items-center justify-center text-white text-3xl font-semibold leading-none">
                        f
                      </div>
<span className="text-lg font-normal text-[#1d2327]">
                        Facebook
                      </span>
</div>
</div>
</section>
<section className="rounded-3xl border border-[#eceef2] bg-white px-6 py-6">
<h2 className="text-2xl font-semibold tracking-tight text-[#1d2327]">
                    Generated Content
                  </h2>
<div className="mt-5 rounded-2xl border border-[#dcdcde] bg-white overflow-hidden">
<div className="flex items-center justify-between px-4 py-4">
<div className="text-xl font-semibold text-[#1d2327]">
                        Caption
                      </div>
<div className="flex items-center gap-2">
<button className="h-9 w-9 rounded-lg text-[#7c3aed] hover:bg-[#f6f3ff] flex items-center justify-center">
<i className="h-5 w-5" data-lucide="sparkles"></i>
</button>
<button className="h-9 w-9 rounded-lg text-[#1d2327] hover:bg-[#f6f7f7] flex items-center justify-center">
<i className="h-5 w-5" data-lucide="copy"></i>
</button>
</div>
</div>
<div className="px-4 pb-0">
<div className="flex items-center gap-1.5">
<button className="h-8 w-8 rounded-md border border-[#dcdcde] bg-white text-[#50575e] hover:bg-[#f6f7f7] flex items-center justify-center text-sm font-semibold transition-colors" id="btn-bold">
                          B
                        </button>
<button className="h-8 w-8 rounded-md border border-[#dcdcde] bg-white text-[#50575e] hover:bg-[#f6f7f7] flex items-center justify-center text-sm italic font-normal transition-colors" id="btn-italic">
                          I
                        </button>
<button className="h-8 w-8 rounded-md border border-[#dcdcde] bg-white text-[#50575e] hover:bg-[#f6f7f7] flex items-center justify-center text-sm font-normal" id="btn-bullet">
                          •
                        </button>
<button className="h-8 w-8 rounded-md border border-[#dcdcde] bg-white text-[#50575e] hover:bg-[#f6f7f7] flex items-center justify-center text-sm font-normal" id="btn-number">
                          1.
                        </button>
<button className="h-8 w-8 rounded-md border border-[#dcdcde] bg-white text-[#50575e] hover:bg-[#f6f7f7] flex items-center justify-center" id="btn-break">
<i className="h-4 w-4" data-lucide="corner-down-left"></i>
</button>
</div>
<div className="text-xs text-gray-400 mt-2 select-none transition-opacity duration-300" id="formatting-helper">
                        Select text in the caption to apply formatting.
                      </div>
<div className="mt-3 border-t border-[#e5e7eb]"></div>
</div>
<div className="px-4 pt-4 pb-6">
<textarea className="w-full min-h-36 rounded-xl bg-white text-lg leading-8 text-[#50575e] border-0 focus:ring-0 focus:outline-none resize-none p-0" id="caption-editor" style={{outline: 'none', border: 'none'}}>
Ever feel like your writing process needs a little more spark and a lot less stress? ✍️ Whether you're tackling a big project or just looking to clear some mental clutter, WriteRush is here to help you get those ideas flowing effortlessly. It's all about making your creative journey smoother and more enjoyable every single day. 🚀 Give it a try and see how much faster you can turn your thoughts into something amazing! ✨</textarea>
</div>
</div>
</section>
<section className="rounded-3xl border border-[#eceef2] bg-white px-6 py-6">
<h2 className="text-2xl font-semibold tracking-tight text-[#1d2327]">
                    Enhancement Tools
                  </h2>
<div className="mt-5 rounded-2xl border border-[#dcdcde] bg-white">
<div className="px-5 py-5 text-lg text-[#8c8f94]">
                      Add a new hashtag and press Enter
                    </div>
<div className="border-t border-[#eceef2] px-5 py-4 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-xl border border-[#dcdcde] bg-white px-4 py-2 text-lg text-[#1d2327]">
                        #WriteRush ×
                      </span>
<span className="inline-flex items-center rounded-xl border border-[#dcdcde] bg-white px-4 py-2 text-lg text-[#1d2327]">
                        #WritingCommunity ×
                      </span>
<span className="inline-flex items-center rounded-xl border border-[#dcdcde] bg-white px-4 py-2 text-lg text-[#1d2327]">
                        #CreativityUnleashed ×
                      </span>
<span className="inline-flex items-center rounded-xl border border-[#dcdcde] bg-white px-4 py-2 text-lg text-[#1d2327]">
                        #WriteMore ×
                      </span>
<span className="inline-flex items-center rounded-xl border border-[#dcdcde] bg-white px-4 py-2 text-lg text-[#1d2327]">
                        #ProductivityTips ×
                      </span>
</div>
</div>
<div className="mt-6">
<h3 className="text-2xl font-semibold tracking-tight text-[#1d2327]">
                      Post Image
                    </h3>
<div className="mt-5 flex flex-wrap items-center gap-3">
<button className="text-lg text-[#1d2327]">Add image</button>
<button className="inline-flex items-center gap-2 rounded-lg border border-[#8c8f94] bg-white px-4 py-2.5 text-lg text-[#3858e9] hover:bg-[#f6f7f7]">
<span>Choose an Image</span>
</button>
<button className="inline-flex items-center gap-2 rounded-lg border border-[#8c8f94] bg-white px-4 py-2.5 text-lg text-[#3858e9] hover:bg-[#f6f7f7]">
<i className="h-4 w-4" data-lucide="sparkles"></i>
<span>AI Image</span>
</button>
</div>
</div>
</section>
<section className="rounded-3xl border border-[#eceef2] bg-white px-6 py-6">
<h2 className="text-2xl font-semibold tracking-tight text-[#1d2327]">
                    Using Social Platforms*
                  </h2>
<button className="mt-5 rounded-xl border border-[#8c8f94] bg-white px-5 py-3 text-lg text-[#1d2327] hover:bg-[#f6f7f7]">
                    Connect social account
                  </button>
</section>
<section className="rounded-3xl border border-[#eceef2] bg-white px-6 py-6">
<div className="flex items-center justify-between">
<h2 className="text-2xl font-semibold tracking-tight text-[#1d2327]">
                      Schedule
                    </h2>
<button className="relative h-6 w-11 rounded-full bg-[#dcdcde]">
<span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow-sm"></span>
</button>
</div>
</section>
<button className="w-full rounded-2xl bg-gradient-to-r from-[#6d28d9] to-[#c026d3] px-6 py-4 text-xl font-semibold text-white shadow-sm hover:opacity-95">
                  Publish to Social Media
                </button>
</div>
<aside className="xl:pt-0">
<section className="rounded-3xl border border-[#eceef2] bg-white px-6 py-6">
<h2 className="text-3xl font-semibold tracking-tight text-[#111827]">
                    Post Settings
                  </h2>
<div className="mt-5 space-y-5">
<div>
<label className="block text-xl font-normal text-[#1d2327] mb-2">
                        Post Purpose
                      </label>
<div className="h-12 rounded-xl border border-[#dcdcde] bg-[#fbfbfc] px-4 flex items-center justify-between text-lg text-[#b6b8bb]">
<span>Generic</span>
<i className="h-5 w-5" data-lucide="chevron-down"></i>
</div>
</div>
<div>
<label className="block text-xl font-normal text-[#1d2327] mb-2">
                        Post Length
                      </label>
<div className="h-12 rounded-xl border border-[#dcdcde] bg-[#fbfbfc] px-4 flex items-center justify-between text-lg text-[#b6b8bb]">
<span>Medium</span>
<i className="h-5 w-5" data-lucide="chevron-down"></i>
</div>
</div>
<div>
<label className="block text-xl font-normal text-[#1d2327] mb-2">
                        Language
                      </label>
<div className="h-12 rounded-xl border border-[#dcdcde] bg-[#fbfbfc] px-4 flex items-center justify-between text-lg text-[#b6b8bb]">
<span>English</span>
<i className="h-5 w-5" data-lucide="chevron-down"></i>
</div>
</div>
<div>
<label className="block text-xl font-normal text-[#1d2327] mb-2">
                        Tone
                      </label>
<div className="h-12 rounded-xl border border-[#dcdcde] bg-[#fbfbfc] px-4 flex items-center justify-between text-lg text-[#b6b8bb]">
<span>Casual</span>
<i className="h-5 w-5" data-lucide="chevron-down"></i>
</div>
</div>
</div>
</section>
</aside>
</div>
</div>
<footer className="px-6 py-4 text-lg text-[#646970]">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<p>
                Thank you for creating with
                <span className="text-[#3858e9]">WordPress</span>
                .
              </p>
<p>Version 7.0</p>
</div>
</footer>
</main>
</div>
</div>


    </>
  );
}
