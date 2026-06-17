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
mono: ['Geist Mono', 'monospace'],
},
colors: {
border: "rgba(255,255,255,0.08)",
surface: "#050505",
surfaceHighlight: "#0A0A0A",
},
backgroundImage: {
'noise': "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\" opacity=\"0.04\"/%3E%3C/svg%3E')",
},
animation: {
'scan': 'scan 4s linear infinite',
'shimmer': 'shimmer 3s infinite',
},
keyframes: {
scan: {
'0%': { transform: 'translateY(-100%)' },
'100%': { transform: 'translateY(100%)' },
},
shimmer: {
'0%': { transform: 'translateX(-100%)' },
'100%': { transform: 'translateX(100%)' },
}
}
}
}
}



document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if(entry.isIntersecting) {
entry.target.classList.add("is-visible");
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
document.querySelectorAll(".animate-on-scroll").forEach(el => observer.observe(el));
});



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


      // Subtle hover effect
      const cards = document.querySelectorAll('.rounded-xl');
      cards.forEach(card => {
          card.addEventListener('mousemove', (e) => {
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              card.style.setProperty('--x', `${x}px`);
              card.style.setProperty('--y', `${y}px`);
          });
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 saturate-50 opacity-90 brightness-50 hue-rotate-15 mix-blend-normal invert-0" data-alpha-mask="59" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 59%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 59%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="yWZ2Tbe094Fsjgy9NRnD"></div>

</div></div>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-noise opacity-100 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-grid opacity-[0.4]"></div>
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-white/5 blur-[120px] rounded-full mix-blend-screen"></div>
</div>

<nav className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#020202]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="text-white flex items-center justify-center transition-transform group-hover:scale-105">
<iconify-icon className="" height="24" icon="solar:shield-keyhole-linear" width="24"></iconify-icon>
</div>
<span className="group-hover:text-zinc-200 transition-colors text-sm font-semibold text-white tracking-tight font-geist-mono" style={{}}>
            CSign API
          </span>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors font-geist-mono" href="#" style={{}}>
            Documentation
          </a>
<a className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors font-geist-mono" href="#" style={{}}>
            Registry
          </a>
<a className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors font-geist-mono" href="#" style={{}}>
            Community
          </a>
</div>
<div className="flex items-center gap-3">
<a className="hidden md:block text-[13px] font-medium text-zinc-400 hover:text-white transition-colors font-geist-mono" href="#" style={{}}>
            GitHub
          </a>
<button className="px-3 py-1.5 rounded-md bg-white text-black text-[13px] font-semibold hover:bg-zinc-200 transition-colors border border-transparent shadow-[0_0_15px_rgba(255,255,255,0.1)] font-geist-mono" style={{}}>
            Install CLI
          </button>
</div>
</div>
</nav>
<main className="overflow-hidden w-full relative">

<section className="md:pt-36 md:pb-28 flex flex-col z-10 text-center w-full max-w-5xl mr-auto ml-auto pt-24 pr-6 pb-20 pl-6 relative items-center">
<div className="animate-on-scroll delay-100 mb-6 is-visible">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm">
<span className="flex h-1.5 w-1.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-lime-400"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-lime-500"></span>
</span>
<span className="text-[11px] uppercase text-zinc-300 tracking-wide font-mono font-geist-mono" style={{}}>
              v1.0 Release
            </span>
</div>
</div>
<h1 className="animate-on-scroll delay-200 max-w-3xl text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-medium tracking-tight text-white mb-6 glow-text is-visible font-newsreader" style={{transition: 'outline 0.1s ease-in-out'}}>
          Identity is Sovereignty.
          <br/>
<span className="text-zinc-600 font-newsreader" style={{transition: 'outline 0.1s ease-in-out'}}>Verify with Truth.</span>
</h1>
<p className="animate-on-scroll delay-300 max-w-lg text-zinc-400 text-base md:text-lg leading-relaxed mb-8 font-light is-visible font-geist-mono" style={{}}>
          Cryptographic signing powered by Decentralized Identifiers (DIDs).
          Anchor your software supply chain to the immutable blockchain ledger.
        </p>
<div className="animate-on-scroll delay-400 flex flex-col sm:flex-row gap-3 is-visible w-full gap-x-3 gap-y-3 items-center justify-center">
<button className="shiny-cta focus:outline-none">
<span className="font-geist-mono" style={{}}>
<iconify-icon className="text-lg" icon="solar:code-square-linear"></iconify-icon>
              Get Started
            </span>
</button>
<div className="flex text-xs text-zinc-400 font-mono bg-[#0A0A0A] h-10 border-white/10 border rounded-md pr-3 pl-3 gap-x-3 gap-y-3 items-center">
<span className="select-none text-zinc-600 font-geist-mono" style={{}}>$</span>
<span className="font-geist-mono" style={{}}>brew install csign-did</span>
<button className="hover:text-white transition-colors flex items-center">
<iconify-icon className="text-sm" icon="solar:copy-linear"></iconify-icon>
</button>
</div>
</div>

<div className="animate-on-scroll delay-400 mt-16 w-full max-w-2xl relative group is-visible">
<div className="relative rounded-lg bg-[#050505] border border-white/10 overflow-hidden shadow-2xl">
<div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/[0.02]">
<div className="flex gap-1.5 opacity-50">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>
<div className="text-[10px] text-zinc-600 font-mono font-geist-mono" style={{}}>zsh — 80x24</div>
</div>
<div className="p-5 font-mono text-xs md:text-sm overflow-x-auto text-left leading-6">
<div className="flex">
<span className="select-none mr-2 font-geist-mono text-lime-500" style={{}}>➜</span>
<span className="text-white font-geist-mono" style={{}}>csign did:create --method eth</span>
</div>
<div className="text-zinc-500 mt-1 font-geist-mono" style={{}}>
                Generating key pair for did:ethr:mainnet...
              </div>
<div className="text-zinc-500 font-geist-mono" style={{}}>DID created: did:ethr:0x71C...9A2</div>
<div className="text-zinc-500 mb-4 font-geist-mono" style={{}}>
                Identity anchor tx pending... Confirmed.
              </div>
<div className="flex">
<span className="select-none mr-2 font-geist-mono text-lime-500" style={{}}>➜</span>
<span className="text-white font-geist-mono" style={{}}>
                  csign sign --did did:ethr:0x71C... build/app
                </span>
</div>
<div className="text-zinc-500 mt-1 font-geist-mono" style={{}}>Computing Merkle root...</div>
<div className="text-zinc-300 bg-white/5 inline-block px-1 rounded mt-1 font-geist-mono" style={{}}>
                Proof anchored on Ethereum block #18293401.
              </div>
<div className="animate-pulse w-2 h-4 bg-zinc-500 block mt-2"></div>
</div>
</div>

<div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
<div className="w-full h-[2px] bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.2)] animate-scan opacity-50"></div>
</div>
</div>
</section>

<div className="border-y overflow-hidden bg-[#030303] w-full border-white/5 pt-10 pb-10 relative">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020202] to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020202] to-transparent z-10"></div>
<p className="text-center text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-8 font-geist-mono" style={{}}>
          Securing decentralized infrastructure at
        </p>
<div className="flex justify-center gap-16 md:gap-24 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
<iconify-icon className="text-white" height="36" icon="simple-icons:ethereum" width="96"></iconify-icon>
<iconify-icon className="text-white" height="36" icon="simple-icons:polygon" width="96"></iconify-icon>
<iconify-icon className="text-white" height="36" icon="simple-icons:solana" width="96"></iconify-icon>
<iconify-icon className="text-white" height="36" icon="simple-icons:filecoin" width="96"></iconify-icon>
<iconify-icon className="text-white" height="36" icon="simple-icons:chainlink" width="96"></iconify-icon>
<iconify-icon className="text-white" height="36" icon="simple-icons:ipfs" width="96"></iconify-icon>
</div>
</div>

<section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="animate-on-scroll lg:col-span-2 rounded-xl border border-white/10 bg-[#050505] p-8 relative overflow-hidden group" style={{'--x': '6px', '--y': '230.25px'}}>
<div className="absolute inset-0 bg-noise opacity-[0.05]"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="mb-8">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center mb-4 text-white">
<iconify-icon height="22" icon="solar:shield-check-linear" width="22"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight font-geist-mono" style={{}}>
                  Self-Sovereign Identity
                </h3>
<p className="leading-relaxed text-sm text-zinc-500 max-w-md font-geist-mono" style={{}}>
                  Eliminate centralized CAs. Generate DIDs (did:ethr, did:key)
                  to establish cryptographic identity for your builders and bots
                  without a middleman.
                </p>
</div>

<div className="w-full h-32 border border-white/5 rounded bg-[#080808] flex items-center justify-center gap-4 relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_3s_infinite]"></div>
<div className="px-3 py-1.5 rounded border border-zinc-700 bg-zinc-900 text-[10px] text-zinc-300 font-mono font-geist-mono" style={{}}>
                  Private Key
                </div>
<iconify-icon className="text-zinc-600" icon="solar:arrow-right-linear"></iconify-icon>
<div className="px-3 py-1.5 rounded border border-white/20 bg-zinc-800 text-[10px] text-white font-mono shadow-[0_0_10px_rgba(255,255,255,0.1)] font-geist-mono" style={{}}>
                  VC Proof
                </div>
<iconify-icon className="text-zinc-600" icon="solar:arrow-right-linear"></iconify-icon>
<div className="px-3 py-1.5 rounded border border-zinc-700 bg-zinc-900 text-[10px] text-zinc-300 font-mono font-geist-mono" style={{}}>
                  Blockchain
                </div>
</div>
</div>
</div>

<div className="animate-on-scroll delay-100 rounded-xl border border-white/10 bg-[#050505] p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-noise opacity-[0.05]"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center mb-4 text-white">
<iconify-icon height="22" icon="solar:document-add-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight font-geist-mono" style={{}}>
                Verifiable Credentials
              </h3>
<p className="text-sm text-zinc-500 leading-relaxed font-geist-mono" style={{}}>
                Issue W3C Verifiable Credentials (VCs) for SBOMs and audits.
                Cryptographically bound to the DID of the issuer.
              </p>
<div className="mt-8 space-y-2 font-mono text-[10px] text-zinc-600">
<div className="flex justify-between border-b border-white/5 pb-1">
<span className="font-geist-mono" style={{}}>PROPERTY</span>
<span className="font-geist-mono" style={{}}>VALUE</span>
</div>
<div className="flex justify-between text-zinc-400">
<span className="font-geist-mono" style={{}}>type</span>
<span className="font-geist-mono" style={{}}>VerifiableCredential</span>
</div>
<div className="flex justify-between text-zinc-400">
<span className="font-geist-mono" style={{}}>proof</span>
<span className="font-geist-mono" style={{}}>EcdsaSecp256k1</span>
</div>
</div>
</div>
</div>

<div className="animate-on-scroll delay-200 rounded-xl border border-white/10 bg-[#050505] p-8 relative overflow-hidden group" style={{'--x': '45px', '--y': '226px'}}>
<div className="absolute inset-0 bg-noise opacity-[0.05]"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center mb-4 text-white">
<iconify-icon height="22" icon="solar:lock-password-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight font-geist-mono" style={{}}>
                Wallet Integration
              </h3>
<p className="text-sm text-zinc-500 leading-relaxed font-geist-mono" style={{}}>
                Sign directly with hardware wallets (Ledger, Trezor) or Web3
                wallets (MetaMask). Your private keys never leave your custody.
              </p>
</div>
</div>

<div className="animate-on-scroll delay-300 lg:col-span-2 rounded-xl border border-white/10 bg-[#050505] p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-noise opacity-[0.05]"></div>
<div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center mb-4 text-white">
<iconify-icon height="22" icon="solar:cloud-storage-linear" width="22"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight font-geist-mono" style={{}}>
                  Immutable Ledger Proofs
                </h3>
<p className="text-sm text-zinc-500 leading-relaxed font-geist-mono" style={{}}>
                  Every signature is a transaction anchored on-chain. Verify
                  artifact integrity against the global, immutable ledger state.
                </p>
</div>
<div className="flex-1 w-full p-4 rounded border border-white/5 bg-[#0A0A0A]">
<div className="font-mono text-[10px] space-y-1">
<div className="text-zinc-500 font-geist-mono" style={{}}># DID Document Resolution</div>
<div className="flex items-center gap-2 text-zinc-300 font-geist-mono" style={{}}>
<iconify-icon className="text-zinc-600" icon="solar:user-id-linear"></iconify-icon>
                    "id": "did:ethr:0x7a..."
                  </div>
<div className="flex items-center gap-2 text-zinc-300 pl-4 border-l border-zinc-800 ml-1 font-geist-mono" style={{}}>
<iconify-icon className="text-lime-500" icon="solar:key-linear"></iconify-icon>
                    "verificationMethod": [...]
                  </div>
<div className="flex items-center gap-2 text-zinc-300 pl-4 border-l border-zinc-800 ml-1 font-geist-mono" style={{}}>
<iconify-icon className="text-lime-500" icon="solar:shield-check-linear"></iconify-icon>
                    "assertionMethod": [...]
                  </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#030303] w-full border-white/5 border-t pt-24 pr-6 pb-24 pl-6">
<div className="max-w-4xl mx-auto">
<div className="flex flex-col md:flex-row gap-12 items-start">
<div className="animate-on-scroll flex-1">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4 font-newsreader" style={{}}>
                Chain Agnostic.
              </h2>
<p className="font-light text-zinc-400 mb-8 font-geist-mono" style={{}}>
                CSign is built on open standards and supports Ethereum, Polygon,
                Solana, and more.
              </p>
<div className="space-y-4">
<div className="group flex items-center gap-4 p-4 rounded-lg border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors cursor-pointer">
<iconify-icon className="text-2xl text-white" icon="simple-icons:githubactions"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-white font-geist-mono" style={{}}>
                      GitHub Actions
                    </h4>
<p className="text-xs text-zinc-500 font-geist-mono" style={{}}>
                      Sign images in your release workflow.
                    </p>
</div>
<iconify-icon className="ml-auto text-zinc-600 group-hover:text-white transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<div className="group flex items-center gap-4 p-4 rounded-lg border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors cursor-pointer">
<iconify-icon className="text-2xl text-white" icon="simple-icons:gitlab"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-white font-geist-mono" style={{}}>GitLab CI</h4>
<p className="text-xs text-zinc-500 font-geist-mono" style={{}}>
                      Verify provenance before deployment.
                    </p>
</div>
<iconify-icon className="ml-auto text-zinc-600 group-hover:text-white transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<div className="group flex items-center gap-4 p-4 rounded-lg border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors cursor-pointer">
<iconify-icon className="text-2xl text-white" icon="simple-icons:chainlink"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-white font-geist-mono" style={{}}>
                      Smart Contract Oracles
                    </h4>
<p className="text-xs text-zinc-500 font-geist-mono" style={{}}>
                      Trigger on-chain governance based on verified off-chain
                      signatures.
                    </p>
</div>
<iconify-icon className="ml-auto text-zinc-600 group-hover:text-white transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="animate-on-scroll delay-200 flex-1 w-full">
<div className="rounded-lg border border-white/10 bg-[#080808] overflow-hidden">
<div className="px-4 py-3 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
<span className="text-xs font-mono text-zinc-500 font-geist-mono" style={{}}>
                    Registry.sol
                  </span>
<span className="text-[10px] font-mono text-zinc-600 font-geist-mono" style={{}}>
                    CLUSTER POLICY
                  </span>
</div>
<div className="p-4 overflow-x-auto">
<pre className="text-[11px] leading-5 font-mono text-zinc-300 font-geist-mono" style={{}}><span className="font-geist-mono text-lime-400" style={{}}>contract</span> <span className="font-geist-mono text-lime-400" style={{}}>ArtifactRegistry</span> {
  <span className="font-geist-mono text-lime-400" style={{}}>mapping</span>(bytes32 =&gt; address) <span className="font-geist-mono text-lime-400" style={{}}>public</span> owners;

  <span className="font-geist-mono text-lime-400" style={{}}>function</span> register(bytes32 hash) <span className="font-geist-mono text-lime-400" style={{}}>external</span> {
    require(verifyDID(msg.sender));
    owners[hash] = msg.sender;
    emit <span className="font-geist-mono text-lime-200" style={{}}>ArtifactRegistered</span>(hash, msg.sender);
  }
}</pre>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 flex flex-col items-center justify-center overflow-hidden">
<div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/10 via-[#020202] to-[#020202] z-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="animate-on-scroll relative z-10 text-center px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6 font-newsreader" style={{}}>
            Secure the supply chain.
          </h2>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="h-10 px-6 rounded bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-colors font-geist-mono" style={{}}>
              Read the Docs
            </button>
<button className="h-10 px-6 rounded bg-transparent text-zinc-400 text-xs font-medium border border-white/10 hover:text-white hover:border-white/30 transition-colors flex items-center gap-2 font-geist-mono" style={{}}>
<iconify-icon icon="simple-icons:github"></iconify-icon>
              View on GitHub
            </button>
</div>
</div>
</section>

<footer className="text-sm bg-[#010101] border-white/10 border-t pt-12 pb-12">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-zinc-500" height="18" icon="simple-icons:sigstore" width="18"></iconify-icon>
<span className="font-semibold text-zinc-300 tracking-tight font-geist-mono" style={{}}>
                  CSign
                </span>
</div>
<p className="text-zinc-600 text-xs mt-2 font-geist-mono" style={{}}>
                Built on W3C Decentralized Identifiers.
                <br/>
                Powered by the Blockchain.
              </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-xs font-geist-mono" style={{}}>Project</h4>
<ul className="space-y-2 text-zinc-500 text-xs">
<li>
<a className="hover:text-white transition-colors font-geist-mono" href="#" style={{}}>
                    Overview
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors font-geist-mono" href="#" style={{}}>
                    Specifications
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors font-geist-mono" href="#" style={{}}>
                    Community
                  </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-xs font-geist-mono" style={{}}>Resources</h4>
<ul className="space-y-2 text-zinc-500 text-xs">
<li>
<a className="hover:text-white transition-colors font-geist-mono" href="#" style={{}}>
                    Documentation
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors font-geist-mono" href="#" style={{}}>
                    GitHub
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors font-geist-mono" href="#" style={{}}>
                    Blog
                  </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-xs font-geist-mono" style={{}}>Legal</h4>
<ul className="space-y-2 text-zinc-500 text-xs">
<li>
<a className="hover:text-white transition-colors font-geist-mono" href="#" style={{}}>
                    Privacy Policy
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors font-geist-mono" href="#" style={{}}>
                    Terms of Service
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors font-geist-mono" href="#" style={{}}>
                    Code of Conduct
                  </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-zinc-700 text-[10px] font-mono font-geist-mono" style={{}}>
              © 2024 CSign DID Foundation.
            </div>
<div className="flex gap-4">
<iconify-icon className="text-zinc-600 hover:text-white transition-colors text-xs" icon="simple-icons:slack"></iconify-icon>
<iconify-icon className="text-zinc-600 hover:text-white transition-colors text-xs" icon="simple-icons:github"></iconify-icon>
<iconify-icon className="text-zinc-600 hover:text-white transition-colors text-xs" icon="simple-icons:x"></iconify-icon>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
