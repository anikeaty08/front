import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'terminal': ['VT323', 'monospace'],
                        'cyber': ['Share Tech Mono', 'monospace']
                    },
                    colors: {
                        'neon-pink': '#ff0080',
                        'neon-green': '#00ff41',
                        'neon-cyan': '#00ffff',
                        'terminal-bg': '#0a0a0a'
                    }
                }
            }
        }
    


        // Enhanced glitch effects
        function randomGlitch() {
            const glitchElements = document.querySelectorAll('.glitch-text');
            glitchElements.forEach(el => {
                if (Math.random() < 0.1) {
                    el.style.animation = 'glitch 0.1s infinite';
                    setTimeout(() => {
                        el.style.animation = 'glitch 0.3s infinite';
                    }, 200);
                }
            });
        }

        // Matrix rain generation
        function createMatrixChar() {
            const chars = '01$>@#%&*{}[]|\\';
            const char = chars[Math.floor(Math.random() * chars.length)];
            const element = document.createElement('div');
            element.className = 'matrix-char';
            element.textContent = char;
            element.style.left = Math.random() * 100 + '%';
            element.style.animationDelay = Math.random() * 3 + 's';
            element.style.animationDuration = (Math.random() * 3 + 2) + 's';
            
            document.querySelector('.fixed.inset-0').appendChild(element);
            
            setTimeout(() => {
                element.remove();
            }, 5000);
        }

        // Initialize effects
        setInterval(randomGlitch, 2000);
        setInterval(createMatrixChar, 300);
        
        // Terminal typing effect for cursor
        document.addEventListener('DOMContentLoaded', function() {
            const posts = document.querySelectorAll('.blog-post');
            posts.forEach((post, index) => {
                post.style.animationDelay = (index * 0.2) + 's';
                post.style.animation = 'word-appear 0.8s ease-out forwards';
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="scan-line"></div>

<div className="fixed inset-0 pointer-events-none z-0">
<div className="matrix-char" style={{left: '10%', animationDelay: '0s'}}>0</div>
<div className="matrix-char" style={{left: '20%', animationDelay: '0.5s'}}>1</div>
<div className="matrix-char" style={{left: '30%', animationDelay: '1s'}}>$</div>
<div className="matrix-char" style={{left: '50%', animationDelay: '1.5s'}}>&gt;</div>
<div className="matrix-char" style={{left: '70%', animationDelay: '2s'}}>@</div>
<div className="matrix-char" style={{left: '85%', animationDelay: '2.5s'}}>#</div>
</div>

<header className="relative z-10 neon-border bg-black/90 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4">
<div className="status-indicator"></div>
<h1 className="text-2xl font-cyber text-neon-cyan glitch-text">CYBERBLOG.TERMINAL</h1>
<span className="text-sm opacity-70">[v3.14.159]</span>
</div>
<div className="flex items-center space-x-6 text-sm">
<span className="text-neon-pink">UPTIME: 1337:42:00</span>
<span className="text-neon-cyan">CPU: 98%</span>
<span className="text-neon-green">ONLINE</span>
</div>
</div>
</header>

<div className="relative z-10 flex h-screen">

<nav className="w-80 bg-black/95 neon-border border-t-0 p-6 overflow-y-auto">
<div className="mb-8">
<div className="text-neon-pink mb-2">root@cyberblog:~$<span className="terminal-cursor"></span></div>
<div className="text-xs text-neon-cyan opacity-70 font-cyber">NEURAL INTERFACE ACTIVE</div>
</div>
<div className="space-y-6">
<div>
<h3 className="text-neon-cyan text-lg mb-3 glitch-text">&gt; DIRECTORIES</h3>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-neon-pink transition-colors" href="#">./home</a></li>
<li><a className="hover:text-neon-pink transition-colors" href="#">./posts</a></li>
<li><a className="hover:text-neon-pink transition-colors" href="#">./archives</a></li>
<li><a className="hover:text-neon-pink transition-colors" href="#">./about</a></li>
<li><a className="hover:text-neon-pink transition-colors" href="#">./contact</a></li>
</ul>
</div>
<div>
<h3 className="text-neon-cyan text-lg mb-3 glitch-text">&gt; CATEGORIES</h3>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-neon-pink transition-colors" href="#">[AI_RESEARCH]</a></li>
<li><a className="hover:text-neon-pink transition-colors" href="#">[CYBERSEC]</a></li>
<li><a className="hover:text-neon-pink transition-colors" href="#">[BLOCKCHAIN]</a></li>
<li><a className="hover:text-neon-pink transition-colors" href="#">[HACKING]</a></li>
<li><a className="hover:text-neon-pink transition-colors" href="#">[NEURAL_NETS]</a></li>
</ul>
</div>
<div>
<h3 className="text-neon-cyan text-lg mb-3 glitch-text">&gt; SYSTEM_STATUS</h3>
<div className="space-y-2 text-xs font-cyber">
<div className="flex justify-between">
<span>FIREWALL:</span>
<span className="text-neon-green">ACTIVE</span>
</div>
<div className="flex justify-between">
<span>ENCRYPTION:</span>
<span className="text-neon-green">256-BIT</span>
</div>
<div className="flex justify-between">
<span>PROXY:</span>
<span className="text-neon-pink">TOR_ENABLED</span>
</div>
</div>
</div>
</div>
</nav>

<main className="flex-1 p-8 overflow-y-auto bg-gradient-to-b from-black/90 to-terminal-bg/90">
<div className="max-w-4xl">

<div className="mb-8 font-cyber">
<div className="text-neon-green">user@matrix:~/blog$ cat latest_posts.txt</div>
<div className="text-neon-cyan text-sm mt-1">Displaying 3 most recent entries...</div>
</div>

<article className="blog-post bg-black/50 p-6 mb-8 neon-border">
<header className="mb-4">
<div className="flex items-center justify-between mb-2">
<span className="text-neon-pink text-sm font-cyber">[2024.03.15_14:27:33]</span>
<span className="text-neon-cyan text-sm">[AI_RESEARCH]</span>
</div>
<h2 className="text-2xl text-neon-cyan glitch-text mb-2 font-cyber">Neural Network Breakthrough: AGI Protocol v2.1</h2>
<div className="text-sm text-neon-green">by ghost_in_shell | 1337 views | 42 comments</div>
</header>
<div className="text-neon-green font-cyber leading-relaxed">
<p className="mb-4">Just cracked the latest AGI implementation. The neural pathways are showing unprecedented learning rates when combined with quantum processing units...</p>
<p className="mb-4">Status: CLASSIFIED // Access Level: OMEGA</p>
<div className="flex items-center justify-between">
<a className="text-neon-pink hover:text-neon-cyan transition-colors" href="#">[READ_MORE]</a>
<div className="text-xs opacity-70">File size: 2.1MB | Hash: 0x7f8a9b2c</div>
</div>
</div>
</article>
<article className="blog-post bg-black/50 p-6 mb-8 neon-border">
<header className="mb-4">
<div className="flex items-center justify-between mb-2">
<span className="text-neon-pink text-sm font-cyber">[2024.03.14_09:15:22]</span>
<span className="text-neon-cyan text-sm">[CYBERSEC]</span>
</div>
<h2 className="text-2xl text-neon-cyan glitch-text mb-2 font-cyber">Zero-Day Exploit: Corporate Mainframe Penetration</h2>
<div className="text-sm text-neon-green">by neo_hacker | 2048 views | 73 comments</div>
</header>
<div className="text-neon-green font-cyber leading-relaxed">
<p className="mb-4">Discovered a critical vulnerability in enterprise security protocols. The backdoor runs deeper than we thought...</p>
<p className="mb-4">WARNING: For educational purposes only. Use responsibly.</p>
<div className="flex items-center justify-between">
<a className="text-neon-pink hover:text-neon-cyan transition-colors" href="#">[READ_MORE]</a>
<div className="text-xs opacity-70">File size: 896KB | Hash: 0x3d5e7f1a</div>
</div>
</div>
</article>
<article className="blog-post bg-black/50 p-6 mb-8 neon-border">
<header className="mb-4">
<div className="flex items-center justify-between mb-2">
<span className="text-neon-pink text-sm font-cyber">[2024.03.13_23:59:59]</span>
<span className="text-neon-cyan text-sm">[BLOCKCHAIN]</span>
</div>
<h2 className="text-2xl text-neon-cyan glitch-text mb-2 font-cyber">Decentralized Web 3.0: The Matrix Reloaded</h2>
<div className="text-sm text-neon-green">by crypto_prophet | 4096 views | 156 comments</div>
</header>
<div className="text-neon-green font-cyber leading-relaxed">
<p className="mb-4">The new blockchain architecture is live. Smart contracts are evolving beyond our control. Is this the singularity?</p>
<p className="mb-4">Current block height: 1,337,420 | Gas price: ∞</p>
<div className="flex items-center justify-between">
<a className="text-neon-pink hover:text-neon-cyan transition-colors" href="#">[READ_MORE]</a>
<div className="text-xs opacity-70">File size: 3.7MB | Hash: 0x9f2c8e4d</div>
</div>
</div>
</article>

<div className="mt-12 text-center font-cyber">
<div className="text-neon-green">End of file reached.</div>
<div className="text-neon-cyan text-sm mt-2">user@matrix:~/blog$ <span className="terminal-cursor"></span></div>
</div>
</div>
</main>
</div>


    </>
  );
}
