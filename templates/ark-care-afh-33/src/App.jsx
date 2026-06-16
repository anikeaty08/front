import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
700: '#44403c',
800: '#292524',
900: '#1c1917',
},
},
fontFamily: {
serif: ['"PT Serif"', 'serif'],
sans: ['"Geist"', 'sans-serif'],
},
boxShadow: {
'3d': 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
'glow': '0 0 40px -10px rgba(255, 255, 255, 0.3)',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div id="root"><div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-0 to-neutral-100 dark:from-neutral-950 dark:to-neutral-950/50"><div className="text-center"><div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary mb-4"></div><p className="text-lg">Verifying access...</p></div></div><div aria-label="Notifications (F8)" role="region" style={{pointerEvents: 'none'}} tabindex="-1"><ol className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] flex max-h-screen flex-col-reverse p-4 max-w-[420px]" tabindex="-1"></ol></div></div>

    </>
  );
}
