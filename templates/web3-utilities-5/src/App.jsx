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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
neutral: {
850: '#1a1a1a',
900: '#171717',
925: '#0a0a0a', // Card bg
950: '#050505', // Body bg
}
},
animation: {
'fade-in': 'fadeIn 0.3s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



      // Tool Data
      const tools = [
          {
              id: 1,
              title: 'Calldata Decoder',
              description: 'Decode Ethereum transaction input data into human-readable function calls and parameters.',
              icon: 'solar:code-scan-linear',
              tags: ['Security', 'EVM'],
              updated: 'Just now'
          },
          {
              id: 2,
              title: 'Unit Converter',
              description: 'Instant conversion between Ether, Gwei, Wei and other EVM denominations with precision.',
              icon: 'solar:calculator-linear',
              tags: ['Utils', 'Math'],
              updated: '2d ago'
          },
          {
              id: 3,
              title: 'Keccak-256 Hasher',
              description: 'Compute Keccak-256 hashes of strings or bytes for function selectors and event topics.',
              icon: 'solar:shield-keyhole-linear',
              tags: ['Cryptography'],
              updated: '1w ago'
          },
          {
              id: 4,
              title: 'ABI Encoder',
              description: 'Encode parameters into ABI-compliant hex strings for low-level calls and testing.',
              icon: 'solar:brackets-linear',
              tags: ['Dev', 'EVM'],
              updated: '3d ago'
          },
          {
              id: 5,
              title: 'Timestamp Converter',
              description: 'Convert between Unix timestamps and human-readable dates. Includes block time estimation.',
              icon: 'solar:clock-circle-linear',
              tags: ['Utils', 'Time'],
              updated: '1mo ago'
          },
          {
              id: 6,
              title: 'Vanity Generator',
              description: 'Browser-based generator for custom prefix/suffix EVM addresses. Runs locally.',
              icon: 'solar:wallet-linear',
              tags: ['Wallet', 'Local'],
              updated: '2w ago'
          },
          {
              id: 7,
              title: 'Signature Verifier',
              description: 'Verify EIP-712 and personal_sign signatures against addresses and messages.',
              icon: 'solar:verified-check-linear',
              tags: ['Security', 'Auth'],
              updated: '4d ago'
          },
          {
              id: 8,
              title: 'Chainlist Quick-Add',
              description: 'One-click add RPC configurations for testnets and mainnets to your injected wallet.',
              icon: 'solar:link-circle-linear',
              tags: ['Network', 'Config'],
              updated: '5d ago'
          },
          {
              id: 9,
              title: 'IPFS CID Inspector',
              description: 'Validate and convert between CIDv0 and CIDv1 formats. View gateway status.',
              icon: 'solar:cloud-storage-linear',
              tags: ['Storage', 'IPFS'],
              updated: '3w ago'
          },
          {
              id: 10,
              title: 'Impermanent Loss Calc',
              description: 'Visualize potential liquidity pool losses based on token price divergence.',
              icon: 'solar:chart-square-linear',
              tags: ['DeFi', 'Analytics'],
              updated: '1mo ago'
          },
          {
              id: 11,
              title: 'Bytecode Decompiler',
              description: 'Attempt to reconstruct Solidity logic from raw contract bytecode.',
              icon: 'solar:file-code-linear',
              tags: ['Reverse Eng', 'Beta'],
              updated: '1d ago'
          },
          {
              id: 12,
              title: 'Gas Estimator',
              description: 'Real-time gas price tracking across multiple chains with cost visualization.',
              icon: 'solar:fuel-linear',
              tags: ['Network', 'Gas'],
              updated: 'Live'
          }
      ];

      // DOM Elements
      const grid = document.getElementById('toolsGrid');
      const searchInput = document.getElementById('searchInput');
      const countSpan = document.getElementById('toolCount');
      const emptyState = document.getElementById('emptyState');

      // Render Function
      function renderTools(toolsToRender) {
          grid.innerHTML = '';

          // Update Count
          countSpan.textContent = `(${toolsToRender.length})`;

          // Check Empty State
          if (toolsToRender.length === 0) {
              grid.classList.add('hidden');
              emptyState.classList.remove('hidden');
              return;
          } else {
              grid.classList.remove('hidden');
              emptyState.classList.add('hidden');
          }

          // Generate Cards
          toolsToRender.forEach((tool, index) => {
              const card = document.createElement('div');
              card.className = 'group bg-neutral-925 border border-neutral-800 rounded-xl p-5 hover:border-neutral-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.03)] transition-all duration-300 cursor-pointer flex flex-col h-full animate-fade-in';
              card.style.animationDelay = `${index * 50}ms`;

              card.innerHTML = `
                  <div class="flex justify-between items-start mb-4">
                      <div class="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-neutral-800 transition-all duration-300">
                          <iconify-icon icon="${tool.icon}" width="20" height="20" stroke-width="1.5"></iconify-icon>
                      </div>
                      <div class="opacity-0 group-hover:opacity-100 transition-opacity">
                          <iconify-icon icon="solar:arrow-right-up-linear" class="text-neutral-500" width="16"></iconify-icon>
                      </div>
                  </div>

                  <h3 class="text-sm font-semibold text-neutral-100 mb-2 tracking-tight group-hover:text-white">${tool.title}</h3>
                  <p class="text-xs text-neutral-500 leading-relaxed mb-6 line-clamp-2 flex-1">${tool.description}</p>

                  <div class="flex items-center justify-between pt-4 border-t border-neutral-900 mt-auto">
                      <div class="flex gap-2">
                          ${tool.tags.map(tag => `
                              <span class="px-1.5 py-0.5 rounded text-[10px] font-medium bg-neutral-900 text-neutral-400 border border-neutral-800 uppercase tracking-wide">${tag}</span>
                          `).join('')}
                      </div>
                      <span class="text-[10px] text-neutral-600 font-medium">${tool.updated}</span>
                  </div>
              `;

              grid.appendChild(card);
          });
      }

      // Search Logic
      function handleSearch(e) {
          const query = e.target.value.toLowerCase();
          const filtered = tools.filter(tool => {
              return tool.title.toLowerCase().includes(query) ||
                     tool.description.toLowerCase().includes(query) ||
                     tool.tags.some(tag => tag.toLowerCase().includes(query));
          });
          renderTools(filtered);
      }

      // Event Listeners
      searchInput.addEventListener('input', handleSearch);

      // Keyboard Shortcut (Cmd/Ctrl + K)
      document.addEventListener('keydown', (e) => {
          if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
              e.preventDefault();
              searchInput.focus();
          }
      });

      // Initial Render
      renderTools(tools);
    
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
      

<header className="fixed top-0 w-full z-50 border-b border-neutral-900 glass">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">

<div className="flex items-center gap-3 cursor-pointer group">
<div className="w-6 h-6 bg-white rounded flex items-center justify-center text-black group-hover:scale-105 transition-transform">
<span className="font-mono font-bold text-xs">L</span>
</div>
<div className="flex items-center gap-2">
<span className="font-semibold text-sm tracking-tight text-white">
              Lancers
            </span>
<span className="text-neutral-600 text-xs">/</span>
<span className="text-neutral-400 text-xs tracking-wide">
              PLAYGROUND
            </span>
</div>
</div>
<div className="flex-1 flex justify-center px-4">
<div className="w-full max-w-md relative group">
<div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-white transition-colors">
<iconify-icon height="16" icon="solar:magnifer-linear" width="16"></iconify-icon>
</div>
<input className="w-full h-9 bg-neutral-900 border border-neutral-800 text-xs rounded-lg pl-9 pr-10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all" id="searchInput" placeholder="Search utilities..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 hidden md:block">
<kbd className="inline-flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-mono font-medium text-neutral-500 bg-neutral-800 rounded border border-neutral-700">
<span className="text-xs">⌘</span>
                K
              </kbd>
</div>
</div>
</div>

<nav className="flex items-center gap-6">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors hidden md:block" href="#">
            Documentation
          </a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors hidden md:block" href="#">
            GitHub
          </a>
<button className="bg-neutral-100 hover:bg-white text-black text-xs font-medium px-3 py-1.5 rounded transition-colors">
            Submit Tool
          </button>
</nav>
</div>
</header>

<main className="flex-1 pt-24 pb-20 px-6">
<div className="max-w-7xl mx-auto space-y-12">

<section className="relative animate-fade-in">
<div className="absolute -top-10 -left-10 w-64 h-64 bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="border border-neutral-800 bg-neutral-925/50 rounded-2xl p-8 md:p-12 relative overflow-hidden">
<div className="relative z-10 max-w-2xl">
<div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-neutral-900 border border-neutral-800 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-[10px] uppercase tracking-wider font-medium text-neutral-400">
                  System Operational
                </span>
</div>
<h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4 leading-tight">
                Essential utilities for
                <span className="text-neutral-400">Web3 Builders</span>
                .
              </h1>
<p className="text-sm md:text-base text-neutral-500 leading-relaxed max-w-lg">
                A curated collection of converters, calculators, and generators
                designed to streamline your development workflow. Open source
                and privacy-focused.
              </p>

</div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

<div className="absolute -right-6 -bottom-12 opacity-5 md:opacity-10 pointer-events-none">
<iconify-icon height="300" icon="solar:programming-linear" width="300"></iconify-icon>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-6">
<h2 className="text-sm font-medium text-white tracking-tight">
              Available Tools
              <span className="text-neutral-500 ml-1 font-normal" id="toolCount"></span>
</h2>
<div className="flex items-center gap-2">
<div className="text-[10px] text-neutral-500 uppercase tracking-wider font-medium mr-2">
                Sort by:
              </div>
<select className="bg-neutral-925 border border-neutral-800 text-neutral-300 text-xs rounded px-2 py-1 focus:outline-none focus:border-neutral-600">
<option>Popularity</option>
<option>Newest</option>
<option>Alphabetical</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" id="toolsGrid">

</div>

<div className="hidden py-20 text-center border border-dashed border-neutral-800 rounded-2xl" id="emptyState">
<div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-3 text-neutral-500">
<iconify-icon height="24" icon="solar:magnifer-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white">No tools found</h3>
<p className="text-xs text-neutral-500 mt-1">
              Try adjusting your search terms.
            </p>
</div>
</section>
</div>
</main>

<footer className="border-t border-neutral-900 bg-neutral-950 py-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<span className="text-xs text-neutral-500">
            © 2024 Lancers Technology.
          </span>
</div>
<div className="flex items-center gap-6">
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">
            Privacy
          </a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">
            Terms
          </a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">
            Twitter
          </a>
</div>
</div>
</footer>



    </>
  );
}
