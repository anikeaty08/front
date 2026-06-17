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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      
<div className="max-w-7xl w-full mx-auto flex flex-col gap-8">

<header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-neutral-800 pb-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white text-black rounded-lg flex items-center justify-center text-xl font-semibold tracking-tighter">
            QZ
          </div>
<div>
<h1 className="text-2xl font-semibold text-white tracking-tight">
              Quiz Management
            </h1>
<p className="text-sm text-neutral-500 mt-1">
              Telegram Webhook Admin Console
            </p>
</div>
</div>
<button className="flex items-center gap-2 bg-white text-black px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-neutral-950">
<iconify-icon icon="solar:document-add-linear" strokeWidth="1.5"></iconify-icon>
          Export to Excel
        </button>
</header>

<section>
<h2 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:monitor-linear" strokeWidth="1.5"></iconify-icon>
          Live Quiz Monitor
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-5 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
<div className="absolute top-0 left-0 w-full h-0.5 bg-blue-500/50"></div>
<div className="flex justify-between items-start mb-4">
<h3 className="text-base font-medium text-white">TECHNICAL QUIZ</h3>
<span className="flex items-center gap-1.5 text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full border border-blue-500/20">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
</span>
                Live
              </span>
</div>
<p className="text-xs text-neutral-500 mb-2 font-medium">
              Current Question (Q4/10) • Multiple Choice
            </p>
<p className="text-sm text-neutral-300 leading-relaxed">
              "What is the capital of France?"
            </p>
</div>

<div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-5 relative overflow-hidden group hover:border-purple-500/30 transition-colors">
<div className="absolute top-0 left-0 w-full h-0.5 bg-purple-500/50"></div>
<div className="flex justify-between items-start mb-4">
<h3 className="text-base font-medium text-white">
                GENERAL KNOWLEDGE QUIZ
              </h3>
<span className="flex items-center gap-1.5 text-xs text-purple-400 bg-purple-500/10 px-2 py-1 rounded-full border border-purple-500/20">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-purple-500"></span>
</span>
                Live
              </span>
</div>
<p className="text-xs text-neutral-500 mb-2 font-medium">
              Current Question (Q7/15) • Multiple Choice
            </p>
<p className="text-sm text-neutral-300 leading-relaxed">
              "Which planet is known as the Red Planet?"
            </p>
</div>

<div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-5 relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
<div className="absolute top-0 left-0 w-full h-0.5 bg-emerald-500/50"></div>
<div className="flex justify-between items-start mb-4">
<h3 className="text-base font-medium text-white">DHEENEE QUIZ</h3>
<span className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
                Live
              </span>
</div>
<p className="text-xs text-neutral-500 mb-2 font-medium">
              Current Question (Q2/20) • Multiple Choice
            </p>
<p className="text-sm text-neutral-300 leading-relaxed">
              "What is the powerhouse of the cell?"
            </p>
</div>

<div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-5 relative overflow-hidden group hover:border-amber-500/30 transition-colors">
<div className="absolute top-0 left-0 w-full h-0.5 bg-amber-500/50"></div>
<div className="flex justify-between items-start mb-4">
<h3 className="text-base font-medium text-white">MEEKAAKU</h3>
<span className="flex items-center gap-1.5 text-xs text-amber-400 bg-amber-500/10 px-2 py-1 rounded-full border border-amber-500/20">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
</span>
                Live
              </span>
</div>
<p className="text-xs text-neutral-500 mb-2 font-medium">
              Current Question (Q9/10)
            </p>
<p className="text-sm text-neutral-300 leading-relaxed">
              "Who wrote 'Romeo and Juliet'?"
            </p>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-medium text-white flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
            Live User Data
          </h2>
<div className="text-xs font-medium text-neutral-400 flex items-center gap-2 bg-neutral-900/50 px-3 py-1.5 rounded-full border border-neutral-800">
<iconify-icon className="animate-spin" icon="solar:refresh-linear" strokeWidth="1.5"></iconify-icon>
            Syncing updates
          </div>
</div>
<div className="bg-neutral-900/40 border border-neutral-800 rounded-xl overflow-x-auto shadow-sm">
<table className="w-full text-left border-collapse whitespace-nowrap">
<thead>
<tr className="border-b border-neutral-800 bg-neutral-900/80">
<th className="py-3.5 px-5 text-xs font-medium text-neutral-400 uppercase tracking-widest w-1/4">
                  Telegram User ID
                </th>
<th className="py-3.5 px-5 text-xs font-medium text-neutral-400 uppercase tracking-widest w-1/4">
                  Current Quiz
                </th>
<th className="py-3.5 px-5 text-xs font-medium text-neutral-400 uppercase tracking-widest w-1/4">
                  Last Answer
                </th>
<th className="py-3.5 px-5 text-xs font-medium text-neutral-400 uppercase tracking-widest text-right w-1/4">
                  Timestamp
                </th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-800/50">
<tr className="hover:bg-neutral-800/30 transition-colors group">
<td className="py-3 px-5 text-sm font-medium text-white flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center text-xs text-neutral-400">
                    1
                  </div>
                  783920112
                </td>
<td className="py-3 px-5 text-sm text-neutral-300">Quiz 1</td>
<td className="py-3 px-5">
<span className="inline-flex items-center justify-center w-6 h-6 rounded bg-neutral-800 border border-neutral-700 text-xs font-medium text-white group-hover:bg-neutral-700 transition-colors">
                    B
                  </span>
</td>
<td className="py-3 px-5 text-sm text-neutral-500 text-right font-mono text-xs">
                  10:42:01 AM
                </td>
</tr>
<tr className="hover:bg-neutral-800/30 transition-colors group">
<td className="py-3 px-5 text-sm font-medium text-white flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center text-xs text-neutral-400">
                    2
                  </div>
                  102938475
                </td>
<td className="py-3 px-5 text-sm text-neutral-300">Quiz 2</td>
<td className="py-3 px-5">
<span className="inline-flex items-center justify-center w-6 h-6 rounded bg-neutral-800 border border-neutral-700 text-xs font-medium text-white group-hover:bg-neutral-700 transition-colors">
                    D
                  </span>
</td>
<td className="py-3 px-5 text-sm text-neutral-500 text-right font-mono text-xs">
                  10:41:45 AM
                </td>
</tr>
<tr className="hover:bg-neutral-800/30 transition-colors group">
<td className="py-3 px-5 text-sm font-medium text-white flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center text-xs text-neutral-400">
                    3
                  </div>
                  485729104
                </td>
<td className="py-3 px-5 text-sm text-neutral-300">Quiz 4</td>
<td className="py-3 px-5">
<span className="inline-flex items-center justify-center w-6 h-6 rounded bg-neutral-800 border border-neutral-700 text-xs font-medium text-white group-hover:bg-neutral-700 transition-colors">
                    A
                  </span>
</td>
<td className="py-3 px-5 text-sm text-neutral-500 text-right font-mono text-xs">
                  10:40:12 AM
                </td>
</tr>
<tr className="hover:bg-neutral-800/30 transition-colors group">
<td className="py-3 px-5 text-sm font-medium text-white flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center text-xs text-neutral-400">
                    4
                  </div>
                  928374651
                </td>
<td className="py-3 px-5 text-sm text-neutral-300">Quiz 3</td>
<td className="py-3 px-5">
<span className="inline-flex items-center justify-center w-6 h-6 rounded bg-neutral-800 border border-neutral-700 text-xs font-medium text-white group-hover:bg-neutral-700 transition-colors">
                    C
                  </span>
</td>
<td className="py-3 px-5 text-sm text-neutral-500 text-right font-mono text-xs">
                  10:39:55 AM
                </td>
</tr>
<tr className="hover:bg-neutral-800/30 transition-colors group">
<td className="py-3 px-5 text-sm font-medium text-white flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center text-xs text-neutral-400">
                    5
                  </div>
                  564738291
                </td>
<td className="py-3 px-5 text-sm text-neutral-300">Quiz 1</td>
<td className="py-3 px-5">
<span className="inline-flex items-center justify-center w-6 h-6 rounded bg-neutral-800 border border-neutral-700 text-xs font-medium text-white group-hover:bg-neutral-700 transition-colors">
                    A
                  </span>
</td>
<td className="py-3 px-5 text-sm text-neutral-500 text-right font-mono text-xs">
                  10:38:20 AM
                </td>
</tr>
</tbody>
</table>
</div>
</section>

<section>
<h2 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:server-linear" strokeWidth="1.5"></iconify-icon>
          Webhook Logic Source
        </h2>
<div className="bg-[#0a0a0a] border border-neutral-800 rounded-xl overflow-hidden shadow-sm">
<div className="flex items-center px-4 py-3 border-b border-neutral-800 bg-neutral-900/80">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
</div>
<span className="ml-4 text-xs text-neutral-400 font-mono flex items-center gap-2">
<iconify-icon icon="solar:file-text-linear" strokeWidth="1.5"></iconify-icon>
              webhook.js
            </span>
<button className="ml-auto text-xs text-neutral-500 hover:text-white transition-colors flex items-center gap-1">
<iconify-icon icon="solar:copy-linear" strokeWidth="1.5"></iconify-icon>
              Copy
            </button>
</div>
<div className="p-4 md:p-6 overflow-x-auto">
<pre className="text-sm text-neutral-300 font-mono leading-relaxed"><span className="text-purple-400">const</span> express = <span className="text-blue-400">require</span>(<span className="text-green-400">'express'</span>);
<span className="text-purple-400">const</span> app = <span className="text-blue-400">express</span>();
app.<span className="text-blue-400">use</span>(express.<span className="text-blue-400">json</span>());

<span className="text-neutral-600">/* 
 * Telegram Webhook Endpoint
 * Listens for user messages in the target quiz group
 */</span>
app.<span className="text-blue-400">post</span>(<span className="text-green-400">'/webhook/telegram'</span>, (req, res) =&gt; {
    <span className="text-purple-400">const</span> message = req.body.message;
    
    <span className="text-purple-400">if</span> (message &amp;&amp; message.text) {
        <span className="text-purple-400">const</span> userId = message.from.id;
        <span className="text-purple-400">const</span> text = message.text.<span className="text-blue-400">trim</span>().<span className="text-blue-400">toUpperCase</span>();
        
        <span className="text-neutral-600">// Strict filter for specific choices: 'A', 'B', 'C', or 'D'</span>
        <span className="text-purple-400">if</span> ([<span className="text-green-400">'A'</span>, <span className="text-green-400">'B'</span>, <span className="text-green-400">'C'</span>, <span className="text-green-400">'D'</span>].<span className="text-blue-400">includes</span>(text)) {
            
            <span className="text-neutral-600">// Process and map the answer to the User ID</span>
            <span className="text-blue-400">saveToDatabase</span>({
                telegram_user_id: userId,
                answer: text,
                timestamp: <span className="text-purple-400">new</span> <span className="text-yellow-400">Date</span>().<span className="text-blue-400">toISOString</span>()
            });

            console.<span className="text-blue-400">log</span>(<span className="text-green-400">`[Log] Collected answer ${text} from User ${userId}`</span>);
        }
    }
    
    <span className="text-neutral-600">// Always acknowledge the webhook to prevent retries</span>
    res.<span className="text-blue-400">sendStatus</span>(<span className="text-orange-400">200</span>);
});

app.<span className="text-blue-400">listen</span>(<span className="text-orange-400">3000</span>, () =&gt; {
    console.<span className="text-blue-400">log</span>(<span className="text-green-400">'Quiz Webhook listener running on port 3000'</span>);
});
</pre>
</div>
</div>
</section>
</div>

    </>
  );
}
