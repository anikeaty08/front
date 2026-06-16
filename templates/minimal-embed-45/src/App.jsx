import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        window.NordAssistConfig = {
      clientId: "vonbahr",
      dashboardUrl: "https://nordassist-dashboard.vercel.app"
    };
    
    (function () {
      function init() {
        // skapa launcher
        const btn = document.createElement("button");
        btn.innerText = "Chatta";
        btn.style.position = "fixed";
        btn.style.bottom = "20px";
        btn.style.right = "20px";
        btn.style.padding = "12px 16px";
        btn.style.background = "#111";
        btn.style.color = "#fff";
        btn.style.border = "none";
        btn.style.borderRadius = "999px";
        btn.style.cursor = "pointer";
        btn.style.zIndex = "9999";
    
        // iframe (chat)
        const iframe = document.createElement("iframe");
        iframe.src = window.NordAssistConfig.dashboardUrl;
        iframe.style.position = "fixed";
        iframe.style.bottom = "80px";
        iframe.style.right = "20px";
        iframe.style.width = "360px";
        iframe.style.height = "500px";
        iframe.style.border = "none";
        iframe.style.borderRadius = "12px";
        iframe.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
        iframe.style.display = "none";
        iframe.style.zIndex = "9999";
    
        // toggle
        btn.onclick = () => {
          iframe.style.display =
            iframe.style.display === "none" ? "block" : "none";
        };
    
        document.body.appendChild(btn);
        document.body.appendChild(iframe);
      }
    
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
      } else {
        init();
      }
    })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="flex-grow flex items-center justify-center p-6">
<div className="max-w-sm w-full text-center">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 border border-gray-100 mb-6">
<span className="text-sm font-semibold tracking-tighter text-gray-900">NA</span>
</div>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900 mb-3">NordAssist testyta</h1>
<p className="text-sm text-gray-500 leading-relaxed">
                Detta är en helt avskalad testmiljö. Sidan saknar extra skript, modaler och komplexa designsystem för att säkerställa att inbäddningen kan testas helt isolerat.
            </p>
</div>
</main>




    </>
  );
}
