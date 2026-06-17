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
gtag('config', 'G-FYKYRPCGGB');
gtag('config', 'GT-PHRZGWT');
gtag('config', 'AW-985811302');



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
green: '#388c3f', // Original Dark Green
lightgreen: '#cfeca4', // Original Light Green
pink: '#e37188', // Original Pink
dark: '#565952', // Original Dark Text
}
},
fontSize: {
xs: '0.75rem',
sm: '0.925rem', // Body text 1 size bigger
base: '1.05rem', // Body text 1 size bigger
lg: '1.175rem',
xl: '1.35rem',
'2xl': '1.6rem',
'3xl': '2rem',
'4xl': '2.5rem',
'5xl': '3.2rem',
},
animation: {
'fade-in': 'fadeIn 0.6s ease-out forwards',
'slide-up': 'slideUp 0.6s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-FYKYRPCGGB');
gtag('config', 'GT-PHRZGWT');
gtag('config', 'AW-985811302');



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
green: '#388c3f', // Original Dark Green
lightgreen: '#cfeca4', // Original Light Green
pink: '#e37188', // Original Pink
dark: '#565952', // Original Dark Text
}
},
fontSize: {
xs: '0.75rem',
sm: '0.925rem', // Body text 1 size bigger
base: '1.05rem', // Body text 1 size bigger
lg: '1.175rem',
xl: '1.35rem',
'2xl': '1.6rem',
'3xl': '2rem',
'4xl': '2.5rem',
'5xl': '3.2rem',
},
animation: {
'fade-in': 'fadeIn 0.6s ease-out forwards',
'slide-up': 'slideUp 0.6s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-FYKYRPCGGB');
gtag('config', 'GT-PHRZGWT');
gtag('config', 'AW-985811302');



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
green: '#388c3f', // Original Dark Green
lightgreen: '#cfeca4', // Original Light Green
pink: '#e37188', // Original Pink
dark: '#565952', // Original Dark Text
}
},
fontSize: {
xs: '0.75rem',
sm: '0.925rem', // Body text 1 size bigger
base: '1.05rem', // Body text 1 size bigger
lg: '1.175rem',
xl: '1.35rem',
'2xl': '1.6rem',
'3xl': '2rem',
'4xl': '2.5rem',
'5xl': '3.2rem',
},
animation: {
'fade-in': 'fadeIn 0.6s ease-out forwards',
'slide-up': 'slideUp 0.6s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-FYKYRPCGGB');
gtag('config', 'GT-PHRZGWT');
gtag('config', 'AW-985811302');



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
green: '#388c3f', // Original Dark Green
lightgreen: '#cfeca4', // Original Light Green
pink: '#e37188', // Original Pink
dark: '#565952', // Original Dark Text
}
},
fontSize: {
xs: '0.75rem',
sm: '0.925rem', // Body text 1 size bigger
base: '1.05rem', // Body text 1 size bigger
lg: '1.175rem',
xl: '1.35rem',
'2xl': '1.6rem',
'3xl': '2rem',
'4xl': '2.5rem',
'5xl': '3.2rem',
},
animation: {
'fade-in': 'fadeIn 0.6s ease-out forwards',
'slide-up': 'slideUp 0.6s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-FYKYRPCGGB');
gtag('config', 'GT-PHRZGWT');
gtag('config', 'AW-985811302');



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
green: '#388c3f', // Original Dark Green
lightgreen: '#cfeca4', // Original Light Green
pink: '#e37188', // Original Pink
dark: '#565952', // Original Dark Text
}
},
fontSize: {
xs: '0.75rem',
sm: '0.925rem', // Body text 1 size bigger
base: '1.05rem', // Body text 1 size bigger
lg: '1.175rem',
xl: '1.35rem',
'2xl': '1.6rem',
'3xl': '2rem',
'4xl': '2.5rem',
'5xl': '3.2rem',
},
animation: {
'fade-in': 'fadeIn 0.6s ease-out forwards',
'slide-up': 'slideUp 0.6s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-FYKYRPCGGB');
gtag('config', 'GT-PHRZGWT');
gtag('config', 'AW-985811302');



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
green: '#388c3f', // Original Dark Green
lightgreen: '#cfeca4', // Original Light Green
pink: '#e37188', // Original Pink
dark: '#565952', // Original Dark Text
}
},
fontSize: {
xs: '0.75rem',
sm: '0.925rem', // Body text 1 size bigger
base: '1.05rem', // Body text 1 size bigger
lg: '1.175rem',
xl: '1.35rem',
'2xl': '1.6rem',
'3xl': '2rem',
'4xl': '2.5rem',
'5xl': '3.2rem',
},
animation: {
'fade-in': 'fadeIn 0.6s ease-out forwards',
'slide-up': 'slideUp 0.6s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-FYKYRPCGGB');
gtag('config', 'GT-PHRZGWT');
gtag('config', 'AW-985811302');



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
green: '#388c3f', // Original Dark Green
lightgreen: '#cfeca4', // Original Light Green
pink: '#e37188', // Original Pink
dark: '#565952', // Original Dark Text
}
},
fontSize: {
xs: '0.75rem',
sm: '0.925rem', // Body text 1 size bigger
base: '1.05rem', // Body text 1 size bigger
lg: '1.175rem',
xl: '1.35rem',
'2xl': '1.6rem',
'3xl': '2rem',
'4xl': '2.5rem',
'5xl': '3.2rem',
},
animation: {
'fade-in': 'fadeIn 0.6s ease-out forwards',
'slide-up': 'slideUp 0.6s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-FYKYRPCGGB');
gtag('config', 'GT-PHRZGWT');
gtag('config', 'AW-985811302');



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
green: '#388c3f', // Original Dark Green
lightgreen: '#cfeca4', // Original Light Green
pink: '#e37188', // Original Pink
dark: '#565952', // Original Dark Text
}
},
fontSize: {
xs: '0.75rem',
sm: '0.925rem', // Body text 1 size bigger
base: '1.05rem', // Body text 1 size bigger
lg: '1.175rem',
xl: '1.35rem',
'2xl': '1.6rem',
'3xl': '2rem',
'4xl': '2.5rem',
'5xl': '3.2rem',
},
animation: {
'fade-in': 'fadeIn 0.6s ease-out forwards',
'slide-up': 'slideUp 0.6s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-FYKYRPCGGB');
gtag('config', 'GT-PHRZGWT');
gtag('config', 'AW-985811302');



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
green: '#388c3f', // Original Dark Green
lightgreen: '#cfeca4', // Original Light Green
pink: '#e37188', // Original Pink
dark: '#565952', // Original Dark Text
}
},
fontSize: {
xs: '0.75rem',
sm: '0.925rem', // Body text 1 size bigger
base: '1.05rem', // Body text 1 size bigger
lg: '1.175rem',
xl: '1.35rem',
'2xl': '1.6rem',
'3xl': '2rem',
'4xl': '2.5rem',
'5xl': '3.2rem',
},
animation: {
'fade-in': 'fadeIn 0.6s ease-out forwards',
'slide-up': 'slideUp 0.6s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-FYKYRPCGGB');
gtag('config', 'GT-PHRZGWT');
gtag('config', 'AW-985811302');



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
green: '#388c3f', // Original Dark Green
lightgreen: '#cfeca4', // Original Light Green
pink: '#e37188', // Original Pink
dark: '#565952', // Original Dark Text
}
},
fontSize: {
xs: '0.75rem',
sm: '0.925rem', // Body text 1 size bigger
base: '1.05rem', // Body text 1 size bigger
lg: '1.175rem',
xl: '1.35rem',
'2xl': '1.6rem',
'3xl': '2rem',
'4xl': '2.5rem',
'5xl': '3.2rem',
},
animation: {
'fade-in': 'fadeIn 0.6s ease-out forwards',
'slide-up': 'slideUp 0.6s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-FYKYRPCGGB');
gtag('config', 'GT-PHRZGWT');
gtag('config', 'AW-985811302');



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
green: '#388c3f', // Original Dark Green
lightgreen: '#cfeca4', // Original Light Green
pink: '#e37188', // Original Pink
dark: '#565952', // Original Dark Text
}
},
fontSize: {
xs: '0.75rem',
sm: '0.925rem', // Body text 1 size bigger
base: '1.05rem', // Body text 1 size bigger
lg: '1.175rem',
xl: '1.35rem',
'2xl': '1.6rem',
'3xl': '2rem',
'4xl': '2.5rem',
'5xl': '3.2rem',
},
animation: {
'fade-in': 'fadeIn 0.6s ease-out forwards',
'slide-up': 'slideUp 0.6s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-FYKYRPCGGB');
gtag('config', 'GT-PHRZGWT');
gtag('config', 'AW-985811302');



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
green: '#388c3f', // Original Dark Green
lightgreen: '#cfeca4', // Original Light Green
pink: '#e37188', // Original Pink
dark: '#565952', // Original Dark Text
}
},
fontSize: {
xs: '0.75rem',
sm: '0.925rem', // Body text 1 size bigger
base: '1.05rem', // Body text 1 size bigger
lg: '1.175rem',
xl: '1.35rem',
'2xl': '1.6rem',
'3xl': '2rem',
'4xl': '2.5rem',
'5xl': '3.2rem',
},
animation: {
'fade-in': 'fadeIn 0.6s ease-out forwards',
'slide-up': 'slideUp 0.6s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-FYKYRPCGGB');
gtag('config', 'GT-PHRZGWT');
gtag('config', 'AW-985811302');



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
green: '#388c3f', // Original Dark Green
lightgreen: '#cfeca4', // Original Light Green
pink: '#e37188', // Original Pink
dark: '#565952', // Original Dark Text
}
},
fontSize: {
xs: '0.75rem',
sm: '0.925rem', // Body text 1 size bigger
base: '1.05rem', // Body text 1 size bigger
lg: '1.175rem',
xl: '1.35rem',
'2xl': '1.6rem',
'3xl': '2rem',
'4xl': '2.5rem',
'5xl': '3.2rem',
},
animation: {
'fade-in': 'fadeIn 0.6s ease-out forwards',
'slide-up': 'slideUp 0.6s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-FYKYRPCGGB');
gtag('config', 'GT-PHRZGWT');
gtag('config', 'AW-985811302');



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
green: '#388c3f', // Original Dark Green
lightgreen: '#cfeca4', // Original Light Green
pink: '#e37188', // Original Pink
dark: '#565952', // Original Dark Text
}
},
fontSize: {
xs: '0.75rem',
sm: '0.925rem', // Body text 1 size bigger
base: '1.05rem', // Body text 1 size bigger
lg: '1.175rem',
xl: '1.35rem',
'2xl': '1.6rem',
'3xl': '2rem',
'4xl': '2.5rem',
'5xl': '3.2rem',
},
animation: {
'fade-in': 'fadeIn 0.6s ease-out forwards',
'slide-up': 'slideUp 0.6s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-FYKYRPCGGB');
gtag('config', 'GT-PHRZGWT');
gtag('config', 'AW-985811302');



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
green: '#388c3f', // Original Dark Green
lightgreen: '#cfeca4', // Original Light Green
pink: '#e37188', // Original Pink
dark: '#565952', // Original Dark Text
}
},
fontSize: {
xs: '0.75rem',
sm: '0.925rem', // Body text 1 size bigger
base: '1.05rem', // Body text 1 size bigger
lg: '1.175rem',
xl: '1.35rem',
'2xl': '1.6rem',
'3xl': '2rem',
'4xl': '2.5rem',
'5xl': '3.2rem',
},
animation: {
'fade-in': 'fadeIn 0.6s ease-out forwards',
'slide-up': 'slideUp 0.6s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();

        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        // Simple Tab Logic for Location Selector
        function setActiveTab(location) {
            const tabGlasgow = document.getElementById('tab-glasgow');
            const tabEdinburgh = document.getElementById('tab-edinburgh');

            if(location === 'glasgow') {
                tabGlasgow.classList.remove('tab-inactive');
                tabGlasgow.classList.add('tab-active', 'shadow-sm');
                tabEdinburgh.classList.add('tab-inactive');
                tabEdinburgh.classList.remove('tab-active', 'shadow-sm');
            } else {
                tabEdinburgh.classList.remove('tab-inactive');
                tabEdinburgh.classList.add('tab-active', 'shadow-sm');
                tabGlasgow.classList.add('tab-inactive');
                tabGlasgow.classList.remove('tab-active', 'shadow-sm');
            }
        }

        function submitForm() {
            const btn = document.querySelector('button[onclick="submitForm()"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = 'Sending...';
            btn.disabled = true;

            // Simulated submission
            setTimeout(() => {
                alert("Thank you! We will be in touch shortly.");
                btn.innerHTML = 'Sent!';
            }, 1000);
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
      <iframe height="0" style={{visibility: 'hidden', display: 'none'}} width="0"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe>


<title>Cleaning Services Glasgow &amp; Edinburgh | Home Sweet Home</title>




<style>
          .invisible { visibility: hidden !important; }
        </style>





<style>
/* Custom UI Enhancements */
body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
.glass-nav {
background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(12px);
border-bottom: 1px solid rgba(229, 231, 235, 0.5);
}
.custom-input {
transition: all 0.2s;
}
.custom-input:focus {
box-shadow: 0 0 0 2px rgba(56, 140, 63, 0.2);
border-color: #388c3f;
}
/* Review Card Hover Effect */
.review-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
.review-card:hover { transform: translateY(-4px); box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1); }
.tab-active { background-color: #388c3f; color: white; }
.tab-inactive { color: #6b7280; background-color: transparent; }
.tab-inactive:hover { background-color: #f3f4f6; color: #1f2937; }
</style>
<style id="all-fonts-style-font-geist">.font-geist { font-family: 'Geist', sans-serif !important; }</style><style id="all-fonts-style-font-roboto">.font-roboto { font-family: 'Roboto', sans-serif !important; }</style><style id="all-fonts-style-font-montserrat">.font-montserrat { font-family: 'Montserrat', sans-serif !important; }</style><style id="all-fonts-style-font-poppins">.font-poppins { font-family: 'Poppins', sans-serif !important; }</style><style id="all-fonts-style-font-playfair">.font-playfair { font-family: 'Playfair Display', serif !important; }</style><style id="all-fonts-style-font-instrument-serif">.font-instrument-serif { font-family: 'Instrument Serif', serif !important; }</style><style id="all-fonts-style-font-merriweather">.font-merriweather { font-family: 'Merriweather', serif !important; }</style><style id="all-fonts-style-font-bricolage">.font-bricolage { font-family: 'Bricolage Grotesque', sans-serif !important; }</style><style id="all-fonts-style-font-jakarta">.font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif !important; }</style><style id="all-fonts-style-font-manrope">.font-manrope { font-family: 'Manrope', sans-serif !important; }</style><style id="all-fonts-style-font-space-grotesk">.font-space-grotesk { font-family: 'Space Grotesk', sans-serif !important; }</style><style id="all-fonts-style-font-work-sans">.font-work-sans { font-family: 'Work Sans', sans-serif !important; }</style><style id="all-fonts-style-font-pt-serif">.font-pt-serif { font-family: 'PT Serif', serif !important; }</style><style id="all-fonts-style-font-geist-mono">.font-geist-mono { font-family: 'Geist Mono', monospace !important; }</style><style id="all-fonts-style-font-space-mono">.font-space-mono { font-family: 'Space Mono', monospace !important; }</style><style id="all-fonts-style-font-quicksand">.font-quicksand { font-family: 'Quicksand', sans-serif !important; }</style><style id="all-fonts-style-font-nunito">.font-nunito { font-family: 'Nunito', sans-serif !important; }</style><style id="all-fonts-style-font-newsreader">.font-newsreader { font-family: 'Newsreader', serif !important; }</style><style id="all-fonts-style-font-google-sans-flex">.font-google-sans-flex { font-family: 'Google Sans Flex', sans-serif !important; }</style><style id="all-fonts-style-font-oswald">.font-oswald { font-family: 'Oswald', sans-serif !important; }</style><style id="all-fonts-style-font-dm-sans">.font-dm-sans { font-family: 'DM Sans', sans-serif !important; }</style><style id="all-fonts-style-font-cormorant">.font-cormorant { font-family: 'Cormorant Garamond', serif !important; }</style>
<style id="CookieConsentStateDisplayStyles" type="text/css">.cookieconsent-optin,.cookieconsent-optin-preferences,.cookieconsent-optin-statistics,.cookieconsent-optin-marketing{display:block;display:initial;}.cookieconsent-optout-preferences,.cookieconsent-optout-statistics,.cookieconsent-optout-marketing,.cookieconsent-optout{display:none;}</style>
<iframe height="0" style={{visibility: 'hidden', display: 'none'}} width="0"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe>


<title>Cleaning Services Glasgow &amp; Edinburgh | Home Sweet Home</title>




<style>
          .invisible { visibility: hidden !important; }
        </style>





<style>
/* Custom UI Enhancements */
body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
.glass-nav {
background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(12px);
border-bottom: 1px solid rgba(229, 231, 235, 0.5);
}
.custom-input {
transition: all 0.2s;
}
.custom-input:focus {
box-shadow: 0 0 0 2px rgba(56, 140, 63, 0.2);
border-color: #388c3f;
}
/* Review Card Hover Effect */
.review-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
.review-card:hover { transform: translateY(-4px); box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1); }
.tab-active { background-color: #388c3f; color: white; }
.tab-inactive { color: #6b7280; background-color: transparent; }
.tab-inactive:hover { background-color: #f3f4f6; color: #1f2937; }
</style>
<style id="all-fonts-style-font-geist">.font-geist { font-family: 'Geist', sans-serif !important; }</style><style id="all-fonts-style-font-roboto">.font-roboto { font-family: 'Roboto', sans-serif !important; }</style><style id="all-fonts-style-font-montserrat">.font-montserrat { font-family: 'Montserrat', sans-serif !important; }</style><style id="all-fonts-style-font-poppins">.font-poppins { font-family: 'Poppins', sans-serif !important; }</style><style id="all-fonts-style-font-playfair">.font-playfair { font-family: 'Playfair Display', serif !important; }</style><style id="all-fonts-style-font-instrument-serif">.font-instrument-serif { font-family: 'Instrument Serif', serif !important; }</style><style id="all-fonts-style-font-merriweather">.font-merriweather { font-family: 'Merriweather', serif !important; }</style><style id="all-fonts-style-font-bricolage">.font-bricolage { font-family: 'Bricolage Grotesque', sans-serif !important; }</style><style id="all-fonts-style-font-jakarta">.font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif !important; }</style><style id="all-fonts-style-font-manrope">.font-manrope { font-family: 'Manrope', sans-serif !important; }</style><style id="all-fonts-style-font-space-grotesk">.font-space-grotesk { font-family: 'Space Grotesk', sans-serif !important; }</style><style id="all-fonts-style-font-work-sans">.font-work-sans { font-family: 'Work Sans', sans-serif !important; }</style><style id="all-fonts-style-font-pt-serif">.font-pt-serif { font-family: 'PT Serif', serif !important; }</style><style id="all-fonts-style-font-geist-mono">.font-geist-mono { font-family: 'Geist Mono', monospace !important; }</style><style id="all-fonts-style-font-space-mono">.font-space-mono { font-family: 'Space Mono', monospace !important; }</style><style id="all-fonts-style-font-quicksand">.font-quicksand { font-family: 'Quicksand', sans-serif !important; }</style><style id="all-fonts-style-font-nunito">.font-nunito { font-family: 'Nunito', sans-serif !important; }</style><style id="all-fonts-style-font-newsreader">.font-newsreader { font-family: 'Newsreader', serif !important; }</style><style id="all-fonts-style-font-google-sans-flex">.font-google-sans-flex { font-family: 'Google Sans Flex', sans-serif !important; }</style><style id="all-fonts-style-font-oswald">.font-oswald { font-family: 'Oswald', sans-serif !important; }</style><style id="all-fonts-style-font-dm-sans">.font-dm-sans { font-family: 'DM Sans', sans-serif !important; }</style><style id="all-fonts-style-font-cormorant">.font-cormorant { font-family: 'Cormorant Garamond', serif !important; }</style>
<style id="CookieConsentStateDisplayStyles" type="text/css">.cookieconsent-optin,.cookieconsent-optin-preferences,.cookieconsent-optin-statistics,.cookieconsent-optin-marketing{display:block;display:initial;}.cookieconsent-optout-preferences,.cookieconsent-optout-statistics,.cookieconsent-optout-marketing,.cookieconsent-optout{display:none;}</style>
<iframe height="0" style={{visibility: 'hidden', display: 'none'}} width="0"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe>


<title>Cleaning Services Glasgow &amp; Edinburgh | Home Sweet Home</title>










<style>
/* Custom UI Enhancements */
body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
.glass-nav {
background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(12px);
border-bottom: 1px solid rgba(229, 231, 235, 0.5);
}
.custom-input {
transition: all 0.2s;
}
.custom-input:focus {
box-shadow: 0 0 0 2px rgba(56, 140, 63, 0.2);
border-color: #388c3f;
}
/* Review Card Hover Effect */
.review-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
.review-card:hover { transform: translateY(-4px); box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1); }
.tab-active { background-color: #388c3f; color: white; }
.tab-inactive { color: #6b7280; background-color: transparent; }
.tab-inactive:hover { background-color: #f3f4f6; color: #1f2937; }
</style>
<style id="all-fonts-style-font-geist">.font-geist { font-family: 'Geist', sans-serif !important; }</style><style id="all-fonts-style-font-roboto">.font-roboto { font-family: 'Roboto', sans-serif !important; }</style><style id="all-fonts-style-font-montserrat">.font-montserrat { font-family: 'Montserrat', sans-serif !important; }</style><style id="all-fonts-style-font-poppins">.font-poppins { font-family: 'Poppins', sans-serif !important; }</style><style id="all-fonts-style-font-playfair">.font-playfair { font-family: 'Playfair Display', serif !important; }</style><style id="all-fonts-style-font-instrument-serif">.font-instrument-serif { font-family: 'Instrument Serif', serif !important; }</style><style id="all-fonts-style-font-merriweather">.font-merriweather { font-family: 'Merriweather', serif !important; }</style><style id="all-fonts-style-font-bricolage">.font-bricolage { font-family: 'Bricolage Grotesque', sans-serif !important; }</style><style id="all-fonts-style-font-jakarta">.font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif !important; }</style><style id="all-fonts-style-font-manrope">.font-manrope { font-family: 'Manrope', sans-serif !important; }</style><style id="all-fonts-style-font-space-grotesk">.font-space-grotesk { font-family: 'Space Grotesk', sans-serif !important; }</style><style id="all-fonts-style-font-work-sans">.font-work-sans { font-family: 'Work Sans', sans-serif !important; }</style><style id="all-fonts-style-font-pt-serif">.font-pt-serif { font-family: 'PT Serif', serif !important; }</style><style id="all-fonts-style-font-geist-mono">.font-geist-mono { font-family: 'Geist Mono', monospace !important; }</style><style id="all-fonts-style-font-space-mono">.font-space-mono { font-family: 'Space Mono', monospace !important; }</style><style id="all-fonts-style-font-quicksand">.font-quicksand { font-family: 'Quicksand', sans-serif !important; }</style><style id="all-fonts-style-font-nunito">.font-nunito { font-family: 'Nunito', sans-serif !important; }</style><style id="all-fonts-style-font-newsreader">.font-newsreader { font-family: 'Newsreader', serif !important; }</style><style id="all-fonts-style-font-google-sans-flex">.font-google-sans-flex { font-family: 'Google Sans Flex', sans-serif !important; }</style><style id="all-fonts-style-font-oswald">.font-oswald { font-family: 'Oswald', sans-serif !important; }</style><style id="all-fonts-style-font-dm-sans">.font-dm-sans { font-family: 'DM Sans', sans-serif !important; }</style><style id="all-fonts-style-font-cormorant">.font-cormorant { font-family: 'Cormorant Garamond', serif !important; }</style>
<style id="CookieConsentStateDisplayStyles" type="text/css">.cookieconsent-optin,.cookieconsent-optin-preferences,.cookieconsent-optin-statistics,.cookieconsent-optin-marketing{display:block;display:initial;}.cookieconsent-optout-preferences,.cookieconsent-optout-statistics,.cookieconsent-optout-marketing,.cookieconsent-optout{display:none;}</style>
<iframe height="0" style={{visibility: 'hidden', display: 'none'}} width="0"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe>


<title>Cleaning Services Glasgow &amp; Edinburgh | Home Sweet Home</title>




<style>
          .invisible { visibility: hidden !important; }
        </style>





<style>
/* Custom UI Enhancements */
body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
.glass-nav {
background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(12px);
border-bottom: 1px solid rgba(229, 231, 235, 0.5);
}
.custom-input {
transition: all 0.2s;
}
.custom-input:focus {
box-shadow: 0 0 0 2px rgba(56, 140, 63, 0.2);
border-color: #388c3f;
}
/* Review Card Hover Effect */
.review-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
.review-card:hover { transform: translateY(-4px); box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1); }
.tab-active { background-color: #388c3f; color: white; }
.tab-inactive { color: #6b7280; background-color: transparent; }
.tab-inactive:hover { background-color: #f3f4f6; color: #1f2937; }
</style>
<style id="all-fonts-style-font-geist">.font-geist { font-family: 'Geist', sans-serif !important; }</style><style id="all-fonts-style-font-roboto">.font-roboto { font-family: 'Roboto', sans-serif !important; }</style><style id="all-fonts-style-font-montserrat">.font-montserrat { font-family: 'Montserrat', sans-serif !important; }</style><style id="all-fonts-style-font-poppins">.font-poppins { font-family: 'Poppins', sans-serif !important; }</style><style id="all-fonts-style-font-playfair">.font-playfair { font-family: 'Playfair Display', serif !important; }</style><style id="all-fonts-style-font-instrument-serif">.font-instrument-serif { font-family: 'Instrument Serif', serif !important; }</style><style id="all-fonts-style-font-merriweather">.font-merriweather { font-family: 'Merriweather', serif !important; }</style><style id="all-fonts-style-font-bricolage">.font-bricolage { font-family: 'Bricolage Grotesque', sans-serif !important; }</style><style id="all-fonts-style-font-jakarta">.font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif !important; }</style><style id="all-fonts-style-font-manrope">.font-manrope { font-family: 'Manrope', sans-serif !important; }</style><style id="all-fonts-style-font-space-grotesk">.font-space-grotesk { font-family: 'Space Grotesk', sans-serif !important; }</style><style id="all-fonts-style-font-work-sans">.font-work-sans { font-family: 'Work Sans', sans-serif !important; }</style><style id="all-fonts-style-font-pt-serif">.font-pt-serif { font-family: 'PT Serif', serif !important; }</style><style id="all-fonts-style-font-geist-mono">.font-geist-mono { font-family: 'Geist Mono', monospace !important; }</style><style id="all-fonts-style-font-space-mono">.font-space-mono { font-family: 'Space Mono', monospace !important; }</style><style id="all-fonts-style-font-quicksand">.font-quicksand { font-family: 'Quicksand', sans-serif !important; }</style><style id="all-fonts-style-font-nunito">.font-nunito { font-family: 'Nunito', sans-serif !important; }</style><style id="all-fonts-style-font-newsreader">.font-newsreader { font-family: 'Newsreader', serif !important; }</style><style id="all-fonts-style-font-google-sans-flex">.font-google-sans-flex { font-family: 'Google Sans Flex', sans-serif !important; }</style><style id="all-fonts-style-font-oswald">.font-oswald { font-family: 'Oswald', sans-serif !important; }</style><style id="all-fonts-style-font-dm-sans">.font-dm-sans { font-family: 'DM Sans', sans-serif !important; }</style><style id="all-fonts-style-font-cormorant">.font-cormorant { font-family: 'Cormorant Garamond', serif !important; }</style>
<style id="CookieConsentStateDisplayStyles" type="text/css">.cookieconsent-optin,.cookieconsent-optin-preferences,.cookieconsent-optin-statistics,.cookieconsent-optin-marketing{display:block;display:initial;}.cookieconsent-optout-preferences,.cookieconsent-optout-statistics,.cookieconsent-optout-marketing,.cookieconsent-optout{display:none;}</style>
<iframe height="0" style={{visibility: 'hidden', display: 'none'}} width="0"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe>


<title>Cleaning Services Glasgow &amp; Edinburgh | Home Sweet Home</title>




<style>
          .invisible { visibility: hidden !important; }
        </style>

<iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe>



<style>
/* Custom UI Enhancements */
body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
.glass-nav {
background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(12px);
border-bottom: 1px solid rgba(229, 231, 235, 0.5);
}
.custom-input {
transition: all 0.2s;
}
.custom-input:focus {
box-shadow: 0 0 0 2px rgba(56, 140, 63, 0.2);
border-color: #388c3f;
}
/* Review Card Hover Effect */
.review-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
.review-card:hover { transform: translateY(-4px); box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1); }
.tab-active { background-color: #388c3f; color: white; }
.tab-inactive { color: #6b7280; background-color: transparent; }
.tab-inactive:hover { background-color: #f3f4f6; color: #1f2937; }
</style>
<style id="all-fonts-style-font-geist">.font-geist { font-family: 'Geist', sans-serif !important; }</style><style id="all-fonts-style-font-roboto">.font-roboto { font-family: 'Roboto', sans-serif !important; }</style><style id="all-fonts-style-font-montserrat">.font-montserrat { font-family: 'Montserrat', sans-serif !important; }</style><style id="all-fonts-style-font-poppins">.font-poppins { font-family: 'Poppins', sans-serif !important; }</style><style id="all-fonts-style-font-playfair">.font-playfair { font-family: 'Playfair Display', serif !important; }</style><style id="all-fonts-style-font-instrument-serif">.font-instrument-serif { font-family: 'Instrument Serif', serif !important; }</style><style id="all-fonts-style-font-merriweather">.font-merriweather { font-family: 'Merriweather', serif !important; }</style><style id="all-fonts-style-font-bricolage">.font-bricolage { font-family: 'Bricolage Grotesque', sans-serif !important; }</style><style id="all-fonts-style-font-jakarta">.font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif !important; }</style><style id="all-fonts-style-font-manrope">.font-manrope { font-family: 'Manrope', sans-serif !important; }</style><style id="all-fonts-style-font-space-grotesk">.font-space-grotesk { font-family: 'Space Grotesk', sans-serif !important; }</style><style id="all-fonts-style-font-work-sans">.font-work-sans { font-family: 'Work Sans', sans-serif !important; }</style><style id="all-fonts-style-font-pt-serif">.font-pt-serif { font-family: 'PT Serif', serif !important; }</style><style id="all-fonts-style-font-geist-mono">.font-geist-mono { font-family: 'Geist Mono', monospace !important; }</style><style id="all-fonts-style-font-space-mono">.font-space-mono { font-family: 'Space Mono', monospace !important; }</style><style id="all-fonts-style-font-quicksand">.font-quicksand { font-family: 'Quicksand', sans-serif !important; }</style><style id="all-fonts-style-font-nunito">.font-nunito { font-family: 'Nunito', sans-serif !important; }</style><style id="all-fonts-style-font-newsreader">.font-newsreader { font-family: 'Newsreader', serif !important; }</style><style id="all-fonts-style-font-google-sans-flex">.font-google-sans-flex { font-family: 'Google Sans Flex', sans-serif !important; }</style><style id="all-fonts-style-font-oswald">.font-oswald { font-family: 'Oswald', sans-serif !important; }</style><style id="all-fonts-style-font-dm-sans">.font-dm-sans { font-family: 'DM Sans', sans-serif !important; }</style><style id="all-fonts-style-font-cormorant">.font-cormorant { font-family: 'Cormorant Garamond', serif !important; }</style>
<style id="CookieConsentStateDisplayStyles" type="text/css">.cookieconsent-optin,.cookieconsent-optin-preferences,.cookieconsent-optin-statistics,.cookieconsent-optin-marketing{display:block;display:initial;}.cookieconsent-optout-preferences,.cookieconsent-optout-statistics,.cookieconsent-optout-marketing,.cookieconsent-optout{display:none;}</style>
<iframe height="0" style={{visibility: 'hidden', display: 'none'}} width="0"></iframe><iframe aria-hidden="true" className="" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe>


<title>Cleaning Services Glasgow &amp; Edinburgh | Home Sweet Home</title>




<iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe>





<style>
/* Custom UI Enhancements */
body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
.glass-nav {
background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(12px);
border-bottom: 1px solid rgba(229, 231, 235, 0.5);
}
.custom-input {
transition: all 0.2s;
}
.custom-input:focus {
box-shadow: 0 0 0 2px rgba(56, 140, 63, 0.2);
border-color: #388c3f;
}
/* Review Card Hover Effect */
.review-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
.review-card:hover { transform: translateY(-4px); box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1); }
.tab-active { background-color: #388c3f; color: white; }
.tab-inactive { color: #6b7280; background-color: transparent; }
.tab-inactive:hover { background-color: #f3f4f6; color: #1f2937; }
</style>
<style id="all-fonts-style-font-geist">.font-geist { font-family: 'Geist', sans-serif !important; }</style><style id="all-fonts-style-font-roboto">.font-roboto { font-family: 'Roboto', sans-serif !important; }</style><style id="all-fonts-style-font-montserrat">.font-montserrat { font-family: 'Montserrat', sans-serif !important; }</style><style id="all-fonts-style-font-poppins">.font-poppins { font-family: 'Poppins', sans-serif !important; }</style><style id="all-fonts-style-font-playfair">.font-playfair { font-family: 'Playfair Display', serif !important; }</style><style id="all-fonts-style-font-instrument-serif">.font-instrument-serif { font-family: 'Instrument Serif', serif !important; }</style><style id="all-fonts-style-font-merriweather">.font-merriweather { font-family: 'Merriweather', serif !important; }</style><style id="all-fonts-style-font-bricolage">.font-bricolage { font-family: 'Bricolage Grotesque', sans-serif !important; }</style><style id="all-fonts-style-font-jakarta">.font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif !important; }</style><style id="all-fonts-style-font-manrope">.font-manrope { font-family: 'Manrope', sans-serif !important; }</style><style id="all-fonts-style-font-space-grotesk">.font-space-grotesk { font-family: 'Space Grotesk', sans-serif !important; }</style><style id="all-fonts-style-font-work-sans">.font-work-sans { font-family: 'Work Sans', sans-serif !important; }</style><style id="all-fonts-style-font-pt-serif">.font-pt-serif { font-family: 'PT Serif', serif !important; }</style><style id="all-fonts-style-font-geist-mono">.font-geist-mono { font-family: 'Geist Mono', monospace !important; }</style><style id="all-fonts-style-font-space-mono">.font-space-mono { font-family: 'Space Mono', monospace !important; }</style><style id="all-fonts-style-font-quicksand">.font-quicksand { font-family: 'Quicksand', sans-serif !important; }</style><style id="all-fonts-style-font-nunito">.font-nunito { font-family: 'Nunito', sans-serif !important; }</style><style id="all-fonts-style-font-newsreader">.font-newsreader { font-family: 'Newsreader', serif !important; }</style><style id="all-fonts-style-font-google-sans-flex">.font-google-sans-flex { font-family: 'Google Sans Flex', sans-serif !important; }</style><style id="all-fonts-style-font-oswald">.font-oswald { font-family: 'Oswald', sans-serif !important; }</style><style id="all-fonts-style-font-dm-sans">.font-dm-sans { font-family: 'DM Sans', sans-serif !important; }</style><style id="all-fonts-style-font-cormorant">.font-cormorant { font-family: 'Cormorant Garamond', serif !important; }</style>
<style>
          .invisible { visibility: hidden !important; }
        </style>
<iframe height="0" style={{visibility: 'hidden', display: 'none'}} width="0"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe>


<title>Cleaning Services Glasgow &amp; Edinburgh | Home Sweet Home</title>




<style>
          .invisible { visibility: hidden !important; }
        </style>





<style>
/* Custom UI Enhancements */
body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
.glass-nav {
background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(12px);
border-bottom: 1px solid rgba(229, 231, 235, 0.5);
}
.custom-input {
transition: all 0.2s;
}
.custom-input:focus {
box-shadow: 0 0 0 2px rgba(56, 140, 63, 0.2);
border-color: #388c3f;
}
/* Review Card Hover Effect */
.review-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
.review-card:hover { transform: translateY(-4px); box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1); }
.tab-active { background-color: #388c3f; color: white; }
.tab-inactive { color: #6b7280; background-color: transparent; }
.tab-inactive:hover { background-color: #f3f4f6; color: #1f2937; }
</style>
<style id="all-fonts-style-font-geist">.font-geist { font-family: 'Geist', sans-serif !important; }</style><style id="all-fonts-style-font-roboto">.font-roboto { font-family: 'Roboto', sans-serif !important; }</style><style id="all-fonts-style-font-montserrat">.font-montserrat { font-family: 'Montserrat', sans-serif !important; }</style><style id="all-fonts-style-font-poppins">.font-poppins { font-family: 'Poppins', sans-serif !important; }</style><style id="all-fonts-style-font-playfair">.font-playfair { font-family: 'Playfair Display', serif !important; }</style><style id="all-fonts-style-font-instrument-serif">.font-instrument-serif { font-family: 'Instrument Serif', serif !important; }</style><style id="all-fonts-style-font-merriweather">.font-merriweather { font-family: 'Merriweather', serif !important; }</style><style id="all-fonts-style-font-bricolage">.font-bricolage { font-family: 'Bricolage Grotesque', sans-serif !important; }</style><style id="all-fonts-style-font-jakarta">.font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif !important; }</style><style id="all-fonts-style-font-manrope">.font-manrope { font-family: 'Manrope', sans-serif !important; }</style><style id="all-fonts-style-font-space-grotesk">.font-space-grotesk { font-family: 'Space Grotesk', sans-serif !important; }</style><style id="all-fonts-style-font-work-sans">.font-work-sans { font-family: 'Work Sans', sans-serif !important; }</style><style id="all-fonts-style-font-pt-serif">.font-pt-serif { font-family: 'PT Serif', serif !important; }</style><style id="all-fonts-style-font-geist-mono">.font-geist-mono { font-family: 'Geist Mono', monospace !important; }</style><style id="all-fonts-style-font-space-mono">.font-space-mono { font-family: 'Space Mono', monospace !important; }</style><style id="all-fonts-style-font-quicksand">.font-quicksand { font-family: 'Quicksand', sans-serif !important; }</style><style id="all-fonts-style-font-nunito">.font-nunito { font-family: 'Nunito', sans-serif !important; }</style><style id="all-fonts-style-font-newsreader">.font-newsreader { font-family: 'Newsreader', serif !important; }</style><style id="all-fonts-style-font-google-sans-flex">.font-google-sans-flex { font-family: 'Google Sans Flex', sans-serif !important; }</style><style id="all-fonts-style-font-oswald">.font-oswald { font-family: 'Oswald', sans-serif !important; }</style><style id="all-fonts-style-font-dm-sans">.font-dm-sans { font-family: 'DM Sans', sans-serif !important; }</style><style id="all-fonts-style-font-cormorant">.font-cormorant { font-family: 'Cormorant Garamond', serif !important; }</style>
<style id="CookieConsentStateDisplayStyles" type="text/css">.cookieconsent-optin,.cookieconsent-optin-preferences,.cookieconsent-optin-statistics,.cookieconsent-optin-marketing{display:block;display:initial;}.cookieconsent-optout-preferences,.cookieconsent-optout-statistics,.cookieconsent-optout-marketing,.cookieconsent-optout{display:none;}</style>
<iframe height="0" style={{visibility: 'hidden', display: 'none'}} width="0"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe>


<title>Cleaning Services Glasgow &amp; Edinburgh | Home Sweet Home</title>










<iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><style>
/* Custom UI Enhancements */
body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
.glass-nav {
background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(12px);
border-bottom: 1px solid rgba(229, 231, 235, 0.5);
}
.custom-input {
transition: all 0.2s;
}
.custom-input:focus {
box-shadow: 0 0 0 2px rgba(56, 140, 63, 0.2);
border-color: #388c3f;
}
/* Review Card Hover Effect */
.review-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
.review-card:hover { transform: translateY(-4px); box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1); }
.tab-active { background-color: #388c3f; color: white; }
.tab-inactive { color: #6b7280; background-color: transparent; }
.tab-inactive:hover { background-color: #f3f4f6; color: #1f2937; }
</style>
<style id="all-fonts-style-font-geist">.font-geist { font-family: 'Geist', sans-serif !important; }</style><style id="all-fonts-style-font-roboto">.font-roboto { font-family: 'Roboto', sans-serif !important; }</style><style id="all-fonts-style-font-montserrat">.font-montserrat { font-family: 'Montserrat', sans-serif !important; }</style><style id="all-fonts-style-font-poppins">.font-poppins { font-family: 'Poppins', sans-serif !important; }</style><style id="all-fonts-style-font-playfair">.font-playfair { font-family: 'Playfair Display', serif !important; }</style><style id="all-fonts-style-font-instrument-serif">.font-instrument-serif { font-family: 'Instrument Serif', serif !important; }</style><style id="all-fonts-style-font-merriweather">.font-merriweather { font-family: 'Merriweather', serif !important; }</style><style id="all-fonts-style-font-bricolage">.font-bricolage { font-family: 'Bricolage Grotesque', sans-serif !important; }</style><style id="all-fonts-style-font-jakarta">.font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif !important; }</style><style id="all-fonts-style-font-manrope">.font-manrope { font-family: 'Manrope', sans-serif !important; }</style><style id="all-fonts-style-font-space-grotesk">.font-space-grotesk { font-family: 'Space Grotesk', sans-serif !important; }</style><style id="all-fonts-style-font-work-sans">.font-work-sans { font-family: 'Work Sans', sans-serif !important; }</style><style id="all-fonts-style-font-pt-serif">.font-pt-serif { font-family: 'PT Serif', serif !important; }</style><style id="all-fonts-style-font-geist-mono">.font-geist-mono { font-family: 'Geist Mono', monospace !important; }</style><style id="all-fonts-style-font-space-mono">.font-space-mono { font-family: 'Space Mono', monospace !important; }</style><style id="all-fonts-style-font-quicksand">.font-quicksand { font-family: 'Quicksand', sans-serif !important; }</style><style id="all-fonts-style-font-nunito">.font-nunito { font-family: 'Nunito', sans-serif !important; }</style><style id="all-fonts-style-font-newsreader">.font-newsreader { font-family: 'Newsreader', serif !important; }</style><style id="all-fonts-style-font-google-sans-flex">.font-google-sans-flex { font-family: 'Google Sans Flex', sans-serif !important; }</style><style id="all-fonts-style-font-oswald">.font-oswald { font-family: 'Oswald', sans-serif !important; }</style><style id="all-fonts-style-font-dm-sans">.font-dm-sans { font-family: 'DM Sans', sans-serif !important; }</style><style id="all-fonts-style-font-cormorant">.font-cormorant { font-family: 'Cormorant Garamond', serif !important; }</style>
<style id="CookieConsentStateDisplayStyles" type="text/css">.cookieconsent-optin,.cookieconsent-optin-preferences,.cookieconsent-optin-statistics,.cookieconsent-optin-marketing{display:block;display:initial;}.cookieconsent-optout-preferences,.cookieconsent-optout-statistics,.cookieconsent-optout-marketing,.cookieconsent-optout{display:none;}</style>
<iframe height="0" style={{visibility: 'hidden', display: 'none'}} width="0"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe>


<title>Cleaning Services Glasgow &amp; Edinburgh | Home Sweet Home</title>




<style>
          .invisible { visibility: hidden !important; }
        </style>





<style>
/* Custom UI Enhancements */
body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
.glass-nav {
background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(12px);
border-bottom: 1px solid rgba(229, 231, 235, 0.5);
}
.custom-input {
transition: all 0.2s;
}
.custom-input:focus {
box-shadow: 0 0 0 2px rgba(56, 140, 63, 0.2);
border-color: #388c3f;
}
/* Review Card Hover Effect */
.review-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
.review-card:hover { transform: translateY(-4px); box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1); }
.tab-active { background-color: #388c3f; color: white; }
.tab-inactive { color: #6b7280; background-color: transparent; }
.tab-inactive:hover { background-color: #f3f4f6; color: #1f2937; }
</style>
<style id="all-fonts-style-font-geist">.font-geist { font-family: 'Geist', sans-serif !important; }</style><style id="all-fonts-style-font-roboto">.font-roboto { font-family: 'Roboto', sans-serif !important; }</style><style id="all-fonts-style-font-montserrat">.font-montserrat { font-family: 'Montserrat', sans-serif !important; }</style><style id="all-fonts-style-font-poppins">.font-poppins { font-family: 'Poppins', sans-serif !important; }</style><style id="all-fonts-style-font-playfair">.font-playfair { font-family: 'Playfair Display', serif !important; }</style><style id="all-fonts-style-font-instrument-serif">.font-instrument-serif { font-family: 'Instrument Serif', serif !important; }</style><style id="all-fonts-style-font-merriweather">.font-merriweather { font-family: 'Merriweather', serif !important; }</style><style id="all-fonts-style-font-bricolage">.font-bricolage { font-family: 'Bricolage Grotesque', sans-serif !important; }</style><style id="all-fonts-style-font-jakarta">.font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif !important; }</style><style id="all-fonts-style-font-manrope">.font-manrope { font-family: 'Manrope', sans-serif !important; }</style><style id="all-fonts-style-font-space-grotesk">.font-space-grotesk { font-family: 'Space Grotesk', sans-serif !important; }</style><style id="all-fonts-style-font-work-sans">.font-work-sans { font-family: 'Work Sans', sans-serif !important; }</style><style id="all-fonts-style-font-pt-serif">.font-pt-serif { font-family: 'PT Serif', serif !important; }</style><style id="all-fonts-style-font-geist-mono">.font-geist-mono { font-family: 'Geist Mono', monospace !important; }</style><style id="all-fonts-style-font-space-mono">.font-space-mono { font-family: 'Space Mono', monospace !important; }</style><style id="all-fonts-style-font-quicksand">.font-quicksand { font-family: 'Quicksand', sans-serif !important; }</style><style id="all-fonts-style-font-nunito">.font-nunito { font-family: 'Nunito', sans-serif !important; }</style><style id="all-fonts-style-font-newsreader">.font-newsreader { font-family: 'Newsreader', serif !important; }</style><style id="all-fonts-style-font-google-sans-flex">.font-google-sans-flex { font-family: 'Google Sans Flex', sans-serif !important; }</style><style id="all-fonts-style-font-oswald">.font-oswald { font-family: 'Oswald', sans-serif !important; }</style><style id="all-fonts-style-font-dm-sans">.font-dm-sans { font-family: 'DM Sans', sans-serif !important; }</style><style id="all-fonts-style-font-cormorant">.font-cormorant { font-family: 'Cormorant Garamond', serif !important; }</style>
<style id="CookieConsentStateDisplayStyles" type="text/css">.cookieconsent-optin,.cookieconsent-optin-preferences,.cookieconsent-optin-statistics,.cookieconsent-optin-marketing{display:block;display:initial;}.cookieconsent-optout-preferences,.cookieconsent-optout-statistics,.cookieconsent-optout-marketing,.cookieconsent-optout{display:none;}</style>
<iframe height="0" style={{visibility: 'hidden', display: 'none'}} width="0"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe>


<title>Cleaning Services Glasgow &amp; Edinburgh | Home Sweet Home</title>




<style>
          .invisible { visibility: hidden !important; }
        </style>





<style>
/* Custom UI Enhancements */
body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
.glass-nav {
background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(12px);
border-bottom: 1px solid rgba(229, 231, 235, 0.5);
}
.custom-input {
transition: all 0.2s;
}
.custom-input:focus {
box-shadow: 0 0 0 2px rgba(56, 140, 63, 0.2);
border-color: #388c3f;
}
/* Review Card Hover Effect */
.review-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
.review-card:hover { transform: translateY(-4px); box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1); }
.tab-active { background-color: #388c3f; color: white; }
.tab-inactive { color: #6b7280; background-color: transparent; }
.tab-inactive:hover { background-color: #f3f4f6; color: #1f2937; }
</style>
<style id="all-fonts-style-font-geist">.font-geist { font-family: 'Geist', sans-serif !important; }</style><style id="all-fonts-style-font-roboto">.font-roboto { font-family: 'Roboto', sans-serif !important; }</style><style id="all-fonts-style-font-montserrat">.font-montserrat { font-family: 'Montserrat', sans-serif !important; }</style><style id="all-fonts-style-font-poppins">.font-poppins { font-family: 'Poppins', sans-serif !important; }</style><style id="all-fonts-style-font-playfair">.font-playfair { font-family: 'Playfair Display', serif !important; }</style><style id="all-fonts-style-font-instrument-serif">.font-instrument-serif { font-family: 'Instrument Serif', serif !important; }</style><style id="all-fonts-style-font-merriweather">.font-merriweather { font-family: 'Merriweather', serif !important; }</style><style id="all-fonts-style-font-bricolage">.font-bricolage { font-family: 'Bricolage Grotesque', sans-serif !important; }</style><style id="all-fonts-style-font-jakarta">.font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif !important; }</style><style id="all-fonts-style-font-manrope">.font-manrope { font-family: 'Manrope', sans-serif !important; }</style><style id="all-fonts-style-font-space-grotesk">.font-space-grotesk { font-family: 'Space Grotesk', sans-serif !important; }</style><style id="all-fonts-style-font-work-sans">.font-work-sans { font-family: 'Work Sans', sans-serif !important; }</style><style id="all-fonts-style-font-pt-serif">.font-pt-serif { font-family: 'PT Serif', serif !important; }</style><style id="all-fonts-style-font-geist-mono">.font-geist-mono { font-family: 'Geist Mono', monospace !important; }</style><style id="all-fonts-style-font-space-mono">.font-space-mono { font-family: 'Space Mono', monospace !important; }</style><style id="all-fonts-style-font-quicksand">.font-quicksand { font-family: 'Quicksand', sans-serif !important; }</style><style id="all-fonts-style-font-nunito">.font-nunito { font-family: 'Nunito', sans-serif !important; }</style><style id="all-fonts-style-font-newsreader">.font-newsreader { font-family: 'Newsreader', serif !important; }</style><style id="all-fonts-style-font-google-sans-flex">.font-google-sans-flex { font-family: 'Google Sans Flex', sans-serif !important; }</style><style id="all-fonts-style-font-oswald">.font-oswald { font-family: 'Oswald', sans-serif !important; }</style><style id="all-fonts-style-font-dm-sans">.font-dm-sans { font-family: 'DM Sans', sans-serif !important; }</style><style id="all-fonts-style-font-cormorant">.font-cormorant { font-family: 'Cormorant Garamond', serif !important; }</style>
<style id="CookieConsentStateDisplayStyles" type="text/css">.cookieconsent-optin,.cookieconsent-optin-preferences,.cookieconsent-optin-statistics,.cookieconsent-optin-marketing{display:block;display:initial;}.cookieconsent-optout-preferences,.cookieconsent-optout-statistics,.cookieconsent-optout-marketing,.cookieconsent-optout{display:none;}</style>
<iframe height="0" style={{visibility: 'hidden', display: 'none'}} width="0"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe>


<title>Cleaning Services Glasgow &amp; Edinburgh | Home Sweet Home</title>




<style>
          .invisible { visibility: hidden !important; }
        </style>





<style>
/* Custom UI Enhancements */
body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
.glass-nav {
background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(12px);
border-bottom: 1px solid rgba(229, 231, 235, 0.5);
}
.custom-input {
transition: all 0.2s;
}
.custom-input:focus {
box-shadow: 0 0 0 2px rgba(56, 140, 63, 0.2);
border-color: #388c3f;
}
/* Review Card Hover Effect */
.review-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
.review-card:hover { transform: translateY(-4px); box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1); }
.tab-active { background-color: #388c3f; color: white; }
.tab-inactive { color: #6b7280; background-color: transparent; }
.tab-inactive:hover { background-color: #f3f4f6; color: #1f2937; }
</style>
<style id="all-fonts-style-font-geist">.font-geist { font-family: 'Geist', sans-serif !important; }</style><style id="all-fonts-style-font-roboto">.font-roboto { font-family: 'Roboto', sans-serif !important; }</style><style id="all-fonts-style-font-montserrat">.font-montserrat { font-family: 'Montserrat', sans-serif !important; }</style><style id="all-fonts-style-font-poppins">.font-poppins { font-family: 'Poppins', sans-serif !important; }</style><style id="all-fonts-style-font-playfair">.font-playfair { font-family: 'Playfair Display', serif !important; }</style><style id="all-fonts-style-font-instrument-serif">.font-instrument-serif { font-family: 'Instrument Serif', serif !important; }</style><style id="all-fonts-style-font-merriweather">.font-merriweather { font-family: 'Merriweather', serif !important; }</style><style id="all-fonts-style-font-bricolage">.font-bricolage { font-family: 'Bricolage Grotesque', sans-serif !important; }</style><style id="all-fonts-style-font-jakarta">.font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif !important; }</style><style id="all-fonts-style-font-manrope">.font-manrope { font-family: 'Manrope', sans-serif !important; }</style><style id="all-fonts-style-font-space-grotesk">.font-space-grotesk { font-family: 'Space Grotesk', sans-serif !important; }</style><style id="all-fonts-style-font-work-sans">.font-work-sans { font-family: 'Work Sans', sans-serif !important; }</style><style id="all-fonts-style-font-pt-serif">.font-pt-serif { font-family: 'PT Serif', serif !important; }</style><style id="all-fonts-style-font-geist-mono">.font-geist-mono { font-family: 'Geist Mono', monospace !important; }</style><style id="all-fonts-style-font-space-mono">.font-space-mono { font-family: 'Space Mono', monospace !important; }</style><style id="all-fonts-style-font-quicksand">.font-quicksand { font-family: 'Quicksand', sans-serif !important; }</style><style id="all-fonts-style-font-nunito">.font-nunito { font-family: 'Nunito', sans-serif !important; }</style><style id="all-fonts-style-font-newsreader">.font-newsreader { font-family: 'Newsreader', serif !important; }</style><style id="all-fonts-style-font-google-sans-flex">.font-google-sans-flex { font-family: 'Google Sans Flex', sans-serif !important; }</style><style id="all-fonts-style-font-oswald">.font-oswald { font-family: 'Oswald', sans-serif !important; }</style><style id="all-fonts-style-font-dm-sans">.font-dm-sans { font-family: 'DM Sans', sans-serif !important; }</style><style id="all-fonts-style-font-cormorant">.font-cormorant { font-family: 'Cormorant Garamond', serif !important; }</style>

<iframe height="0" style={{visibility: 'hidden', display: 'none'}} width="0"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe>


<title>Cleaning Services Glasgow &amp; Edinburgh | Home Sweet Home</title>




<style>
          .invisible { visibility: hidden !important; }
        </style>





<iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><style>
/* Custom UI Enhancements */
body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
.glass-nav {
background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(12px);
border-bottom: 1px solid rgba(229, 231, 235, 0.5);
}
.custom-input {
transition: all 0.2s;
}
.custom-input:focus {
box-shadow: 0 0 0 2px rgba(56, 140, 63, 0.2);
border-color: #388c3f;
}
/* Review Card Hover Effect */
.review-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
.review-card:hover { transform: translateY(-4px); box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1); }
.tab-active { background-color: #388c3f; color: white; }
.tab-inactive { color: #6b7280; background-color: transparent; }
.tab-inactive:hover { background-color: #f3f4f6; color: #1f2937; }
</style>
<style id="all-fonts-style-font-geist">.font-geist { font-family: 'Geist', sans-serif !important; }</style><style id="all-fonts-style-font-roboto">.font-roboto { font-family: 'Roboto', sans-serif !important; }</style><style id="all-fonts-style-font-montserrat">.font-montserrat { font-family: 'Montserrat', sans-serif !important; }</style><style id="all-fonts-style-font-poppins">.font-poppins { font-family: 'Poppins', sans-serif !important; }</style><style id="all-fonts-style-font-playfair">.font-playfair { font-family: 'Playfair Display', serif !important; }</style><style id="all-fonts-style-font-instrument-serif">.font-instrument-serif { font-family: 'Instrument Serif', serif !important; }</style><style id="all-fonts-style-font-merriweather">.font-merriweather { font-family: 'Merriweather', serif !important; }</style><style id="all-fonts-style-font-bricolage">.font-bricolage { font-family: 'Bricolage Grotesque', sans-serif !important; }</style><style id="all-fonts-style-font-jakarta">.font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif !important; }</style><style id="all-fonts-style-font-manrope">.font-manrope { font-family: 'Manrope', sans-serif !important; }</style><style id="all-fonts-style-font-space-grotesk">.font-space-grotesk { font-family: 'Space Grotesk', sans-serif !important; }</style><style id="all-fonts-style-font-work-sans">.font-work-sans { font-family: 'Work Sans', sans-serif !important; }</style><style id="all-fonts-style-font-pt-serif">.font-pt-serif { font-family: 'PT Serif', serif !important; }</style><style id="all-fonts-style-font-geist-mono">.font-geist-mono { font-family: 'Geist Mono', monospace !important; }</style><style id="all-fonts-style-font-space-mono">.font-space-mono { font-family: 'Space Mono', monospace !important; }</style><style id="all-fonts-style-font-quicksand">.font-quicksand { font-family: 'Quicksand', sans-serif !important; }</style><style id="all-fonts-style-font-nunito">.font-nunito { font-family: 'Nunito', sans-serif !important; }</style><style id="all-fonts-style-font-newsreader">.font-newsreader { font-family: 'Newsreader', serif !important; }</style><style id="all-fonts-style-font-google-sans-flex">.font-google-sans-flex { font-family: 'Google Sans Flex', sans-serif !important; }</style><style id="all-fonts-style-font-oswald">.font-oswald { font-family: 'Oswald', sans-serif !important; }</style><style id="all-fonts-style-font-dm-sans">.font-dm-sans { font-family: 'DM Sans', sans-serif !important; }</style><style id="all-fonts-style-font-cormorant">.font-cormorant { font-family: 'Cormorant Garamond', serif !important; }</style>
<style id="CookieConsentStateDisplayStyles" type="text/css">.cookieconsent-optin,.cookieconsent-optin-preferences,.cookieconsent-optin-statistics,.cookieconsent-optin-marketing{display:block;display:initial;}.cookieconsent-optout-preferences,.cookieconsent-optout-statistics,.cookieconsent-optout-marketing,.cookieconsent-optout{display:none;}</style>
<iframe height="0" style={{visibility: 'hidden', display: 'none'}} width="0"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe>


<title>Cleaning Services Glasgow &amp; Edinburgh | Home Sweet Home</title>




<style>
          .invisible { visibility: hidden !important; }
        </style>





<style>
/* Custom UI Enhancements */
body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
.glass-nav {
background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(12px);
border-bottom: 1px solid rgba(229, 231, 235, 0.5);
}
.custom-input {
transition: all 0.2s;
}
.custom-input:focus {
box-shadow: 0 0 0 2px rgba(56, 140, 63, 0.2);
border-color: #388c3f;
}
/* Review Card Hover Effect */
.review-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
.review-card:hover { transform: translateY(-4px); box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1); }
.tab-active { background-color: #388c3f; color: white; }
.tab-inactive { color: #6b7280; background-color: transparent; }
.tab-inactive:hover { background-color: #f3f4f6; color: #1f2937; }
</style>
<style id="all-fonts-style-font-geist">.font-geist { font-family: 'Geist', sans-serif !important; }</style><style id="all-fonts-style-font-roboto">.font-roboto { font-family: 'Roboto', sans-serif !important; }</style><style id="all-fonts-style-font-montserrat">.font-montserrat { font-family: 'Montserrat', sans-serif !important; }</style><style id="all-fonts-style-font-poppins">.font-poppins { font-family: 'Poppins', sans-serif !important; }</style><style id="all-fonts-style-font-playfair">.font-playfair { font-family: 'Playfair Display', serif !important; }</style><style id="all-fonts-style-font-instrument-serif">.font-instrument-serif { font-family: 'Instrument Serif', serif !important; }</style><style id="all-fonts-style-font-merriweather">.font-merriweather { font-family: 'Merriweather', serif !important; }</style><style id="all-fonts-style-font-bricolage">.font-bricolage { font-family: 'Bricolage Grotesque', sans-serif !important; }</style><style id="all-fonts-style-font-jakarta">.font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif !important; }</style><style id="all-fonts-style-font-manrope">.font-manrope { font-family: 'Manrope', sans-serif !important; }</style><style id="all-fonts-style-font-space-grotesk">.font-space-grotesk { font-family: 'Space Grotesk', sans-serif !important; }</style><style id="all-fonts-style-font-work-sans">.font-work-sans { font-family: 'Work Sans', sans-serif !important; }</style><style id="all-fonts-style-font-pt-serif">.font-pt-serif { font-family: 'PT Serif', serif !important; }</style><style id="all-fonts-style-font-geist-mono">.font-geist-mono { font-family: 'Geist Mono', monospace !important; }</style><style id="all-fonts-style-font-space-mono">.font-space-mono { font-family: 'Space Mono', monospace !important; }</style><style id="all-fonts-style-font-quicksand">.font-quicksand { font-family: 'Quicksand', sans-serif !important; }</style><style id="all-fonts-style-font-nunito">.font-nunito { font-family: 'Nunito', sans-serif !important; }</style><style id="all-fonts-style-font-newsreader">.font-newsreader { font-family: 'Newsreader', serif !important; }</style><style id="all-fonts-style-font-google-sans-flex">.font-google-sans-flex { font-family: 'Google Sans Flex', sans-serif !important; }</style><style id="all-fonts-style-font-oswald">.font-oswald { font-family: 'Oswald', sans-serif !important; }</style><style id="all-fonts-style-font-dm-sans">.font-dm-sans { font-family: 'DM Sans', sans-serif !important; }</style><style id="all-fonts-style-font-cormorant">.font-cormorant { font-family: 'Cormorant Garamond', serif !important; }</style>
<style id="CookieConsentStateDisplayStyles" type="text/css">.cookieconsent-optin,.cookieconsent-optin-preferences,.cookieconsent-optin-statistics,.cookieconsent-optin-marketing{display:block;display:initial;}.cookieconsent-optout-preferences,.cookieconsent-optout-statistics,.cookieconsent-optout-marketing,.cookieconsent-optout{display:none;}</style>
<iframe height="0" style={{visibility: 'hidden', display: 'none'}} width="0"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe>


<title>Cleaning Services Glasgow &amp; Edinburgh | Home Sweet Home</title>




<style>
          .invisible { visibility: hidden !important; }
        </style><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe>





<iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><style>
/* Custom UI Enhancements */
body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
.glass-nav {
background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(12px);
border-bottom: 1px solid rgba(229, 231, 235, 0.5);
}
.custom-input {
transition: all 0.2s;
}
.custom-input:focus {
box-shadow: 0 0 0 2px rgba(56, 140, 63, 0.2);
border-color: #388c3f;
}
/* Review Card Hover Effect */
.review-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
.review-card:hover { transform: translateY(-4px); box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1); }
.tab-active { background-color: #388c3f; color: white; }
.tab-inactive { color: #6b7280; background-color: transparent; }
.tab-inactive:hover { background-color: #f3f4f6; color: #1f2937; }
</style>
<style id="all-fonts-style-font-geist">.font-geist { font-family: 'Geist', sans-serif !important; }</style><style id="all-fonts-style-font-roboto">.font-roboto { font-family: 'Roboto', sans-serif !important; }</style><style id="all-fonts-style-font-montserrat">.font-montserrat { font-family: 'Montserrat', sans-serif !important; }</style><style id="all-fonts-style-font-poppins">.font-poppins { font-family: 'Poppins', sans-serif !important; }</style><style id="all-fonts-style-font-playfair">.font-playfair { font-family: 'Playfair Display', serif !important; }</style><style id="all-fonts-style-font-instrument-serif">.font-instrument-serif { font-family: 'Instrument Serif', serif !important; }</style><style id="all-fonts-style-font-merriweather">.font-merriweather { font-family: 'Merriweather', serif !important; }</style><style id="all-fonts-style-font-bricolage">.font-bricolage { font-family: 'Bricolage Grotesque', sans-serif !important; }</style><style id="all-fonts-style-font-jakarta">.font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif !important; }</style><style id="all-fonts-style-font-manrope">.font-manrope { font-family: 'Manrope', sans-serif !important; }</style><style id="all-fonts-style-font-space-grotesk">.font-space-grotesk { font-family: 'Space Grotesk', sans-serif !important; }</style><style id="all-fonts-style-font-work-sans">.font-work-sans { font-family: 'Work Sans', sans-serif !important; }</style><style id="all-fonts-style-font-pt-serif">.font-pt-serif { font-family: 'PT Serif', serif !important; }</style><style id="all-fonts-style-font-geist-mono">.font-geist-mono { font-family: 'Geist Mono', monospace !important; }</style><style id="all-fonts-style-font-space-mono">.font-space-mono { font-family: 'Space Mono', monospace !important; }</style><style id="all-fonts-style-font-quicksand">.font-quicksand { font-family: 'Quicksand', sans-serif !important; }</style><style id="all-fonts-style-font-nunito">.font-nunito { font-family: 'Nunito', sans-serif !important; }</style><style id="all-fonts-style-font-newsreader">.font-newsreader { font-family: 'Newsreader', serif !important; }</style><style id="all-fonts-style-font-google-sans-flex">.font-google-sans-flex { font-family: 'Google Sans Flex', sans-serif !important; }</style><style id="all-fonts-style-font-oswald">.font-oswald { font-family: 'Oswald', sans-serif !important; }</style><style id="all-fonts-style-font-dm-sans">.font-dm-sans { font-family: 'DM Sans', sans-serif !important; }</style><style id="all-fonts-style-font-cormorant">.font-cormorant { font-family: 'Cormorant Garamond', serif !important; }</style>
<style id="cms-loading-styles">
@keyframes cms-shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
.cms-loading {
  position: relative;
  color: transparent !important;
  background: linear-gradient(90deg, 
    rgba(128, 128, 128, 0.1) 25%, 
    rgba(128, 128, 128, 0.2) 50%, 
    rgba(128, 128, 128, 0.1) 75%
  );
  background-size: 200% 100%;
  animation: cms-shimmer 1.5s infinite;
  border-radius: 12px;
  min-height: 1em;
  min-width: 3em;
  overflow: hidden;
}
.cms-loading * {
  visibility: hidden !important;
}
.cms-loading img {
  opacity: 0 !important;
}
</style>
<iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" name="__uspapiLocator" role="presentation" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px', display: 'none'}} tabindex="-1" title="Blank"></iframe><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe>
<div className="bg-brand-green text-white py-2 px-4 md:hidden flex justify-between items-center text-xs font-medium">
<a className="flex items-center gap-2" href="tel:01413846649">
<svg aria-hidden="true" className="lucide lucide-phone" data-lucide="phone" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
            0141 384 6649
        </a>
<button className="text-white focus:outline-none" onclick="toggleMenu()">
<svg aria-hidden="true" className="lucide lucide-menu" data-lucide="menu" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

<nav className="glass-nav sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-6">
<a className="flex items-center gap-3 group" href="https://www.hshcleaning.co.uk/">
<div className="relative w-10 h-10">
<img alt="Home Sweet Home" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/07a2a7f1-21e3-4167-afb6-493f9378d263_800w.png"/>
</div>
<div className="flex flex-col justify-center">
<span className="font-semibold text-lg leading-tight tracking-tight text-brand-dark">Home Sweet Home<sup className="text-xs">®</sup></span>
</div>
</a>

<div className="hidden sm:flex bg-gray-100/80 p-1 rounded-lg border border-gray-200/50">
<a className="px-3 py-1 rounded-md text-xs font-semibold tracking-wide transition-all duration-200 tab-active shadow-sm" href="#glasgow" id="tab-glasgow" onclick="setActiveTab('glasgow')">GLASGOW</a>
<a className="px-3 py-1 rounded-md text-xs font-semibold tracking-wide transition-all duration-200 tab-inactive" href="#edinburgh" id="tab-edinburgh" onclick="setActiveTab('edinburgh')">EDINBURGH</a>
</div>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="hover:text-brand-green transition-colors text-sm font-medium text-gray-600" href="#services">Services</a>
<a className="hover:text-brand-green transition-colors text-sm font-medium text-gray-600" href="#glasgow">Reviews</a>
<div className="flex items-center gap-4 pl-4 border-l border-gray-200">
<div className="text-right hidden lg:block">
<p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Call Us</p>
<a className="text-brand-green hover:underline text-base font-semibold tracking-tight" href="tel:01413846649">0141 384 6649</a>
</div>
<a className="bg-brand-pink hover:bg-opacity-90 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5" href="#quote">
                        Get a Quote
                    </a>
</div>
</div>
</div>

<div className="hidden md:hidden bg-white border-b border-gray-100 absolute w-full left-0 top-full shadow-lg" id="mobile-menu">
<div className="flex flex-col p-4 space-y-4">
<div className="flex gap-2 p-2 bg-gray-50 rounded-lg mb-2">
<a className="flex-1 text-center py-2 bg-white shadow-sm rounded-md text-xs font-bold text-brand-green" href="#glasgow">GLASGOW</a>
<a className="flex-1 text-center py-2 text-xs font-bold text-gray-500" href="#edinburgh">EDINBURGH</a>
</div>
<a className="text-base font-medium text-gray-700" href="#services">Services</a>
<a className="text-base font-medium text-gray-700" href="#reviews">Reviews</a>
<a className="text-base font-medium text-brand-pink" href="#quote">Get a Quote</a>
</div>
</div>
</nav>

<section className="lg:pt-24 lg:pb-32 overflow-hidden pt-12 pb-20 relative">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-lightgreen/30 via-transparent to-transparent"></div>
<div className="grid lg:grid-cols-2 gap-12 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-12 gap-y-12 items-center">

<div className="animate-slide-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lightgreen/50 border border-brand-green/20 mb-6">
<span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
<span className="text-xs font-medium text-brand-green uppercase tracking-wide">Serving Glasgow &amp; Edinburgh</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold text-brand-dark tracking-tight leading-[1.1] mb-6">
                    Cleaning Services <br/>
<span className="text-brand-pink">Scotland.</span>
</h1>
<p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg font-light">
                    Home Sweet Home is a family-run cleaning company. We provide reliable, friendly, and fully vetted cleaners for regular or one-off cleans across Glasgow and Edinburgh.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
<svg aria-hidden="true" className="lucide lucide-badge-check w-5 h-5" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-gray-900">Vetted Staff</span>
<span className="text-xs text-gray-500">Interviewed &amp; Insured</span>
</div>
</div>
<div className="w-px h-10 bg-gray-200 hidden sm:block"></div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
<svg aria-hidden="true" className="lucide lucide-wallet w-5 h-5" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-gray-900">From £13.50/hr</span>
<span className="text-xs text-gray-500">Regular Cleaning</span>
</div>
</div>
</div>
<div className="flex gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-brand-green hover:bg-brand-green/90 transition-all" href="#glasgow">
                        View Glasgow
                    </a>
<a className="inline-flex items-center justify-center hover:bg-gray-50 transition-all text-sm font-medium text-gray-700 bg-white border-gray-200 border rounded-lg pt-3 pr-6 pb-3 pl-6" href="#edinburgh">
                        View Edinburgh
                    </a>
</div>
</div>

<div className="animate-slide-up relative" id="quote" style={{animationDelay: '0.2s'}}>
<div className="-inset-1 bg-gradient-to-r from-brand-green to-brand-lightgreen opacity-20 rounded-2xl absolute blur"></div>
<div className="sm:p-8 bg-white border-gray-100 border rounded-xl pt-6 pr-6 pb-6 pl-6 relative shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
<div className="mb-6 text-center sm:text-left">
<h3 className="text-brand-dark text-xl font-semibold tracking-tight mb-2">Get in touch</h3>
<p className="leading-relaxed text-sm font-light text-gray-500">Select the relevant email address for your area to contact us directly.</p>
</div>
<div className="space-y-3">

<a className="flex items-center gap-4 p-4 rounded-lg border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-brand-green/30 hover:shadow-md transition-all group" href="mailto:enquiries@hshcleaning.co.uk">
<div className="bg-brand-lightgreen/20 text-brand-green p-2.5 rounded-full group-hover:scale-110 transition-transform shrink-0">
<svg className="lucide lucide-mail" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path></svg>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-semibold text-gray-900 truncate">Edinburgh (Central/East)</h4>
<p className="text-xs text-brand-green group-hover:underline truncate">enquiries@hshcleaning.co.uk</p>
</div>
<svg className="lucide lucide-chevron-right text-gray-300 group-hover:text-brand-green transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>

<a className="flex items-center gap-4 p-4 rounded-lg border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-brand-green/30 hover:shadow-md transition-all group" href="mailto:info@hshcleaning.co.uk">
<div className="bg-brand-lightgreen/20 text-brand-green p-2.5 rounded-full group-hover:scale-110 transition-transform shrink-0">
<svg className="lucide lucide-mail" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path></svg>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-semibold text-gray-900 truncate">Edinburgh (South/West)</h4>
<p className="text-xs text-brand-green group-hover:underline truncate">info@hshcleaning.co.uk</p>
</div>
<svg className="lucide lucide-chevron-right text-gray-300 group-hover:text-brand-green transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>

<a className="flex items-center gap-4 p-4 rounded-lg border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-brand-green/30 hover:shadow-md transition-all group" href="mailto:glasgownorth@hshcleaning.co.uk">
<div className="bg-brand-lightgreen/20 text-brand-green p-2.5 rounded-full group-hover:scale-110 transition-transform shrink-0">
<svg className="lucide lucide-mail" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path></svg>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-semibold text-gray-900 truncate">Glasgow North</h4>
<p className="text-xs text-brand-green group-hover:underline truncate">glasgownorth@hshcleaning.co.uk</p>
</div>
<svg className="lucide lucide-chevron-right text-gray-300 group-hover:text-brand-green transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>

<a className="flex items-center gap-4 p-4 rounded-lg border border-gray-100 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all group" href="mailto:dan@hshcleaning.co.uk">
<div className="bg-gray-100 text-gray-500 p-2.5 rounded-full group-hover:scale-110 transition-transform shrink-0">
<svg className="lucide lucide-shield-alert" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-semibold text-gray-700 truncate">General / Privacy</h4>
<p className="text-xs text-gray-500 group-hover:text-gray-900 group-hover:underline truncate">dan@hshcleaning.co.uk</p>
</div>
<svg className="lucide lucide-chevron-right text-gray-200 group-hover:text-gray-400 transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 border-gray-200 border-t pt-20 pb-20" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-green/30 transition-all group">
<div className="w-12 h-12 bg-brand-lightgreen/30 text-brand-green rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="lucide lucide-sparkles w-6 h-6" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">Regular Domestic Cleaning</h3>
<p className="text-sm text-gray-600 mb-6 leading-relaxed">
                        Find a professional and reliable weekly or fortnightly cleaner for your home.
                    </p>
<a className="text-brand-green flex items-center gap-1 group-hover:gap-2 transition-all text-sm font-semibold" href="#quote">
    Get a quote <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-green/30 transition-all group">
<div className="w-12 h-12 bg-brand-pink/10 text-brand-pink rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="lucide lucide-home w-6 h-6" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">End of Tenancy &amp; Deep Cleans</h3>
<p className="text-sm text-gray-600 mb-6 leading-relaxed">
                        Moving out? We provide thorough deep cleaning services to help you secure your deposit.
                    </p>
<a className="text-brand-pink flex items-center gap-1 group-hover:gap-2 transition-all text-sm font-semibold" href="#glasgow">
    View Details <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-green/30 transition-all group">
<div className="w-12 h-12 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="lucide lucide-users w-6 h-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">Friendly Agency Service</h3>
<p className="text-sm text-gray-600 mb-6 leading-relaxed">
                        See what our lovely customers are saying about us! Rated 5/5 stars on local reviews.
                    </p>
<a className="flex items-center gap-1 group-hover:gap-2 transition-all text-sm font-semibold text-gray-900" href="#reviews">
                        Read Reviews <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section><section className="py-24 bg-white border-t border-gray-200 relative overflow-hidden" id="about-us">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-lightgreen/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative">

<div className="mb-16 md:w-2/3">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lightgreen/30 border border-brand-green/20 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
</span>
<span className="text-xs font-semibold text-brand-green uppercase tracking-wide">Our Story</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-brand-dark tracking-tight mb-4">About Us</h2>
<p className="text-lg text-gray-500 font-light max-w-2xl">
                Reliable, affordable, and ethical cleaning services for your peace of mind.
            </p>
</div>
<div className="grid lg:grid-cols-2 gap-16 items-start">

<div className="space-y-8">
<div className="">
<h3 className="text-xl font-medium text-gray-900 mb-4 tracking-tight flex items-center gap-2">
<svg className="lucide lucide-map-pin text-brand-pink" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        Based in Dennistoun, Glasgow
                    </h3>
<div className="prose prose-gray text-gray-600 leading-relaxed font-light space-y-4">
<p className="">
                            Home Sweet Home was founded by Ross and Ana with a simple mission: to provide a cleaning service that is as reliable as it is affordable. Living and working in the area, we saw a need for a local service that truly cares about the community in the North of Glasgow.
                        </p>
<p className="">
                            We pride ourselves on our ethical approach. We believe that by treating our cleaners fairly—ensuring they are vetted, insured, and paid a wage that reflects their hard work—we create a better experience for our customers. When you choose us, you're choosing a family-run business that values integrity and quality above all else.
                        </p>
</div>
</div>

<div className="bg-gray-50 border-l-4 border-brand-green p-8 rounded-r-2xl relative group hover:bg-brand-lightgreen/10 transition-colors duration-300">
<svg className="absolute top-6 left-6 text-brand-green/20 w-12 h-12 transform -translate-x-2 -translate-y-2 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewbox="0 0 24 24"><path className="" d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg>
<blockquote className="relative z-10 text-lg font-medium text-brand-dark italic mb-6 leading-relaxed pt-2 pl-2">
                        "Supplying a cleaning service to residents across the North of Glasgow is very fulfilling…"
                    </blockquote>
<div className="flex items-center gap-4 pl-2">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-green to-brand-lightgreen text-white flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">RA</div>
<div className="">
<div className="text-sm font-semibold text-gray-900">Ross Archibald</div>
<div className="text-xs text-brand-green font-medium uppercase tracking-wide">Managing Director</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-1 shadow-xl shadow-brand-green/5 border border-gray-100">
<div className="bg-gray-50/50 rounded-[1.4rem] p-8 md:p-10 h-full">
<h3 className="text-xl font-semibold text-brand-dark mb-8 flex items-center gap-3">
<span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-green text-white shadow-sm">
<svg className="lucide lucide-sparkles" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</span>
                        Why Choose Us?
                    </h3>
<ul className="space-y-4 mb-10">

<li className="flex items-start gap-3 group">
<div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand-lightgreen/40 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors duration-200">
<svg className="lucide lucide-check" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-gray-700 text-sm font-medium">Weekly or fortnightly cleaning</span>
</li>

<li className="flex items-start gap-3 group">
<div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand-lightgreen/40 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors duration-200">
<svg className="lucide lucide-check" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-gray-700 text-sm font-medium">Flexible hours</span>
</li>

<li className="flex items-start gap-3 group">
<div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand-lightgreen/40 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors duration-200">
<svg className="lucide lucide-check" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-gray-700 text-sm font-medium">Ironing included at no extra cost</span>
</li>

<li className="flex items-start gap-3 group">
<div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand-lightgreen/40 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors duration-200">
<svg className="lucide lucide-check" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-gray-700 text-sm font-medium">Fully vetted and insured cleaners</span>
</li>

<li className="flex items-start gap-3 group">
<div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand-lightgreen/40 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors duration-200">
<svg className="lucide lucide-check" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-gray-700 text-sm font-medium">Cleaning schedules tailored to lifestyle</span>
</li>



</ul>
<div className="pt-8 border-t border-gray-200/60 text-center">
<p className="font-serif italic text-xl text-brand-green/90 leading-normal">
                            "Health is Happiness, Happiness is a Clean Home"
                        </p>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="bg-white border-gray-200 border-t pt-24 pb-24" id="edinburgh">
<div className="max-w-7xl mx-auto px-6">

<div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24">

<div className="lg:col-span-7 space-y-8">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lightgreen/30 border border-brand-green/20 mb-6">
<svg className="lucide lucide-map-pin text-brand-green" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-xs font-semibold text-brand-green uppercase tracking-wide">Edinburgh Cleaning Services</span>
</div>
<h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight mb-6">Edinburgh's friendliest &amp; most reliable cleaning agency!</h2>
<p className="text-xl text-gray-500 font-light leading-relaxed">A friendly, local cleaning agency with a passion for customer service. We have operated locally in Edinburgh since 2004.</p>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-green/20 transition-colors">
<svg className="lucide lucide-shield-check text-brand-green mb-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
<h4 className="font-semibold text-gray-900 mb-2"><svg className="lucide lucide-sparkles text-brand-pink" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg> Why choose us in Edinburgh?</h4>
<p className="text-sm text-gray-600">Every cleaner is interviewed face-to-face and fully insured by us for your peace of mind.</p>
</div>
<div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-green/20 transition-colors">
<svg className="lucide lucide-coins text-brand-green mb-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
<h4 className="font-semibold text-gray-900 mb-2">Fair Pay Promise</h4>
<p className="text-sm text-gray-600">We ensure our customers always pay cleaners above the National Living Wage.</p>
</div>
</div>
<div className="space-y-4">
<h4 className="font-semibold text-gray-900 flex items-center gap-2">
<svg className="lucide lucide-sparkles text-brand-pink" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                        Why choose us in Glasgow?
                    </h4>
<ul className="grid sm:grid-cols-2 gap-3">
<li className="flex items-center gap-3 text-sm text-gray-600">
<div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
                            Regular weekly or fortnightly cleaning
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
                            Ironing included in the price
                        </li>
</ul>
</div>
<div className="pt-4">
<a className="inline-flex items-center gap-2 bg-brand-pink hover:bg-opacity-90 text-white font-medium px-8 py-4 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5" href="https://home-sweet-home.typeform.com/to/OGssQo" target="_blank">
                        Launch Membership Form <svg className="lucide lucide-arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="lg:col-span-5 space-y-8">

<div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-brand-lightgreen/20 rounded-bl-full -mr-10 -mt-10"></div>
<div className="flex items-center justify-between mb-6">
<div className="flex gap-1 text-yellow-400">
<svg fill="currentColor" height="18" stroke="none" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg fill="currentColor" height="18" stroke="none" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg fill="currentColor" height="18" stroke="none" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="" fill="currentColor" height="18" stroke="none" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="" fill="currentColor" height="18" stroke="none" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<span className="text-xs font-semibold text-brand-green bg-brand-green/10 px-2 py-1 rounded">Verified</span>
</div>
<blockquote className="text-lg font-medium text-gray-900 leading-relaxed mb-6">"We have been using Home Sweet Home for years in Edinburgh and the service is always impeccable."</blockquote>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold">A</div>
<div>
<div className="font-semibold text-gray-900 text-sm">Sarah</div>
<div className="text-xs text-gray-500">Leith • Regular Client</div>
</div>
</div>
</div>

<div className="bg-brand-dark rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
<h4 className="text-lg font-semibold mb-6 relative z-10">How it works</h4>
<div className="space-y-6 relative z-10">
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center text-xs font-bold shrink-0">1</div>
<div className="w-px h-full bg-white/10 my-2"></div>
</div>
<div className="pb-6">
<h5 className="font-semibold text-sm mb-1">Request a Quote</h5>
<p className="text-xs text-gray-400 leading-relaxed">Fill out our quick form or give us a call.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold shrink-0">2</div>
<div className="w-px h-full bg-white/10 my-2"></div>
</div>
<div className="pb-6">
<h5 className="font-semibold text-sm mb-1">We Confirm Details</h5>
<p className="text-xs text-gray-400 leading-relaxed">Ana or Ross will discuss your specific needs.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold shrink-0">3</div>
</div>
<div>
<h5 className="font-semibold text-sm mb-1">Cleaning Starts</h5>
<p className="text-xs text-gray-400 leading-relaxed">Your vetted cleaner starts at a time that suits you.</p>
</div>
</div>
</div>
</div>
</div>
</div>

</div>
</section><section className="bg-white border-gray-200 border-t pt-24 pb-24" id="glasgow">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid lg:grid-cols-2 gap-16 items-start">

<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lightgreen/30 border border-brand-green/20 mb-6">
<svg aria-hidden="true" className="lucide lucide-map-pin w-3 h-3 text-brand-green" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-xs font-semibold text-brand-green uppercase tracking-wide">Glasgow – North Cleaning Services</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-4">Glasgow's friendliest &amp; most reliable cleaning agency!</h2>
<p className="text-lg text-gray-500 font-light mb-8">
                        A friendly, local cleaning agency with a passion for customer service.
                    </p>
<div className="space-y-6 text-gray-600 leading-relaxed font-light mb-8">
<p className="">
                            Home Sweet Home is a small, family-run cleaning company covering areas around the West, East and City Centre of Glasgow. We have operated locally in Glasgow since 2014. Over the years, our reliable and friendly service has helped hundreds of customers and cleaners alike.
                        </p>
<p className="">
                            We can carry out either weekly or bi weekly regular cleaning, or one-off/end of tenancy cleans. Our regular house cleaning service starts at just  and, as a customer, you would benefit from a fully insured and vetted cleaner who has been reference checked and interviewed by our staff.
                        </p>
<p className="">
                            We made a promise to ensure our customers always pay our cleaners above the National Living Wage – our minimum rate is currently set to .
                        </p>
</div>
<div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mb-10">
<h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-sparkles w-5 h-5 text-brand-pink" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                            Why choose us in Glasgow?
                        </h4>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-gray-600">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-5 h-5 text-brand-green shrink-0" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="">Regular weekly or fortnightly cleaning</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-5 h-5 text-brand-green shrink-0" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="">Ironing included in the price</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-5 h-5 text-brand-green shrink-0" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="">Discounts available for students, the elderly and infirm</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-5 h-5 text-brand-green shrink-0" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="">Cleaners are fully vetted face to face and insured by us</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-5 h-5 text-brand-green shrink-0" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="">Cleaner sickness and holidays covered</span>
</li>
</ul>
</div>
<a className="inline-flex items-center gap-2 bg-brand-pink hover:bg-opacity-90 text-white font-medium px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5" href="https://home-sweet-home.typeform.com/to/OGssQo" target="_blank">
                        Launch Membership Form <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="order-1 lg:order-2 space-y-8">

<div className="flex flex-col gap-6">

<div className="overflow-hidden bg-white border-gray-100 border rounded-2xl p-8 relative shadow-lg group hover:shadow-xl transition-shadow duration-300">
<div className="absolute top-0 right-0 w-24 h-24 bg-brand-lightgreen/20 rounded-bl-full"></div>
<div className="flex gap-1 text-yellow-400 mb-4">
<svg className="lucide lucide-star w-4 h-4" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="leading-relaxed text-lg italic text-gray-700 font-serif mb-6">
            "Wioletta has been reliable, friendly and carries out a very thorough clean every week. We could not be happier. 5 stars."
        </p>
<div className="flex items-center gap-3 border-t border-gray-100 pt-4">
<div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green font-semibold">A</div>
<div className="">
<p className="text-sm font-semibold text-gray-900">Allison, Milngavie</p>
<p className="text-xs text-gray-500">Very happy with Gosia!</p>
</div>
</div>
</div>

<div className="flex justify-center" id="glasgow-reviews-btn-container">
<button className="group flex hover:text-brand-green hover:border-brand-green/30 hover:shadow-md transition-all text-sm font-semibold text-gray-600 bg-white border-gray-200 border rounded-full pt-2.5 pr-6 pb-2.5 pl-6 gap-x-2 gap-y-2 items-center" onclick="document.getElementById('glasgow-more-reviews').classList.remove('hidden'); document.getElementById('glasgow-reviews-btn-container').classList.add('hidden');">
            See more
            <svg className="lucide lucide-chevron-down transition-transform group-hover:translate-y-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9 6 6 6-6"></path></svg>
</button>
</div>

<div className="hidden flex flex-col gap-6 animate-fade-in" id="glasgow-more-reviews">

<div className="overflow-hidden bg-white border-gray-100 border rounded-2xl p-8 relative shadow-lg group hover:shadow-xl transition-shadow duration-300">
<div className="absolute top-0 right-0 w-24 h-24 bg-brand-pink/10 rounded-bl-full"></div>
<div className="flex gap-1 text-yellow-400 mb-4">
<svg className="lucide lucide-star w-4 h-4" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="leading-relaxed text-lg italic text-gray-700 font-serif mb-6">
                "Agata has been cleaning for us for 6 months. She is thorough, polite and always on time. It is a pleasure to come home to a clean house."
            </p>
<div className="flex items-center gap-3 border-t border-gray-100 pt-4">
<div className="w-10 h-10 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink font-semibold">J</div>
<div>
<p className="text-sm font-semibold text-gray-900">James, West End</p>
<p className="text-xs text-gray-500">Delighted with the service</p>
</div>
</div>
</div>

<div className="overflow-hidden bg-white border-gray-100 border rounded-2xl p-8 relative shadow-lg group hover:shadow-xl transition-shadow duration-300">
<div className="absolute top-0 right-0 w-24 h-24 bg-brand-lightgreen/20 rounded-bl-full"></div>
<div className="flex gap-1 text-yellow-400 mb-4">
<svg className="lucide lucide-star w-4 h-4" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="leading-relaxed text-lg italic text-gray-700 font-serif mb-6">
                "Great communication from the office and our cleaner is fantastic. Would definitely recommend Home Sweet Home to anyone in Glasgow."
            </p>
<div className="flex items-center gap-3 border-t border-gray-100 pt-4">
<div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green font-semibold">S</div>
<div>
<p className="text-sm font-semibold text-gray-900">Sarah, Southside</p>
<p className="text-xs text-gray-500">Highly recommended</p>
</div>
</div>
</div>

<div className="overflow-hidden bg-white border-gray-100 border rounded-2xl p-8 relative shadow-lg group hover:shadow-xl transition-shadow duration-300">
<div className="absolute top-0 right-0 w-24 h-24 bg-brand-pink/10 rounded-bl-full"></div>
<div className="flex gap-1 text-yellow-400 mb-4">
<svg className="lucide lucide-star w-4 h-4" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="leading-relaxed text-lg italic text-gray-700 font-serif mb-6">
                "Very happy with the service. The setup process was easy and the cleaning standard is excellent."
            </p>
<div className="flex items-center gap-3 border-t border-gray-100 pt-4">
<div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green font-semibold">D</div>
<div>
<p className="text-sm font-semibold text-gray-900">David, Dennistoun</p>
<p className="text-xs text-gray-500">Regular weekly clean</p>
</div>
</div>
</div>

<div className="flex justify-center pt-2">
<button className="group flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-600 hover:text-brand-pink hover:border-brand-pink/30 hover:shadow-md transition-all" onclick="document.getElementById('glasgow-more-reviews').classList.add('hidden'); document.getElementById('glasgow-reviews-btn-container').classList.remove('hidden');">
                See less
                <svg className="lucide lucide-chevron-up transition-transform group-hover:-translate-y-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
</button>
</div>
</div>
</div>

<div className="bg-brand-dark text-white p-8 rounded-2xl shadow-lg relative">
<h4 className="text-lg font-semibold mb-6">Getting Started is Easy</h4>
<ol className="relative border-l border-gray-600 ml-3 space-y-6">
<li className="mb-2 ml-6">
<span className="absolute flex items-center justify-center w-6 h-6 bg-brand-green rounded-full -left-3 ring-4 ring-gray-700">
<span className="text-xs font-bold">1</span>
</span>
<h5 className="text-sm font-semibold mb-1 cursor-pointer hover:text-brand-green transition-colors" onclick="window.scrollTo({ top: 0, behavior: 'smooth' })">Request a Quote</h5>
<p className="text-xs text-gray-400">Message us or complete the membership form in 10 mins.</p>
</li>
<li className="mb-2 ml-6">
<span className="absolute flex items-center justify-center w-6 h-6 bg-gray-600 rounded-full -left-3 ring-4 ring-gray-700">
<span className="text-xs font-bold">2</span>
</span>
<h5 className="text-sm font-semibold mb-1">Confirmation</h5>
<p className="text-xs text-gray-400">Ana or Ross will confirm requirements and pricing.</p>
</li>
<li className="ml-6">
<span className="absolute flex items-center justify-center w-6 h-6 bg-gray-600 rounded-full -left-3 ring-4 ring-gray-700">
<span className="text-xs font-bold">3</span>
</span>
<h5 className="text-sm font-semibold mb-1">Start Cleaning</h5>
<p className="text-xs text-gray-400">We organise a professional cleaner to start ASAP.</p>
</li>
</ol>
<p className="mt-8 text-center font-serif italic text-white/60">"Health is happiness, happiness is a clean home!"</p>
</div>
</div>
</div>

<div className="h-px bg-gray-100 w-full mt-24 mb-24"></div>
<div className="max-w-4xl mx-auto">
<div className="text-center mb-12">
<div className="w-full mr-auto ml-auto">
<h3 className="text-3xl font-semibold text-gray-900 tracking-tight mb-8 text-center">Service &amp; Pricing Comparison</h3>
<div className="grid md:grid-cols-2 gap-6 text-left">

<div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
<div className="absolute top-0 right-0 w-24 h-24 bg-[#388c3f]/5 rounded-bl-[4rem] -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
<div className="relative">
<div className="flex items-center gap-2 mb-4">
<span className="bg-[#388c3f]/10 text-[#388c3f] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Glasgow</span>
</div>
<div className="flex items-baseline gap-1 mb-1">
<span className="text-sm text-gray-500 font-medium">From</span>
<span className="text-2xl font-bold text-gray-900">£13.50</span>
<span className="text-sm text-gray-500">/hour</span>
</div>
<p className="text-xs text-gray-400 mb-5 font-medium">Domestic &amp; Commercial</p>
<ul className="space-y-3 mb-6">
<li className="flex items-start gap-3 text-sm text-gray-600">
<svg aria-hidden="true" className="lucide lucide-map-pin w-4 h-4 text-[#388c3f] shrink-0 mt-0.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="leading-tight">North, West, East &amp; City Centre</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<svg aria-hidden="true" className="lucide lucide-building-2 w-4 h-4 text-[#388c3f] shrink-0 mt-0.5" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
<span className="leading-tight">Commercial &amp; Office Cleaning available</span>
</li>
</ul>
<div className="pt-4 border-t border-gray-100">
<a className="flex items-center gap-2 text-sm font-semibold text-[#388c3f] hover:text-[#2d7032] transition-colors" href="tel:01413846649">
<svg aria-hidden="true" className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                        0141 384 6649
                    </a>
<span className="text-[10px] text-gray-400 mt-1 block">Commercial enquiries by phone only</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
<div className="absolute top-0 right-0 w-24 h-24 bg-[#e37188]/5 rounded-bl-[4rem] -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
<div className="relative">
<div className="flex items-center gap-2 mb-4">
<span className="bg-[#e37188]/10 text-[#e37188] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Edinburgh</span>
</div>
<div className="flex items-baseline gap-1 mb-1">
<span className="text-sm text-gray-500 font-medium">From</span>
<span className="text-2xl font-bold text-gray-900">£14.50</span>
<span className="text-sm text-gray-500">/hour</span>
</div>
<p className="text-xs text-gray-400 mb-5 font-medium">Domestic Focus Only</p>
<ul className="space-y-3 mb-6">
<li className="flex items-start gap-3 text-sm text-gray-600">
<svg aria-hidden="true" className="lucide lucide-map-pin w-4 h-4 text-[#e37188] shrink-0 mt-0.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="leading-tight">Leith, New Town, Southside, Bruntsfield &amp; more</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<svg aria-hidden="true" className="lucide lucide-history w-4 h-4 text-[#e37188] shrink-0 mt-0.5" data-lucide="history" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
<span className="leading-tight">Established 2004 (20+ years exp)</span>
</li>
</ul>
<div className="pt-4 border-t border-gray-100">
<a className="flex items-center gap-2 text-sm font-semibold text-[#e37188] hover:text-[#d65d76] transition-colors" href="tel:01314763276">
<svg aria-hidden="true" className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                        0131 476 3276
                    </a>
<span className="text-[10px] text-gray-400 mt-1 block">Local Edinburgh office support</span>
</div>
</div>
</div>
</div>
</div>
<p className="text-gray-500 font-light">Comprehensive cleaning solutions for every need across North, West, East &amp; City Centre.</p>
</div>
<div className="space-y-4">

<details className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200 hover:border-brand-green/30">
<summary className="flex items-center gap-4 p-6 cursor-pointer list-none select-none">
<div className="w-12 h-12 rounded-xl bg-brand-lightgreen/20 flex items-center justify-center text-brand-green shrink-0 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="flex-1 text-left">
<h4 className="font-semibold text-gray-900 text-lg">Regular Domestic Cleaning</h4>
<p className="text-sm text-gray-500 mt-0.5">Reliable weekly or fortnightly visits from the same vetted professional.</p>
</div>
<svg className="lucide lucide-chevron-down transform group-open:rotate-180 transition-transform duration-200 text-gray-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-8 pt-0 pl-[5.5rem] border-t border-transparent group-open:border-gray-50">
<ul className="space-y-3 mb-6 grid sm:grid-cols-2 gap-x-8">
<li className="flex items-center gap-2.5 text-sm text-gray-600">
<svg className="lucide lucide-check text-brand-green shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Same cleaner every visit
                                </li>
<li className="flex items-center gap-2.5 text-sm text-gray-600">
<svg className="lucide lucide-check text-brand-green shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Fully insured &amp; vetted cleaners
                                </li>
</ul>
<a className="inline-flex items-center text-sm font-semibold text-brand-green hover:text-brand-dark transition-colors bg-brand-green/10 px-4 py-2 rounded-lg hover:bg-brand-green/20" href="https://home-sweet-home.typeform.com/to/OGssQo" target="_blank">
                                Get a Quote <svg className="lucide lucide-arrow-right ml-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</details>

<details className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200 hover:border-brand-pink/30">
<summary className="flex items-center gap-4 p-6 cursor-pointer list-none select-none">
<div className="w-12 h-12 rounded-xl bg-brand-pink/10 flex items-center justify-center text-brand-pink shrink-0 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-spray-can" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h.01"></path><path d="M7 5h.01"></path><path d="M11 7h.01"></path><path d="M3 7h.01"></path><path d="M7 9h.01"></path><path d="M3 11h.01"></path><rect height="4" rx="1" width="4" x="15" y="5"></rect><path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"></path><path d="m13 14 8-2"></path><path d="m13 19 8-2"></path></svg>
</div>
<div className="flex-1 text-left">
<h4 className="font-semibold text-gray-900 text-lg">Deep / One-Off Cleaning</h4>
<p className="text-sm text-gray-500 mt-0.5">Thorough deep clean to refresh your home, perfect for spring cleaning.</p>
</div>
<svg className="lucide lucide-chevron-down transform group-open:rotate-180 transition-transform duration-200 text-gray-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-8 pt-0 pl-[5.5rem] border-t border-transparent group-open:border-gray-50">
<ul className="space-y-3 mb-6 grid sm:grid-cols-2 gap-x-8">
<li className="flex items-center gap-2.5 text-sm text-gray-600">
<svg className="lucide lucide-check text-brand-pink shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Comprehensive deep clean
                                </li>
<li className="flex items-center gap-2.5 text-sm text-gray-600">
<svg className="lucide lucide-check text-brand-pink shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Tailored to your specific requirements
                                </li>
</ul>
<a className="inline-flex items-center text-sm font-semibold text-brand-pink hover:text-brand-dark transition-colors bg-brand-pink/10 px-4 py-2 rounded-lg hover:bg-brand-pink/20" href="https://home-sweet-home.typeform.com/to/OGssQo" target="_blank">
                                Book a Deep Clean <svg className="lucide lucide-arrow-right ml-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</details>

<details className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200 hover:border-gray-300">
<summary className="flex items-center gap-4 p-6 cursor-pointer list-none select-none">
<div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 shrink-0 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
</div>
<div className="flex-1 text-left">
<h4 className="font-semibold text-gray-900 text-lg">End of Tenancy Cleaning</h4>
<p className="text-sm text-gray-500 mt-0.5">Professional move-out cleaning to help secure your deposit return.</p>
</div>
<svg className="lucide lucide-chevron-down transform group-open:rotate-180 transition-transform duration-200 text-gray-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-8 pt-0 pl-[5.5rem] border-t border-transparent group-open:border-gray-50">
<ul className="space-y-3 mb-6 grid sm:grid-cols-2 gap-x-8">
<li className="flex items-center gap-2.5 text-sm text-gray-600">
<svg className="lucide lucide-check text-gray-400 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Deep clean of all areas
                                </li>
<li className="flex items-center gap-2.5 text-sm text-gray-600">
<svg className="lucide lucide-check text-gray-400 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Oven cleaning options available
                                </li>
</ul>
<a className="inline-flex items-center text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200" href="https://home-sweet-home.typeform.com/to/OGssQo" target="_blank">
                                Get a Quote <svg className="lucide lucide-arrow-right ml-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</details>

<details className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200 hover:border-gray-300">
<summary className="flex items-center gap-4 p-6 cursor-pointer list-none select-none">
<div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
</div>
<div className="flex-1 text-left">
<h4 className="font-semibold text-gray-900 text-lg">Commercial Cleaning</h4>
<p className="text-sm text-gray-500 mt-0.5">Reliable cleaning solutions for offices and commercial spaces in Glasgow.</p>
</div>
<svg className="lucide lucide-chevron-down transform group-open:rotate-180 transition-transform duration-200 w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(156, 163, 175)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-8 pt-0 pl-[5.5rem] border-t border-transparent group-open:border-gray-50">
<ul className="space-y-3 mb-6 grid sm:grid-cols-2 gap-x-8">
<li className="flex items-center gap-2.5 text-sm text-gray-600">
<svg className="lucide lucide-check text-gray-900 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Flexible contracts
                                </li>
<li className="flex items-center gap-2.5 text-sm text-gray-600">
<svg className="lucide lucide-check text-gray-900 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Fully insured staff
                                </li>
</ul>
<div className="flex items-center gap-3">
<span className="text-sm font-medium text-gray-500">Call for enquiries:</span>
<a className="inline-flex items-center text-sm font-bold text-gray-900 hover:text-brand-green transition-colors" href="tel:01413846649">
<svg className="lucide lucide-phone mr-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    0141 384 6649
                                </a>
</div>
</div>
</details>

<details className="group bg-brand-lightgreen/10 rounded-2xl border border-brand-green/20 overflow-hidden hover:shadow-md transition-all duration-200">
<summary className="flex items-center gap-4 p-6 cursor-pointer list-none select-none">
<div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<div className="flex-1 text-left">
<h4 className="font-semibold text-brand-dark text-lg">Membership Benefits</h4>
<p className="text-sm text-gray-600 mt-0.5">Exclusive benefits for our regular clients.</p>
</div>
<svg className="lucide lucide-chevron-down transform group-open:rotate-180 transition-transform duration-200 text-brand-green/60" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-8 pt-0 pl-[5.5rem] border-t border-transparent group-open:border-brand-green/10">
<ul className="space-y-3 mb-4 grid sm:grid-cols-2 gap-x-8">
<li className="flex items-center gap-2.5 text-sm text-gray-700">
<svg className="lucide lucide-check-circle-2 text-brand-green shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Cover for sickness and holidays
                                </li>
<li className="flex items-center gap-2.5 text-sm text-gray-700">
<svg className="lucide lucide-check-circle-2 text-brand-green shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Dedicated local account manager
                                </li>
</ul>
</div>
</details>
</div>
</div>
</div>
</section><section className="py-24 bg-white border-t border-gray-200" id="franchise-opportunity">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-16 max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lightgreen/30 border border-brand-green/20 mb-6">
<svg className="lucide lucide-briefcase text-brand-green" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
<span className="text-xs font-semibold text-brand-green uppercase tracking-wide">Business Opportunity</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-brand-dark tracking-tight mb-6">Become a Home Sweet Home Franchise Owner</h2>
<p className="text-lg text-gray-500 font-light">Join our successful network and run your own ethical, profitable cleaning management business in Scotland.</p>
</div>
<div className="grid lg:grid-cols-3 gap-12 xl:gap-16 gap-x-12 gap-y-12 items-start">

<div className="lg:col-span-2 space-y-16">

<div className="space-y-6 text-gray-600 leading-relaxed">
<h3 className="text-2xl font-semibold text-gray-900 tracking-tight">Home Sweet Home Need People to Occupy Scottish Territories</h3>
<p className="">Following the successful launch of Home Sweet Home in North Glasgow, and, of course 10 happy years serving Edinburgh households, we are looking for new franchisees. The successful applicants will be able to capitalise on the remaining territories in Scotland.</p>
<div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg my-6">
<p className="text-blue-900 font-medium">Prime locations available:</p>
<p className="text-sm text-blue-700 mt-1">Glasgow South, Glasgow East, Dundee, and Aberdeen. Please feel free to enquire about other areas too.</p>
</div>
<h4 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Advantages of investing in a Franchise</h4>
<ul className="space-y-3">
<li className="flex gap-3">
<svg className="lucide lucide-check-circle text-brand-green shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path className="" d="m9 11 3 3L22 4"></path></svg>
<span className="">We have conveniently put together everything you will need to run your business into one package.</span>
</li>
<li className="flex gap-3">
<svg className="lucide lucide-check-circle text-brand-green shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="">The franchise owners are based in Edinburgh, Scotland so no long distance relationships.</span>
</li>
<li className="flex gap-3">
<svg className="lucide lucide-check-circle text-brand-green shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
<span>Comprehensive training gives you the confidence to make money from day 1.</span>
</li>
<li className="flex gap-3">
<svg className="lucide lucide-check-circle text-brand-green shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
<span></span>
</li>
<li className="flex gap-3">
<svg className="lucide lucide-check-circle text-brand-green shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
<span>Work from home to keep costs very low and manage your work/life ratio easily.</span>
</li>
</ul>
<h4 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Who we are looking for:</h4>
<p className="mb-4">So, could you be the next Home Sweet Home franchise owner? We are looking for people who:</p>
<ul className="space-y-2 list-disc pl-5 marker:text-brand-green">
<li className="">Live in Scotland, preferably in Glasgow, Dundee or Aberdeen (other areas considered).</li>
<li className="">Are self-motivated and looking to run their own business.</li>
</ul>
<p className="font-medium text-gray-900 mt-4">If the answer is 'YES' then get in touch now. We’ll happily send you our prospectus and application form.</p>
<h4 className="text-lg font-semibold text-gray-900 mt-10 mb-4">About Us</h4>
<p className="">This franchise opportunity is the result of 10 years' hard work and the continuous development of our flagship business in Edinburgh. We are very serious about the quality of our franchises and to prove it we gained provisional membership to the bfa. Every detail has been scrutinised to offer the best cleaning franchise on the market.</p>
<p className="">What sets us apart is the dedication to exceptional customer service and giving our customers the feel good factor, backed by a strong brand and efficient working practices.</p>
<p>Created by husband and wife team Dan &amp; Cath Thornton from Leith: </p>
</div>

<div className="border-t border-gray-100 pt-10 space-y-6 text-gray-600 leading-relaxed">
<h3 className="text-2xl font-semibold text-gray-900 tracking-tight flex items-center gap-3">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 text-white text-sm">2</span>
                        Setting Up &amp; Launching
                    </h3>
<p className="">Setting up a Home Sweet Home franchise couldn't be easier. We supply absolutely everything you'll need to get your business up and running without exception. Once we have settled on your trading territory and signed the agreements, your new business could be up and running within a couple of weeks!</p>
<div className="grid sm:grid-cols-2 gap-6 mt-6">
<div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
<h5 className="font-semibold text-gray-900 mb-3">Setup Phase</h5>
<ul className="space-y-2 text-sm">
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div> Territory Mapping and Analysis</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div> Market Research &amp; Competitor Analysis</li>
</ul>
</div>
<div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
<h5 className="font-semibold text-gray-900 mb-3">Pre-Launch Plan</h5>
<ul className="space-y-2 text-sm">
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div> Completion of comprehensive training</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div> Equipment and stationery packages</li>
</ul>
</div>
</div>
<h4 className="text-lg font-semibold text-gray-900 mt-8">Ongoing Support</h4>
<p className="">You won't be left to fend for yourself. We are building a network of franchises who happily work together. We provide:</p>
<ul className="space-y-2 list-disc pl-5 marker:text-brand-pink">
<li>Continued support via phone calls, skype, remote access, emails and personal visits.</li>
<li>Any additional training required (daily contact during first few weeks).</li>
<li>Optional administrative support service.</li>
<li>Continuous monitoring of progress and performance.</li>
<li className="">Constructive recommendations to boost performance and profits.</li>
</ul>
</div>

<div className="border-t border-gray-100 pt-10">
<div className="bg-gray-900 text-white p-8 rounded-2xl relative overflow-hidden mb-10">
<div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
<svg className="w-10 h-10 text-brand-green mb-4 opacity-80" fill="currentColor" viewbox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg>
<blockquote className="text-xl md:text-2xl font-serif italic leading-relaxed relative z-10">
                            "Home Sweet Home is one of the very few cleaning franchises that can boast being both ethical and very profitable, normally it's one or the other!"
                        </blockquote>
</div>
<h3 className="text-2xl font-semibold text-gray-900 tracking-tight flex items-center gap-3 mb-6">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 text-white text-sm">3</span>
                        A Unique Opportunity
                    </h3>
<p className="text-gray-600 mb-6 leading-relaxed">The core of the business combines exceptional customer service with efficiency and moral business ethics. Our work to date has given us a great foundation. Here is why you should consider joining the Home Sweet Home network:</p>
<div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
<div className="flex gap-2 items-start">
<svg className="lucide lucide-check text-brand-green mt-1 shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-gray-700 text-sm">Control of your own low cost, low risk, profitable business</span>
</div>
<div className="flex gap-2 items-start">
<svg className="lucide lucide-check text-brand-green mt-1 shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-gray-700 text-sm">License to use our instantly recognisable brand</span>
</div>
<div className="flex gap-2 items-start">
<svg className="lucide lucide-check text-brand-green mt-1 shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-gray-700 text-sm">Large territories for best chance of success</span>
</div>
<div className="flex gap-2 items-start">
<svg className="lucide lucide-check text-brand-green mt-1 shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-gray-700 text-sm">Ethical business that customers appreciate</span>
</div>
<div className="flex gap-2 items-start">
<svg className="lucide lucide-check text-brand-green mt-1 shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-gray-700 text-sm">Sophisticated management software included</span>
</div>
<div className="flex gap-2 items-start">
<svg className="lucide lucide-check text-brand-green mt-1 shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-gray-700 text-sm">No previous cleaning experience needed</span>
</div>
</div>
<p className="text-gray-600 mb-6">If this is the kind of business you are looking for then please get in touch, we’d love to hear from you.</p>
<a className="inline-flex items-center gap-3 text-brand-green font-semibold hover:text-brand-dark transition-colors" href="tel:01314763276">
<span className="p-2 bg-brand-green/10 rounded-full">
<svg className="lucide lucide-phone" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</span>
                        Call Dan today on 0131 476 3276
                    </a>
</div>
</div>

<div className="lg:col-span-1">
<div className="md:p-8 sticky bg-white border-gray-100 border rounded-2xl pt-6 pr-6 pb-6 pl-6 top-24 shadow-xl">
<div className="mb-8">
<h3 className="text-xl font-semibold text-gray-900 tracking-tight">Enquire Now</h3>
<p className="text-sm text-gray-500 mt-2 font-light">Get our prospectus and application form directly via email.</p>
</div>
<div className="space-y-8">
<div className="bg-gray-50/80 p-5 rounded-xl border border-gray-100">
<p className="text-sm font-medium text-gray-900 mb-3 flex items-center gap-2">
<svg className="lucide lucide-info text-brand-green" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                    Please include the following:
                </p>
<ul className="text-sm text-gray-600 space-y-2">
<li className="flex items-start gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0"></span>
<span className="">Your full name &amp; contact number</span>
</li>
<li className="flex items-start gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0"></span>
<span>Current location / Address <span className="block text-xs text-gray-400 font-normal mt-0.5">and area you'd like to work in</span></span>
</li>
</ul>
</div>
<div className="space-y-3">
<a className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-white hover:border-brand-pink hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group" href="mailto:dan@hshcleaning.co.uk">
<div className="bg-brand-pink/10 text-brand-pink p-2.5 rounded-lg group-hover:bg-brand-pink group-hover:text-white transition-colors">
<svg className="lucide lucide-mail" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">Direct Enquiries</p>
<p className="text-sm font-semibold text-gray-900 group-hover:text-brand-pink transition-colors truncate">dan@hshcleaning.co.uk</p>
</div>
<svg className="lucide lucide-arrow-right text-gray-300 group-hover:text-brand-pink transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-white hover:border-brand-pink hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group" href="mailto:enquiries@hshcleaning.co.uk">
<div className="bg-brand-pink/10 text-brand-pink p-2.5 rounded-lg group-hover:bg-brand-pink group-hover:text-white transition-colors">
<svg className="lucide lucide-mail" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">General Info</p>
<p className="text-sm font-semibold text-gray-900 group-hover:text-brand-pink transition-colors truncate">enquiries@hshcleaning.co.uk</p>
</div>
<svg className="lucide lucide-arrow-right text-gray-300 group-hover:text-brand-pink transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section className="py-24 bg-gray-50 border-t border-gray-200" id="jobs">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-16 max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-pink/10 border border-brand-pink/20 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pink"></span>
</span>
<span className="text-xs font-semibold text-brand-pink uppercase tracking-wide">We are Hiring</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-brand-dark tracking-tight mb-6">Cleaning Jobs in Edinburgh</h2>
<p className="text-lg text-gray-500 font-light">Join our community of happy cleaners. Control your hours and earn a minimum of <span className="font-medium text-gray-900">£14.50 per hour</span>.</p>
</div>
<div className="grid lg:grid-cols-3 gap-12 xl:gap-16 items-start">

<div className="lg:col-span-2 space-y-12">

<div className="space-y-8">
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
<h3 className="text-2xl font-semibold text-gray-900 tracking-tight mb-4">Domestic Cleaners Wanted Now!</h3>
<p className="text-gray-600 leading-relaxed font-light mb-6">
                            Would you like to join a community of happy cleaners already working with Home Sweet Home in Edinburgh? Choose the hours you work and earn a minimum of . We have work available throughout Edinburgh.
                        </p>
<div className="grid sm:grid-cols-3 gap-4 border-t border-gray-100 pt-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
<svg className="lucide lucide-banknote" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
</div>
<div>
<p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Rate</p>
<p className="font-semibold text-gray-900">£14.50+ / hr</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
<svg className="lucide lucide-clock" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
<div>
<p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Schedule</p>
<p className="font-semibold text-gray-900">Flexible Hours</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
<svg className="lucide lucide-map-pin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div>
<p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Location</p>
<p className="font-semibold text-gray-900">Edinburgh Wide</p>
</div>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-8">
<div className="">
<h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
<svg className="lucide lucide-thumbs-up text-brand-pink" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
                            Benefits for You
                        </h4>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check text-brand-green shrink-0 mt-0.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-gray-600">Quick start with personal consultation</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check text-brand-green shrink-0 mt-0.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-gray-600">Full insurance coverage for peace of mind</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check text-brand-green shrink-0 mt-0.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-gray-600">Cash bonuses for 'Cleaner of the Month'</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check text-brand-green shrink-0 mt-0.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-gray-600">No uniform required - dress comfortably</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check text-brand-green shrink-0 mt-0.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-gray-600">Local office support always available</span>
</li>
</ul>
</div>
<div className="">
<h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
<svg className="lucide lucide-clipboard-check text-brand-pink" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
                            Requirements
                        </h4>
<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-full">
<p className="text-sm text-gray-500 mb-4">What you'll need for the interview:</p>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-bold">1</div>
<span className="text-sm font-medium text-gray-700">2 work related references</span>
</li>
<li className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-bold">2</div>
<span className="text-sm font-medium text-gray-700">Photo ID</span>
</li>
</ul>
</div>
</div>
</div>

<div className="">
<h4 className="text-lg font-semibold text-gray-900 mb-6">What our cleaners say</h4>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden group hover:border-brand-green/30 transition-colors">
<div className="absolute top-0 right-0 w-16 h-16 bg-brand-green/5 rounded-bl-full -mr-4 -mt-4"></div>
<blockquote className="text-gray-600 italic mb-4 text-sm leading-relaxed">"Reliable, professional and very organised agency. Friendly and easy to communicate with... I highly recommend Home Sweet Home!"</blockquote>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brand-lightgreen text-brand-green flex items-center justify-center text-xs font-bold">B</div>
<span className="text-sm font-semibold text-gray-900">Bozena</span>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden group hover:border-brand-green/30 transition-colors">
<div className="absolute top-0 right-0 w-16 h-16 bg-brand-green/5 rounded-bl-full -mr-4 -mt-4"></div>
<blockquote className="text-gray-600 italic mb-4 text-sm leading-relaxed">"I've known them since 2014 and they are always kind and respectful with me. They take care of their clients and their cleaners."</blockquote>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brand-lightgreen text-brand-green flex items-center justify-center text-xs font-bold">A</div>
<span className="text-sm font-semibold text-gray-900">Arianna</span>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1 space-y-6">

<div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm relative overflow-hidden text-center">
<div className="absolute inset-0 bg-gradient-to-b from-brand-lightgreen/20 to-transparent opacity-50"></div>
<div className="relative z-10">
<div className="w-20 h-20 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg shadow-yellow-200">
<svg className="lucide lucide-trophy" fill="white" height="40" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
</div>
<h4 className="font-bold text-gray-900 text-lg">Cleaner of the Month</h4>
<p className="text-brand-pink font-medium mb-1">December 2025</p>
<p className="text-lg font-serif italic text-gray-600 mb-2">Zaneta Solczykiewicz</p>
<p className="text-xs text-gray-400 uppercase tracking-wide">In recognition of dedication &amp; hard work</p>
</div>
</div>

<a className="w-full block bg-brand-pink hover:bg-opacity-90 text-white text-center font-medium text-lg px-6 py-4 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 group" href="https://home-sweet-home.typeform.com/to/xAmH5m" target="_blank">
<span className="flex items-center justify-center gap-2">
                        Launch Registration Form
                        <svg className="lucide lucide-external-link group-hover:translate-x-0.5 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</span>
</a>

<div className="bg-white border-gray-200 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="mb-6 pb-4 border-b border-gray-100">
<h3 className="text-lg font-semibold text-gray-900">Send Details &amp; CV</h3>
<p className="text-sm text-gray-500 mt-1">Please apply via email.</p>
</div>
<div className="flex flex-col gap-4">
<p className="text-sm text-gray-600">To join our team, please send your details and CV directly to:</p>
<a className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-brand-green/30 hover:shadow-md transition-all group" href="mailto:enquiries@hshcleaning.co.uk">
<div className="bg-brand-lightgreen/20 text-brand-green p-2.5 rounded-full group-hover:scale-110 transition-transform shrink-0">
<svg className="lucide lucide-mail" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-semibold text-gray-900 group-hover:text-brand-green transition-colors break-all">enquiries@hshcleaning.co.uk</p>
</div>
<svg className="lucide lucide-arrow-right text-gray-300 group-hover:text-brand-green transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section><section className="hidden bg-white border-gray-200 border-t pt-24 pb-24" id="legal-content">
<div className="max-w-4xl mx-auto px-6">

<div className="scroll-mt-28 mb-24" id="privacy-policy">
<h1 className="text-3xl md:text-4xl font-semibold text-brand-dark tracking-tight mb-8">Privacy Policy – Home Sweet Home Cleaning</h1>
<div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-6">
<p className="">Your privacy is important to us. It is Home Sweet Home Cleaning's policy to respect your privacy regarding any information we may collect from you across our website. The purpose of this policy is to explain to you how we control, process, handle and protect your personal information while browsing or using this website, including your rights under current laws and regulations. If you do not agree to the following policy you may wish to cease viewing / using this website.</p>
<h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">Information we collect</h3>
<h4 className="text-lg font-medium text-gray-900 mt-6 mb-3">Log data</h4>
<p className="">When you visit our website, our servers may automatically log the standard data provided by your web browser. This data is considered “non-identifying information”, as it does not personally identify you on its own. It may include your computer’s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, and other details.</p>
<p>When we send you an email newsletter we may collect data about how you use our emails – for example whether you open them and which links you click on, including your IP address.</p>
<p>We may also collect data about the device you are using to access our website. This data may include the device type, operating system, unique device identifiers, device settings, and geo-location data. What we collect can depend on the individual settings of your device and software.</p>
<h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">Service providers: the information we collect and how we use it.</h3>
<p>To enable us to assist you in finding an appropriate cleaning job, we will gather personal information about you from your CV and our application process. This includes, but is not limited to:</p>
<ul className="list-disc pl-5 space-y-2 mb-4 marker:text-gray-400">
<li>Your name;</li>
<li>Your contact details including your personal email address;</li>
</ul>
<p>We hold and use this information in order to:</p>
<ul className="list-disc pl-5 space-y-2 mb-4 marker:text-gray-400">
<li>Assist you in finding an appropriate job;</li>
<li>Communicate with you regarding job opportunities and the progress of any applications you make;</li>
<li>To provide your details to appropriate prospective clients. We will only share your information with named prospective clients with your permission;</li>
<li>Seek your feedback on our services;</li>
<li>Fulfil our obligations to our clients when you are offered employment as a service provider;</li>
</ul>
<p>You have the right to withdraw your consent or amend your communications preferences at any time. You can request access to your details by contacting the HSH Cleaning address or emailing <a className="text-brand-green hover:underline" href="mailto:dan@hshcleaning.co.uk">dan@hshcleaning.co.uk</a>.</p>
<p>We may share your personal information with the following:</p>
<ul className="list-disc pl-5 space-y-2 mb-4 marker:text-gray-400">
<li>Regulatory or law enforcement agencies, when required by law to do so.</li>
</ul>
<p className="">We do not share your personal information with third parties who wish to use it for marketing purposes.</p>
<h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">Clients: the information we collect and how we use it.</h3>
<p>To enable us to find a suitable cleaner we may ask for personal information when you contact us about our services. This includes, but is not limited to:</p>
<ul className="list-disc pl-5 space-y-2 mb-4 marker:text-gray-400">
<li>Your name;</li>
<li>Your contact details including your personal email address;</li>
</ul>
<p>We hold and use this information in order to:</p>
<ul className="list-disc pl-5 space-y-2 mb-4 marker:text-gray-400">
<li>to manage any account you may have with us;</li>
<li>to process your cleaning slot/schedule and to make arrangements with your service provider (cleaner) for the provision of services;</li>
<li className="">to fulfil our obligations arising from any contracts in which we have entered with you;</li>
<li>to provide you with the information and tailor the services that you request from us;</li>
<li>to contact you regarding any comments, complaints, queries or feedback you might have about us or our services;</li>
</ul>
<h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">Data processing and storage</h3>
<p>We only retain personal information for as long as necessary to provide a service, to improve our services in future, or for as long as is set out in any relevant contract you hold with us.</p>
<p className="">Unfortunately, the transmission of information via the internet is not completely secure. While we make every effort to help ensure the integrity and security of our network and systems, we cannot guarantee the security of your data transmitted to our websites ; any transmission is at your own risk. Once we have received your information, we maintain administrative and technical safeguards to protect against unauthorised use, disclosure, alteration or destruction of the personally-identifiable information we collect on this website.</p>
<p>We review our retention periods for personal information on a regular basis. If you request your personal information be deleted, or where your personal information becomes no longer relevant to our operations, we will erase it from our system within a reasonable timeframe.</p>
<h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">Cookies</h3>
<p>We use “cookies” to collect information about you and your activity across our site. A cookie is a small piece of data that our website stores on your computer, and accesses each time you visit, so we can understand how you use our site. This helps us serve you content based on preferences you have specified. Please refer to our Cookie Policy for more information.</p>
<h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">Third-party access to information</h3>
<p className="">We use a third party provider, Mailchimp, to communicate with customers. We gather statistics around email opening and clicks using industry standard technologies to help us monitor and improve our e-newsletter. For more information, please see</p>
<p><a className="text-brand-green hover:underline" href="https://mailchimp.com/legal/privacy/" rel="noopener noreferrer" target="_blank">https://mailchimp.com/legal/privacy/</a></p>
<p>When someone visits www.hshcleaning.co.uk we use a third party service, Google Analytics, to collect standard internet log information and details of visitor behaviour patterns. We do this to find out things such as the number of visitors to the various parts of the site. This information is only processed in a way which does not identify anyone. We do not make, and do not allow Google to make, any attempt to find out the identities of those visiting our website. For more information, please see <a className="text-brand-green hover:underline" href="https://policies.google.com/privacy?hl=en-GB" rel="noopener noreferrer" target="_blank">https://policies.google.com/privacy?hl=en-GB</a></p>
<p className="">Google Analytics makes use of cookies, details of which can be found on Google’s developer guides. FYI our website uses the analytics.js implementation of GA. You can find more information on how cookies are used on this website in our Cookies Policy page.</p>
<h4 className="text-lg font-medium text-gray-900 mt-6 mb-3">CRM</h4>
<p>We also use crm data storage with bluefrontier.co.uk. You can read there GDPR statement here - <a className="text-brand-green hover:underline" href="https://www.bluefrontier.co.uk/gdpr-statement" rel="noopener noreferrer" target="_blank">https://www.bluefrontier.co.uk/gdpr-statement</a></p>
<p>We will refuse government and law enforcement requests for data if we believe a request is too broad or unrelated to its stated purpose. However, we may cooperate if we believe the requested information is necessary and appropriate to comply with legal process, to protect our own rights and property, to protect the safety of the public and any person, to prevent a crime, or to prevent what we reasonably believe to be illegal, legally actionable, or unethical activity.</p>
<p className="">We do not otherwise share or supply personal information to third parties. We do not sell or rent your personal information to marketers or third parties.</p>
<h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">Children’s Privacy</h3>
<p>We are committed to protecting the privacy of children who use our services. We are obliged to protect the privacy of children aged 16 or under. If you are aged 16 or under‚ please ensure you obtain your parent/guardian's prior permission whenever you provide us with your personal information. We encourage parents to engage with us in protecting their children’s privacy, ensuring a safe and enjoyable online experience.</p>
<h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">Limits of our policy</h3>
<p>This privacy policy only covers Home Sweet Home's own collecting and handling of data. We only work with partners, affiliates and third-party providers whose privacy policies align with ours, however we cannot accept responsibility or liability for their respective privacy practices.</p>
<p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and policies of those sites, and cannot accept responsibility or liability for their respective privacy practices.</p>
<h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">Your rights and responsibilities</h3>
<p>As our user, you have the right to be informed about how your data is collected and used. You are entitled to know what data we collect about you, and how it is processed. You are entitled to correct and update any personal information about you, and to request this information be deleted.</p>
<p>You are entitled to restrict or object to our use of your data, while retaining the right to use your personal information for your own purposes. You have the right to opt out of data about you being used in decisions based solely on automated processing.</p>
<p>You can find out what information we hold about you, and ask us not to use any of the information we collect. If you wish to exercise this right, please send your request to <a className="text-brand-green hover:underline" href="mailto:dan@hshcleaning">dan@hshcleaning</a></p>
<p>If you’ve signed up for email alerts, you can unsubscribe or change your settings at any time.</p>
<p className="">Feel free to contact us if you have any concerns or questions about how we handle your data and personal information.</p>
<div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-100">
<p className="font-semibold text-gray-900">HSH Cleaning Controller</p>
<p className="mb-4 text-sm">Dan Thornton<a className="text-brand-green hover:underline" href="mailto:dan@hshcleaning">dan@hshcleaning</a></p>
<p className="font-semibold text-gray-900 mt-4">HSH Cleaning Data Protection Officer</p>
<p className="text-sm">Dan Thornton<a className="text-brand-green hover:underline" href="mailto:dan@hshcleaning">dan@hshcleaning</a></p>
<p className="text-xs text-gray-400 mt-6">This policy is effective as of 24 May 2018.</p>
</div>
</div>
</div>

<div className="scroll-mt-28" id="cookies-policy">
<h1 className="text-3xl md:text-4xl font-semibold text-brand-dark tracking-tight mb-8">Cookies Policy – Home Sweet Home Cleaning</h1>
<div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-6">
<h3 className="text-xl font-semibold text-gray-900 mb-4">HSH Cookie Policy</h3>
<p className="">This website uses cookies. We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services. You consent to our cookies if you continue to use our website.</p>
<p>Cookies are small text files that can be used by websites to make a user's experience more efficient.</p>
<p>The law states that we can store cookies on your device if they are strictly necessary for the operation of this site. For all other types of cookies we need your permission.</p>
<p>This site uses different types of cookies. Some cookies are placed by third party services that appear on our pages.</p>
<p>You can at any time change or withdraw your consent from the Cookie Declaration on our website.</p>
<p>Learn more about who we are, how you can contact us and how we process personal data in our Privacy Policy.</p>
<div className="bg-gray-50 p-6 rounded-xl border border-gray-100 my-8">
<p className="mb-2">Your consent applies to the following domains: <span className="font-semibold text-gray-900">www.hshcleaning.co.uk</span></p>
<p className="mb-2">Your current state: <span className="font-semibold text-gray-900">Allow all.</span></p>
<p className="mb-2 text-xs text-gray-500 break-all font-mono">Your consent ID: exApjKVyR3iyMk9i5p4ugDFMaCN4M2EW4hTPIDD/Z227Xf7L+/0HPQ==</p>
<p className="mb-4 text-xs text-gray-500">Consent date: Monday, January 26, 2026 at 02:30:09 PM GMT</p>
<div className="flex gap-4 text-sm font-medium pt-2 border-t border-gray-200 mt-4">
<button className="text-brand-green hover:underline cursor-pointer">Change your consent</button>
<span className="text-gray-300">|</span>
<button className="text-brand-green hover:underline cursor-pointer">Withdraw your consent</button>
</div>
</div>
<p className="text-sm text-gray-500 mb-6">Cookie declaration last updated on 2/22/23 by Cookiebot:</p>

<div className="mb-12">
<h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        Necessary <span className="text-xs font-normal text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full border border-gray-200">(4)</span>
</h4>
<p className="text-sm text-gray-600 mb-4">Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.</p>
<div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
<table className="min-w-full text-sm divide-y divide-gray-200">
<thead className="bg-gray-50">
<tr>
<th className="px-4 py-3 text-left font-semibold text-gray-900 w-1/5 text-xs uppercase tracking-wide">Name</th>
<th className="px-4 py-3 text-left font-semibold text-gray-900 w-1/5 text-xs uppercase tracking-wide">Provider</th>
<th className="px-4 py-3 text-left font-semibold text-gray-900 w-2/5 text-xs uppercase tracking-wide">Purpose</th>
<th className="px-4 py-3 text-left font-semibold text-gray-900 w-1/5 text-xs uppercase tracking-wide">Storage</th>
<th bg-white"="" className="px-4 py-3 text-left font-semibold text-gray-&lt;/thead&gt; &lt;tbody class=" divide-gray-200="" divide-y="">
</th></tr><tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-4 py-3 align-top font-medium text-gray-900">CookieConsent</td>
<td className="px-4 py-3 align-top text-gray-600">Cookiebot</td>
<td className="px-4 py-3 align-top text-gray-600">Stores the user's cookie consent state for the current domain</td>
<td className="px-4 py-3 align-top text-gray-600 whitespace-nowrap">1 year</td>
<td className="px-4 py-3 align-top text-gray-600">HTTP Cookie</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-4 py-3 align-top font-medium text-gray-900">PHPSESSID</td>
<td className="px-4 py-3 align-top text-gray-600">hshcleaning.co.uk</td>
<td className="px-4 py-3 align-top text-gray-600">Preserves user session state across page requests.</td>
<td className="px-4 py-3 align-top text-gray-600 whitespace-nowrap">7 days</td>
<td className="px-4 py-3 align-top text-gray-600">HTTP Cookie</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-4 py-3 align-top font-medium text-gray-900">rc::a</td>
<td className="px-4 py-3 align-top text-gray-600">Google</td>
<td className="px-4 py-3 align-top text-gray-600">This cookie is used to distinguish between humans and bots. This is beneficial for the website, in order to make valid reports on the use of their website.</td>
<td className="px-4 py-3 align-top text-gray-600 whitespace-nowrap">Persistent</td>
<td className="px-4 py-3 align-top text-gray-600">HTML Local Storage</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-4 py-3 align-top font-medium text-gray-900">rc::c</td>
<td className="px-4 py-3 align-top text-gray-600">Google</td>
<td className="px-4 py-3 align-top text-gray-600">Used in context with video-advertisement. The cookie limits the number of times a visitor is shown the same advertisement-content. The cookie is also used to ensure relevance of the video-advertisement to the specific visitor.</td>
<td className="px-4 py-3 align-top text-gray-600 whitespace-nowrap">Session</td>
<td className="px-4 py-3 align-top text-gray-600">HTML Local Storage</td>
</tr>
</thead></table>
</div>
</div>

<div className="mb-12">
<h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        Statistics <span className="text-xs font-normal text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full border border-gray-200">(7)</span>
</h4>
<p className="text-sm text-gray-600 mb-4">Statistic cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously.</p>
<div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
<table className="min-w-full text-sm divide-y divide-gray-200">
<thead className="bg-gray-50">
<tr>
<th className="px-4 py-3 text-left font-semibold text-gray-900 w-1/5 text-xs uppercase tracking-wide">Name</th>
<th className="px-4 py-3 text-left font-semibold text-gray-900 w-1/5 text-xs uppercase tracking-wide">Provider</th>
<th className="px-4 py-3 text-left font-semibold text-gray-900 w-2/5 text-xs uppercase tracking-wide">Purpose</th>
<th className="px-4 py-3 text-left font-semibold text-gray-900 w-1/5 text-xs uppercase tracking-wide">Storage</th>
<th className="px-4 py-3 text-left font-semibold text-gray-900 w-1/5 text-xs uppercase tracking-wide">Type</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-200 bg-white">
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-4 py-3 align-top font-medium text-gray-900">__utm.gif</td>
<td className="px-4 py-3 align-top text-gray-600">Google</td>
<td className="px-4 py-3 align-top text-gray-600">Google Analytics Tracking Code that logs details about the visitor's browser and computer.</td>
<td className="px-4 py-3 align-top text-gray-600 whitespace-nowrap">Session</td>
<td className="px-4 py-3 align-top text-gray-600">Pixel Tracker</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-4 py-3 align-top font-medium text-gray-900">__utma</td>
<td className="px-4 py-3 align-top text-gray-600">Google</td>
<td className="px-4 py-3 align-top text-gray-600">Collects data on the number of times a user has visited the website as well as dates for the first and most recent visit. Used by Google Analytics.</td>
<td className="px-4 py-3 align-top text-gray-600 whitespace-nowrap">400 days</td>
<td className="px-4 py-3 align-top text-gray-600">HTTP Cookie</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-4 py-3 align-top font-medium text-gray-900">__utmb</td>
<td className="px-4 py-3 align-top text-gray-600">Google</td>
<td className="px-4 py-3 align-top text-gray-600">Registers a timestamp with the exact time of when the user accessed the website. Used by Google Analytics to calculate the duration of a website visit.</td>
<td className="px-4 py-3 align-top text-gray-600 whitespace-nowrap">Session</td>
<td className="px-4 py-3 align-top text-gray-600">HTTP Cookie</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-4 py-3 align-top font-medium text-gray-900">__utmc</td>
<td className="px-4 py-3 align-top text-gray-600">Google</td>
<td className="px-4 py-3 align-top text-gray-600">Registers a timestamp with the exact time of when the user leaves the website. Used by Google Analytics to calculate the duration of a website visit.</td>
<td className="px-4 py-3 align-top text-gray-600 whitespace-nowrap">Session</td>
<td className="px-4 py-3 align-top text-gray-600">HTTP Cookie</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-4 py-3 align-top font-medium text-gray-900">__utmt</td>
<td className="px-4 py-3 align-top text-gray-600">Google</td>
<td className="px-4 py-3 align-top text-gray-600">Used to throttle the speed of requests to the server.</td>
<td className="px-4 py-3 align-top text-gray-600 whitespace-nowrap">Session</td>
<td className="px-4 py-3 align-top text-gray-600">HTTP Cookie</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-4 py-3 align-top font-medium text-gray-900">__utmz</td>
<td className="px-4 py-3 align-top text-gray-600">Google</td>
<td className="px-4 py-3 align-top text-gray-600">Collects data on where the user came from, what search engine was used, what link was clicked and what search term was used. Used by Google Analytics.</td>
<td className="px-4 py-3 align-top text-gray-600 whitespace-nowrap">6 months</td>
<td className="px-4 py-3 align-top text-gray-600">HTTP Cookie</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-4 py-3 align-top font-medium text-gray-900">_ga_devsite</td>
<td className="px-4 py-3 align-top text-gray-600">Google</td>
<td className="px-4 py-3 align-top text-gray-600">Used to send data to Google Analytics about the visitor's device and behavior. Tracks the visitor across devices and marketing channels.</td>
<td className="px-4 py-3 align-top text-gray-600 whitespace-nowrap">2 years</td>
<td className="px-4 py-3 align-top text-gray-600">HTTP Cookie</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="mb-12">
<h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        Marketing <span className="text-xs font-normal text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full border border-gray-200">(3)</span>
</h4>
<p className="text-sm text-gray-600 mb-4">Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.</p>
<div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
<table className="min-w-full text-sm divide-y divide-gray-200">
<thead className="bg-gray-50">
<tr>
<th className="px-4 py-3 text-left font-semibold text-gray-900 w-1/5 text-xs uppercase tracking-wide">Name</th>
<th className="px-4 py-3 text-left font-semibold text-gray-900 w-1/5 text-xs uppercase tracking-wide">Provider</th>
<th className="px-4 py-3 text-left font-semibold text-gray-900 w-2/5 text-xs uppercase tracking-wide">Purpose</th>
<th className="px-4 py-3 text-left font-semibold text-gray-900 w-1/5 text-xs uppercase tracking-wide">Storage</th>
<th className="px-4 py-3 text-left font-semibold text-gray-900 w-1/5 text-xs uppercase tracking-wide">Type</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-200 bg-white">
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-4 py-3 align-top font-medium text-gray-900">fbssls_</td>
<td className="px-4 py-3 align-top text-gray-600">Meta Platforms, Inc.</td>
<td className="px-4 py-3 align-top text-gray-600">Collects data on the visitor’s use of the comment system on the website, and what blogs/articles the visitor has read. This can be used for marketing purposes.</td>
<td className="px-4 py-3 align-top text-gray-600 whitespace-nowrap">Session</td>
<td className="px-4 py-3 align-top text-gray-600">HTML Local Storage</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-4 py-3 align-top font-medium text-gray-900">i/jot/embeds</td>
<td className="px-4 py-3 align-top text-gray-600">Twitter Inc.</td>
<td className="px-4 py-3 align-top text-gray-600">Sets a unique ID for the visitor, that allows third party advertisers to target the visitor with relevant advertisement. This pairing service is provided by third party advertisement hubs, which facilitates real-time bidding for advertisers.</td>
<td className="px-4 py-3 align-top text-gray-600 whitespace-nowrap">Session</td>
<td className="px-4 py-3 align-top text-gray-600">Pixel Tracker</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-4 py-3 align-top font-medium text-gray-900">r/collect</td>
<td className="px-4 py-3 align-top text-gray-600">Google</td>
<td className="px-4 py-3 align-top text-gray-600">This cookie is used to send data to Google Analytics about the visitor's device and behavior. It tracks the visitor across devices and marketing channels.</td>
<td className="px-4 py-3 align-top text-gray-600 whitespace-nowrap">Session</td>
<td className="px-4 py-3 align-top text-gray-600">Pixel Tracker</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">

<div className="md:col-span-1">
<a className="inline-block font-semibold text-lg text-brand-dark mb-4" href="#">Home Sweet Home</a>
<p className="text-sm text-gray-500 mb-6">
                        Scotland’s Friendliest Cleaning Agency. Providing professional, vetted cleaners since 2004.
                    </p>
<div className="text-xs text-gray-400">
                        Company Reg: 08699524<br/>
</div>
</div>

<div className="">
<h5 className="text-xs font-semibold uppercase tracking-wider text-gray-900 mb-4">HSH Locations</h5>
<ul className="space-y-3 text-sm">
<li className=""><a className="hover:text-brand-green transition-colors flex items-center gap-2 text-gray-500" href="https://maps.app.goo.gl/rZFWtBwns26u6iCXA" rel="noopener noreferrer" target="_blank"><svg aria-hidden="true" className="lucide lucide-map-pin" data-lucide="map-pin" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Glasgow - North</a></li>
<li className=""><a className="hover:text-brand-green transition-colors flex items-center gap-2 text-gray-500" href="https://maps.app.goo.gl/tMrwWis255UdYj3cA" rel="noopener noreferrer" target="_blank"><svg aria-hidden="true" className="lucide lucide-map-pin" data-lucide="map-pin" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Edinburgh</a></li>
</ul>
</div>

<div className="">
<h5 className="uppercase text-xs font-semibold text-gray-900 tracking-wider mb-4">Contact Us</h5>
<ul className="space-y-3 text-sm">
<li className=""><a className="hover:text-brand-green transition-colors text-gray-500" href="mailto:glasgownorth@hshcleaning.co.uk">glasgownorth@hshcleaning.co.uk</a></li>
<li className=""><a className="hover:text-brand-green transition-colors cursor-pointer text-gray-500" href="/page-2#privacy-policy" id="privacy-policy-link" onclick="event.preventDefault(); document.getElementById('legal-content').classList.remove('hidden'); document.getElementById('privacy-policy').scrollIntoView({behavior: 'smooth'});">Privacy Policy</a><a className="hover:text-brand-green transition-colors cursor-pointer text-gray-500" href="/page-2#privacy-policy" id="cookies-policy" onclick="event.preventDefault(); document.getElementById('legal-content').classList.remove('hidden'); document.getElementById('privacy-policy').scrollIntoView({behavior: 'smooth'});"> Cookies Policy</a></li>
</ul>
</div>

<div className="">
<div className="flex gap-4">
<a className="text-gray-400 hover:text-blue-400 transition-colors" href="https://twitter.com/HSHCleaningGN"></a>
<a className="text-gray-400 hover:text-blue-600 transition-colors" href="www.facebook.com/hshcleaningglasgownorth"></a>
</div>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-400">© Home Sweet Home® Cleaning 2026</p>
<div className="flex items-center gap-6">
<a className="text-xs font-medium text-gray-500 hover:text-brand-green flex items-center gap-1" href="#top">
                        Back to top <svg aria-hidden="true" className="lucide lucide-arrow-up" data-lucide="arrow-up" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</a>
<img alt="FSB" className="h-6 opacity-60 grayscale hover:grayscale-0 transition-all" src="https://www.hshcleaning.co.uk/assets/templates/hshwebsite/assets/img/website/fsb-logo.png"/>
</div>
</div>
</div>
</footer><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe>


<img alt="Cookiebot session tracker icon loaded" data-cookieconsent="ignore" id="CookiebotSessionPixel" src="https://imgsct.cookiebot.com/1.gif?dgi=6147d9b4-52d2-450a-8c1d-713e9db1beab" style={{display: 'none'}}/><iframe aria-hidden="true" role="presentation" src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html" style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabindex="-1" title="Blank"></iframe>
    </>
  );
}
