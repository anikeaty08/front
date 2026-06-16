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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Multi-Language System Data
        const i18n = {
            en: {
                brand_name: "MEFNET",
                nav_admissions: "Admissions", nav_architecture: "Architecture", nav_prototypes: "Prototypes", nav_gateway: "Gateway",
                hero_status: "System Online V2.0", hero_title_1: "Empowering", hero_title_2: "Digital Aalimas",
                hero_desc: "Madrasa-e-Fathima Niswan is redefining spiritual education. Merging 1400 years of wisdom with an elegant architectural topology.",
                adm_portal: "Portal Open: 2024-25", adm_init: "Initialize Online Admission",
                btn_support: "Support Mission", btn_explore: "Explore Protocol",
                arch_title: "System Architecture", arch_subtitle: "The delicate yet robust foundation of our current operational cycle.",
                arch_logic_title: "The Logic of Ilm", arch_logic_desc: "Currently hosting residential and day scholars. Our framework provides absolute free education, nutrition, and secure, elegant localized residency.",
                arch_stat_label: "Active Scholars", arch_verse_label: "Guidance Layer", arch_verse_desc: '"Who will loan Allah a goodly loan..."',
                arch_fin_title: "Annual Operations", arch_fin_desc: "System requirements for the current nurturing cycle", arch_fin_status: "Status: Active Request",
                admissions_badge: "Portal Active", admissions_title_1: "Digital Admission", admissions_title_2: "Gateway 2024-25",
                admissions_desc: "Initiate the enrollment protocol securely. Experience a seamless digital onboarding process for the upcoming academic cycle directly via WhatsApp.",
                btn_init_app: "Initialize Application",
                proto_title: "Campus Prototypes", proto_subtitle: "Upcoming physical infrastructure and graceful environments.",
                proto_node1: "NODE_01 // LAND", proto_node1_title: "0.5 Acre Vision", proto_node1_desc: "Acquiring primary land mass to compile a permanent, high-tech campus dedicated entirely to female scholars in an elegant setting.",
                proto_node2: "NODE_02 // COST", proto_node2_title: "₹ 2,000 / sqft", proto_node2_desc: "Micro-transactions enabled. Contribute per square foot to mathematically build the permanent, graceful house of Ilm.", btn_calc: "Calculate Share",
                proto_node3: "NODE_03 // ACTIVE", proto_node3_title: "Sadaqah Jariyah", proto_node3_desc: "An infinite loop. A legacy protocol that continues to process rewards exponentially, independent of time, radiating light forever.",
                gate_secure: "Secure Gateway Connection", gate_title: "Initialize Support.", gate_bank: "Bank Credentials", gate_await: "Awaiting Transaction",
                footer_text: "End of Protocol // 2026 // Hospet Node"
            },
            kn: {
                brand_name: "ಮೆಫ್‌ನೆಟ್",
                nav_admissions: "ಪ್ರವೇಶಾತಿಗಳು", nav_architecture: "ವಾಸ್ತುಶಿಲ್ಪ", nav_prototypes: "ಮಾದರಿಗಳು", nav_gateway: "ಗೇಟ್‌ವೇ",
                hero_status: "ಸಿಸ್ಟಮ್ ಆನ್‌ಲೈನ್ V2.0", hero_title_1: "ಸಬಲೀಕರಣ", hero_title_2: "ಡಿಜಿಟಲ್ ಆಲಿಮಾಗಳು",
                hero_desc: "ಮದರಸಾ-ಎ-ಫಾತಿಮಾ ನಿಸ್ವಾನ್ ಆಧ್ಯಾತ್ಮಿಕ ಶಿಕ್ಷಣವನ್ನು ಮರುವ್ಯಾಖ್ಯಾನಿಸುತ್ತಿದೆ. 1400 ವರ್ಷಗಳ ಬುದ್ಧಿವಂತಿಕೆಯನ್ನು ಸೊಗಸಾದ ವಾಸ್ತುಶಿಲ್ಪದೊಂದಿಗೆ ವಿಲೀನಗೊಳಿಸುತ್ತಿದೆ.",
                adm_portal: "ಪೋರ್ಟಲ್ ತೆರೆದಿದೆ: 2024-25", adm_init: "ಆನ್‌ಲೈನ್ ಪ್ರವೇಶವನ್ನು ಪ್ರಾರಂಭಿಸಿ",
                btn_support: "ಮಿಷನ್ ಬೆಂಬಲಿಸಿ", btn_explore: "ಪ್ರೋಟೋಕಾಲ್ ಅನ್ವೇಷಿಸಿ",
                arch_title: "ಸಿಸ್ಟಮ್ ಆರ್ಕಿಟೆಕ್ಚರ್", arch_subtitle: "ನಮ್ಮ ಪ್ರಸ್ತುತ ಕಾರ್ಯಾಚರಣೆಯ ಚಕ್ರದ ಸೂಕ್ಷ್ಮವಾದರೂ ದೃಢವಾದ ಅಡಿಪಾಯ.",
                arch_logic_title: "ಇಲ್ಮ್ ತರ್ಕ", arch_logic_desc: "ಪ್ರಸ್ತುತ ವಸತಿ ಮತ್ತು ದಿನದ ವಿದ್ವಾಂಸರನ್ನು ಆಯೋಜಿಸುತ್ತಿದೆ. ನಮ್ಮ ಚೌಕಟ್ಟು ಸಂಪೂರ್ಣ ಉಚಿತ ಶಿಕ್ಷಣ, ಪೋಷಣೆ ಮತ್ತು ಸುರಕ್ಷಿತ ನಿವಾಸವನ್ನು ಒದಗಿಸುತ್ತದೆ.",
                arch_stat_label: "ಸಕ್ರಿಯ ವಿದ್ವಾಂಸರು", arch_verse_label: "ಮಾರ್ಗದರ್ಶನ ಲೇಯರ್", arch_verse_desc: '"ಅಲ್ಲಾಹನಿಗೆ ಉತ್ತಮ ಸಾಲವನ್ನು ನೀಡುವವರು ಯಾರು..."',
                arch_fin_title: "ವಾರ್ಷಿಕ ಕಾರ್ಯಾಚರಣೆಗಳು", arch_fin_desc: "ಪ್ರಸ್ತುತ ಪೋಷಣೆಯ ಚಕ್ರಕ್ಕೆ ಸಿಸ್ಟಮ್ ಅವಶ್ಯಕತೆಗಳು", arch_fin_status: "ಸ್ಥಿತಿ: ಸಕ್ರಿಯ ವಿನಂತಿ",
                admissions_badge: "ಪೋರ್ಟಲ್ ಸಕ್ರಿಯ", admissions_title_1: "ಡಿಜಿಟಲ್ ಪ್ರವೇಶ", admissions_title_2: "ಗೇಟ್‌ವೇ 2024-25",
                admissions_desc: "ನೋಂದಣಿ ಪ್ರೋಟೋಕಾಲ್ ಅನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಪ್ರಾರಂಭಿಸಿ. ಮುಂಬರುವ ಶೈಕ್ಷಣಿಕ ಚಕ್ರಕ್ಕಾಗಿ ತಡೆರಹಿತ ಡಿಜಿಟಲ್ ಆನ್‌ಬೋರ್ಡಿಂಗ್ ಪ್ರಕ್ರಿಯೆಯನ್ನು ನೇರವಾಗಿ ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಅನುಭವಿಸಿ.",
                btn_init_app: "ಅರ್ಜಿಯನ್ನು ಪ್ರಾರಂಭಿಸಿ",
                proto_title: "ಕ್ಯಾಂಪಸ್ ಮಾದರಿಗಳು", proto_subtitle: "ಮುಂಬರುವ ಭೌತಿಕ ಮೂಲಸೌಕರ್ಯ ಮತ್ತು ಸುಂದರವಾದ ಪರಿಸರಗಳು.",
                proto_node1: "NODE_01 // ಭೂಮಿ", proto_node1_title: "0.5 ಎಕರೆ ದೃಷ್ಟಿ", proto_node1_desc: "ಮಹಿಳಾ ವಿದ್ವಾಂಸರಿಗಾಗಿಯೇ ಮೀಸಲಾದ ಶಾಶ್ವತ, ಹೈ-ಟೆಕ್ ಕ್ಯಾಂಪಸ್ ಅನ್ನು ನಿರ್ಮಿಸಲು ಪ್ರಾಥಮಿಕ ಭೂಪ್ರದೇಶವನ್ನು ಸ್ವಾಧೀನಪಡಿಸಿಕೊಳ್ಳಲಾಗುತ್ತಿದೆ.",
                proto_node2: "NODE_02 // ವೆಚ್ಚ", proto_node2_title: "₹ 2,000 / ಚ.ಅಡಿ", proto_node2_desc: "ಮೈಕ್ರೋ-ವಹಿವಾಟುಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ. ಶಾಶ್ವತವಾದ ಇಲ್ಮ್ ಮನೆಯನ್ನು ನಿರ್ಮಿಸಲು ಪ್ರತಿ ಚದರ ಅಡಿಗೆ ಕೊಡುಗೆ ನೀಡಿ.", btn_calc: "ಪಾಲನ್ನು ಲೆಕ್ಕಹಾಕಿ",
                proto_node3: "NODE_03 // ಸಕ್ರಿಯ", proto_node3_title: "ಸದಕಃ ಜಾರಿಯಾ", proto_node3_desc: "ಒಂದು ಅನಂತ ಲೂಪ್. ಕಾಲಾತೀತವಾಗಿ ಪ್ರತಿಫಲಗಳನ್ನು ಘಾತೀಯವಾಗಿ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವುದನ್ನು ಮುಂದುವರಿಸುವ ಪರಂಪರೆ ಪ್ರೋಟೋಕಾಲ್.",
                gate_secure: "ಸುರಕ್ಷಿತ ಗೇಟ್‌ವೇ ಸಂಪರ್ಕ", gate_title: "ಬೆಂಬಲವನ್ನು ಪ್ರಾರಂಭಿಸಿ.", gate_bank: "ಬ್ಯಾಂಕ್ ರುಜುವಾತುಗಳು", gate_await: "ವಹಿವಾಟಿಗೆ ಕಾಯಲಾಗುತ್ತಿದೆ",
                footer_text: "ಪ್ರೋಟೋಕಾಲ್ ಅಂತ್ಯ // 2026 // ಹೊಸಪೇಟೆ ನೋಡ"
            },
            ur: {
                brand_name: "مف نیٹ",
                nav_admissions: "داخلے", nav_architecture: "فن تعمیر", nav_prototypes: "پروٹو ٹائپس", nav_gateway: "گیٹ وے",
                hero_status: "سسٹم آن لائن 2.0", hero_title_1: "بااختیار بنانا", hero_title_2: "ڈیجیٹل عالمات",
                hero_desc: "مدرسہ فاطمہ نسواں روحانی تعلیم کی نئی تعریف کر رہا ہے۔ 1400 سال کی حکمت کو ایک خوبصورت اور جدید تعمیراتی ڈھانچے کے ساتھ ملا رہا ہے۔",
                adm_portal: "پورٹل کھلا ہے: 25-2024", adm_init: "آن لائن داخلہ شروع کریں",
                btn_support: "مشن کی حمایت کریں", btn_explore: "پروٹوکول دریافت کریں",
                arch_title: "سسٹم آرکیٹیکچر", arch_subtitle: "ہمارے موجودہ آپریشنل سائیکل کی نازک مگر مضبوط بنیاد۔",
                arch_logic_title: "علم کی منطق", arch_logic_desc: "اس وقت اقامتی اور غیر اقامتی طالبات کی میزبانی کر رہا ہے۔ ہمارا فریم ورک مکمل طور پر مفت تعلیم، غذائیت اور محفوظ رہائش فراہم کرتا ہے۔",
                arch_stat_label: "فعال طالبات", arch_verse_label: "رہنمائی کی تہہ", arch_verse_desc: '"کون ہے جو اللہ کو قرضِ حسنہ دے..."',
                arch_fin_title: "سالانہ اخراجات", arch_fin_desc: "موجودہ تعلیمی دور کے لئے سسٹم کی ضروریات", arch_fin_status: "سٹیٹس: فعال درخواست",
                admissions_badge: "پورٹل فعال", admissions_title_1: "ڈیجیٹل داخلہ", admissions_title_2: "گیٹ وے 25-2024",
                admissions_desc: "داخلے کا عمل محفوظ طریقے سے شروع کریں۔ آنے والے تعلیمی سال کے لیے براہ راست واٹس ایپ کے ذریعے ایک ہموار آن بورڈنگ کا تجربہ کریں۔",
                btn_init_app: "درخواست شروع کریں",
                proto_title: "کیمپس پروٹو ٹائپس", proto_subtitle: "آنے والا بنیادی ڈھانچہ اور خوبصورت ماحول۔",
                proto_node1: "NODE_01 // زمین", proto_node1_title: "0.5 ایکڑ کا وژن", proto_node1_desc: "خواتین اسکالرز کے لیے مکمل طور پر وقف ایک مستقل، ہائی ٹیک کیمپس بنانے کے لیے بنیادی اراضی کا حصول۔",
                proto_node2: "NODE_02 // لاگت", proto_node2_title: "₹ 2,000 / مربع فٹ", proto_node2_desc: "مائیکرو ٹرانزیکشنز فعال ہیں۔ مستقل علم کا گھر بنانے کے لیے فی مربع فٹ کے حساب سے حصہ ڈالیں۔", btn_calc: "اپنے حصے کا حساب لگائیں",
                proto_node3: "NODE_03 // فعال", proto_node3_title: "صدقہ جاریہ", proto_node3_desc: "ایک لامحدود سلسلہ۔ ایک ایسا پروٹوکول جو وقت کی قید سے آزاد، ہمیشہ نور پھیلاتے ہوئے اجر فراہم کرتا رہتا ہے۔",
                gate_secure: "محفوظ گیٹ وے کنکشن", gate_title: "حمایت کا آغاز کریں۔", gate_bank: "بینک کی تفصیلات", gate_await: "ٹرانزیکشن کا انتظار ہے",
                footer_text: "پروٹوکول کا اختتام // 2026 // ہوسپیٹ نوڈ"
            }
        };

        const langMap = { 'en': 'English', 'kn': 'ಕನ್ನಡ', 'ur': 'اردو' };

        window.setLanguage = (lang) => {
            const currentData = i18n[lang];
            if (!currentData) return;

            document.getElementById('current-lang').innerText = langMap[lang];

            document.body.className = document.body.className.replace(/lang-(en|kn|ur)/g, '');
            document.body.classList.add(`lang-${lang}`);
            document.body.setAttribute('dir', lang === 'ur' ? 'rtl' : 'ltr');
            document.documentElement.setAttribute('dir', lang === 'ur' ? 'rtl' : 'ltr');
            
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (currentData[key]) el.innerText = currentData[key];
            });
        };

        document.addEventListener("DOMContentLoaded", () => {
            // Intense 3D Tilt Script Physics
            const tiltElements = document.querySelectorAll('.tilt-element');
            tiltElements.forEach(el => {
                el.addEventListener('mousemove', e => {
                    const rect = el.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    // Calculation for 3D rotation based on mouse coordinates
                    const rotateX = ((y - centerY) / centerY) * -12; // Max 12deg
                    const rotateY = ((x - centerX) / centerX) * 12;
                    
                    el.classList.add('is-tilting');
                    el.style.transform = `perspective(1200px) scale3d(1.03, 1.03, 1.03) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                });
                
                el.addEventListener('mouseleave', () => {
                    el.classList.remove('is-tilting');
                    el.style.transform = `perspective(1200px) scale3d(1, 1, 1) rotateX(0) rotateY(0)`;
                });
            });

            // Intersection Observer
            const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.target.classList.contains('fade-up-wait')) {
                        entry.target.classList.remove('fade-up-wait');
                        entry.target.classList.add('fade-up');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.fade-up').forEach(el => {
                el.classList.remove('fade-up');
                el.classList.add('fade-up-wait');
                observer.observe(el);
            });

            // Parallax Global background
            const bgGrid = document.getElementById('parallax-grid');
            document.addEventListener('mousemove', (e) => {
                const x = (window.innerWidth / 2 - e.pageX) / 40;
                const y = (window.innerHeight / 2 - e.pageY) / 40;
                if(bgGrid) bgGrid.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0051d052-4ad7-4c95-8641-f88f21d075aa_3840w.jpg")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>


<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none perspective-container">
<div className="absolute inset-[-50%] bg-grid-pattern transition-transform duration-1000 ease-out" id="parallax-grid" style={{transform: 'translateX(11.5px) translateY(-112.612px)'}}></div>

<div className="absolute top-[-10%] start-[-10%] w-[50vw] h-[50vw] rounded-full bg-rose-100/40 blur-[100px] animate-blob mix-blend-multiply"></div>
<div className="absolute top-[20%] end-[-10%] w-[45vw] h-[45vw] rounded-full bg-pink-100/40 blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply"></div>
<div className="absolute bottom-[-20%] start-[10%] w-[60vw] h-[60vw] rounded-full bg-stone-100/60 blur-[120px] animate-blob animation-delay-4000 mix-blend-multiply"></div>

<div className="absolute top-[30%] start-[15%] w-32 h-32 border-2 border-rose-200/50 rounded-2xl opacity-50 preserve-3d" style={{animation: 'float3D 12s infinite ease-in-out, spin3D 30s infinite linear'}}>
<div className="absolute inset-0 bg-white/10 backdrop-blur-sm transform translate-z-[20px] rounded-2xl border border-white/40"></div>
</div>
<div className="absolute bottom-[20%] end-[20%] w-48 h-48 border-2 border-pink-200/30 rounded-full opacity-50 preserve-3d" style={{animation: 'float3D 15s infinite ease-in-out reverse, spin3D 40s infinite linear reverse', animationDelay: '-5s'}}>
<div className="absolute inset-4 bg-gradient-to-tr from-rose-100/20 to-transparent transform translate-z-[40px] rounded-full"></div>
</div>
</div>

<nav className="fixed top-0 inset-x-0 z-50 bg-white/40 backdrop-blur-2xl border-b border-white/60 transition-all duration-500">
<div className="max-w-[100rem] mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="flex group-hover:rotate-180 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] preserve-3d bg-gradient-to-tr from-rose-200 to-pink-100 w-8 h-8 rounded-full items-center justify-center">
<svg className="group-hover:scale-110 transition-transform text-rose-600" data-icon-set="solar" data-solar="leaf-linear" height="16" style={{color: 'rgb(225, 29, 72)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 9l4.5-4.5m-4.5 10L18.5 8M12 19.5l7.5-7.5M12 22c4.418 0 8-3.646 8-8.143c0-4.462-2.553-9.67-6.537-11.531A3.45 3.45 0 0 0 12 2m0 20c-4.418 0-8-3.646-8-8.143c0-4.462 2.553-9.67 6.537-11.531A3.45 3.45 0 0 1 12 2m0 20V2" fill="none" stroke="currentColor" strokeWidth="1.5"></path></svg>
</div>
<span className="text-lg font-medium tracking-tight text-stone-800" data-i18n="brand_name">MEFNET</span>
</div>
<div className="hidden md:flex items-center gap-8 lg:gap-10">
<a className="text-sm font-medium text-rose-500 hover:text-rose-600 transition-colors relative group flex items-center gap-1.5" href="https://wa.me/916300012291?text=Hello%20Madrasa-e-Fathima%20Niswan%2C%20I%20am%20interested%20in%20initializing%20the%20online%20admission%20process%20for%20the%202024-25%20academic%20cycle.%20Please%20guide%20me." target="_blank">
<span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse"></span>
<span data-i18n="nav_admissions">Admissions</span>
<span className="absolute -bottom-1 start-0 w-0 h-[1px] bg-rose-400 transition-all duration-500 group-hover:w-full"></span>
</a>
<a className="text-sm font-normal text-stone-500 hover:text-stone-800 transition-colors relative group" href="#architecture">
<span data-i18n="nav_architecture">Architecture</span>
<span className="absolute -bottom-1 start-0 w-0 h-[1px] bg-rose-200 transition-all duration-500 group-hover:w-full"></span>
</a>
<a className="text-sm font-normal text-stone-500 hover:text-stone-800 transition-colors relative group" href="#prototypes">
<span data-i18n="nav_prototypes">Prototypes</span>
<span className="absolute -bottom-1 start-0 w-0 h-[1px] bg-rose-200 transition-all duration-500 group-hover:w-full"></span>
</a>
<a className="text-sm font-normal text-stone-500 hover:text-stone-800 transition-colors relative group" href="#gateway">
<span className="" data-i18n="nav_gateway">Gateway</span>
<span className="absolute -bottom-1 start-0 w-0 h-[1px] bg-rose-200 transition-all duration-500 group-hover:w-full"></span>
</a>
</div>

<div className="relative group/lang perspective-container z-50">
<button className="text-xs font-medium text-stone-500 hover:text-stone-800 transition-colors uppercase tracking-widest bg-white/50 px-4 py-2.5 rounded-full border border-white hover:shadow-sm flex items-center gap-2 group-hover/lang:bg-white/80">
<iconify-icon className="text-base" icon="solar:global-linear"></iconify-icon>
<span id="current-lang">English</span>
<iconify-icon className="group-hover/lang:rotate-180 transition-transform duration-500 ease-out" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="absolute top-full end-0 mt-3 w-40 glass-card rounded-2xl shadow-xl opacity-0 translate-y-4 rotate-x-12 pointer-events-none group-hover/lang:opacity-100 group-hover/lang:translate-y-0 group-hover/lang:rotate-x-0 group-hover/lang:pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden origin-top preserve-3d">
<div className="p-1">
<button className="w-full text-start px-4 py-2.5 rounded-xl text-xs font-medium text-stone-700 hover:bg-rose-50 hover:text-rose-600 transition-colors flex items-center justify-between" onclick="setLanguage('en')">
                            English
                        </button>
<button className="w-full text-start px-4 py-2.5 rounded-xl text-xs font-medium text-stone-600 hover:bg-rose-50 hover:text-rose-600 transition-colors font-[Noto_Sans_Kannada] flex items-center justify-between" onclick="setLanguage('kn')">
                            ಕನ್ನಡ
                        </button>
<button className="w-full text-end px-4 py-2.5 rounded-xl text-sm font-medium text-stone-600 hover:bg-rose-50 hover:text-rose-600 transition-colors font-[Noto_Nastaliq_Urdu] flex items-center justify-between" onclick="setLanguage('ur')">
                            اردو
                        </button>
</div>
</div>
</div>
</div>
</nav>

<section className="min-h-[95vh] flex flex-col preserve-3d pt-48 pr-6 pb-32 pl-6 relative items-center justify-center">
<div className="flex flex-col transition-transform duration-700 ease-out preserve-3d text-center max-w-5xl mr-auto ml-auto items-center" id="parallax-hero">
<div className="delay-100 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/80 bg-white/40 backdrop-blur-md mb-8 shadow-[0_4px_20px_rgb(225,29,72,0.05)] hover:bg-white/60 transition-colors duration-500 cursor-default tilt-element">
<div className="w-2 h-2 rounded-full bg-rose-400 animate-[pulseGlow_2s_infinite] pop-out"></div>
<span className="text-xs font-medium text-stone-600 tracking-widest uppercase pop-out" data-i18n="hero_status">System Online V2.0</span>
</div>
<h1 className="delay-200 md:text-7xl lg:text-[5.5rem] leading-[1.1] pop-out tilt-element text-5xl font-medium text-stone-800 tracking-tight mb-8" style={{transform: 'perspective(1200px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)'}}>
<span className="" data-i18n="hero_title_1">Empowering</span><br/>
<span className="bg-clip-text inline-block preserve-3d pop-out-extreme text-transparent bg-gradient-to-r from-rose-400 to-pink-300 relative" data-i18n="hero_title_2">
                    Digital Aalimas
                    <div className="absolute -bottom-4 start-0 w-full h-1 bg-gradient-to-r from-rose-200/0 via-rose-300/50 to-pink-200/0 blur-sm transform translate-z-[-10px]"></div>
</span>
</h1><p className="delay-300 max-w-2xl mx-auto text-lg md:text-2xl font-light text-stone-500 leading-relaxed mb-10 pop-out" data-i18n="hero_desc">
                Madrasa-e-Fathima Niswan is redefining spiritual education. Merging 1400 years of wisdom with an elegant architectural topology.
            </p>

<a className="delay-400 group block perspective-container w-full sm:w-auto mb-12" href="https://wa.me/916300012291?text=Hello%20Madrasa-e-Fathima%20Niswan%2C%20I%20am%20interested%20in%20initializing%20the%20online%20admission%20process%20for%20the%202024-25%20academic%20cycle.%20Please%20guide%20me." target="_blank">
<div className="tilt-element glass-card p-4 pe-6 rounded-2xl flex items-center gap-5 border border-white/80 bg-gradient-to-r from-white/80 to-rose-50/50 shadow-[0_20px_40px_rgba(225,29,72,0.08)]">
<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-400 to-pink-500 text-white flex items-center justify-center pop-out-extreme shadow-lg relative overflow-hidden">
<div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
<iconify-icon className="text-2xl animate-pulse" icon="solar:laptop-minimalistic-linear"></iconify-icon>
</div>
<div className="text-start pop-out">
<div className="flex items-center gap-2 mb-0.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
<h3 className="text-sm font-medium text-stone-800 tracking-tight" data-i18n="adm_portal">Portal Open: 2024-25</h3>
</div>
<p className="text-xs text-stone-500 uppercase tracking-[0.2em] font-medium" data-i18n="adm_init">Initialize Online Admission</p>
</div>
<div className="ms-4 w-8 h-8 rounded-full border border-rose-200 flex items-center justify-center text-rose-400 pop-out-extreme group-hover:bg-rose-400 group-hover:text-white group-hover:scale-110 transition-all duration-300">
<iconify-icon className="text-lg" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</a>
<div className="delay-400 flex flex-col sm:flex-row gap-5 sm:w-auto w-full gap-x-5 gap-y-5 items-center">
<a className="w-full sm:w-auto px-8 py-4 bg-stone-800 text-rose-50 rounded-full text-sm font-medium shadow-[0_10px_30px_rgb(41,37,36,0.2)] hover:bg-stone-700 hover:shadow-[0_15px_40px_rgb(41,37,36,0.3)] hover:-translate-y-1 transition-all duration-500 flex items-center justify-center gap-2 group tilt-element" href="#gateway">
<span className="" data-i18n="btn_support">Support Mission</span>
<iconify-icon className="text-lg group-hover:translate-x-1 transition-transform duration-500 rtl:group-hover:-translate-x-1 rtl:rotate-180" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="sm:w-auto hover:bg-white/80 hover:-translate-y-1 transition-all duration-500 flex items-center justify-center gap-2 tilt-element text-sm font-medium text-stone-700 bg-white/50 w-full border-white border rounded-full pt-4 pr-8 pb-4 pl-8 shadow-sm backdrop-blur-sm" href="#architecture">
<span className="" data-i18n="btn_explore">Explore Protocol</span>
</a>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-10 scroll-mt-20" id="architecture">
<div className="max-w-[100rem] mx-auto perspective-container">
<div className="mb-16 max-w-6xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-stone-800 mb-4" data-i18n="arch_title">System Architecture</h2>
<p className="text-stone-500 text-base font-light" data-i18n="arch_subtitle">The delicate yet robust foundation of our current operational cycle.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mr-auto ml-auto gap-x-8 gap-y-8">

<div className="md:col-span-2 relative glass-card rounded-[2.5rem] p-12 overflow-hidden group tilt-element delay-100 cursor-default">
<div className="absolute -end-20 -top-20 w-[300px] h-[300px] bg-gradient-to-bl from-rose-100 to-transparent rounded-full opacity-50 group-hover:scale-150 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-none transform translate-z-[-30px]"></div>
<div className="absolute end-8 bottom-8 text-[8rem] text-rose-50 font-arabic font-normal z-0 select-none pointer-events-none group-hover:-translate-x-4 group-hover:-translate-y-4 transition-transform duration-1000 transform translate-z-[-20px]">ﷺ</div>
<div className="relative z-10 h-full flex flex-col justify-between preserve-3d pop-out">
<div className="">
<div className="w-14 h-14 rounded-2xl bg-white/80 shadow-sm border border-white flex items-center justify-center mb-8 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500 pop-out-extreme">
<iconify-icon className="text-2xl text-rose-400" icon="solar:book-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-3xl font-medium tracking-tight mb-4 text-stone-800" data-i18n="arch_logic_title">The Logic of Ilm</h3>
<p className="leading-relaxed group-hover:text-stone-600 transition-colors duration-500 text-lg font-light text-stone-500 max-w-md" data-i18n="arch_logic_desc">
                                Currently hosting residential and day scholars. Our framework provides absolute free education, nutrition, and secure, elegant localized residency.
                            </p>
</div>
</div>
</div>

<div className="glass-card rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center group tilt-element delay-200 cursor-default">
<div className="relative w-20 h-20 rounded-full bg-white flex items-center justify-center mb-8 shadow-sm pop-out-extreme">
<div className="absolute inset-0 rounded-full border border-rose-200 scale-[1.2] opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700"></div>
<iconify-icon className="text-3xl text-rose-400" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="pop-out preserve-3d">
<h4 className="text-6xl font-medium tracking-tight text-stone-800 mb-3" dir="ltr">45<span className="text-rose-300 pop-out-extreme inline-block transition-transform duration-500">+</span></h4>
<p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium" data-i18n="arch_stat_label">Active Scholars</p>
</div>
</div>

<div className="glass-card rounded-[2.5rem] p-12 flex flex-col justify-center relative overflow-hidden group tilt-element delay-300 cursor-default">
<div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-rose-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none"></div>
<div className="relative z-10 mb-8 pop-out preserve-3d flex items-center gap-3">
<iconify-icon className="text-rose-400 text-xl pop-out-extreme" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-rose-400 text-xs font-medium uppercase tracking-[0.2em]" data-i18n="arch_verse_label">Guidance Layer</h4>
</div>
<div className="pop-out preserve-3d relative z-10">
<p className="md:text-5xl leading-[1.8] group-hover:text-rose-900 transition-colors duration-700 transform group-hover:scale-105 origin-start text-4xl text-stone-800 font-arabic" dir="rtl">مَّن ذَا الَّذِي يُقْرِضُ ٱللَّهَ</p>
<p className="text-base font-light text-stone-500 mt-6 leading-relaxed pop-out-extreme" data-i18n="arch_verse_desc">"Who will loan Allah a goodly loan..."</p>
</div>
</div>

<div className="md:col-span-2 glass-card rounded-[2.5rem] p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 group tilt-element delay-400 cursor-default">
<div className="pop-out preserve-3d">
<h4 className="text-3xl font-medium tracking-tight text-stone-800 mb-3 group-hover:text-rose-500 transition-colors duration-500 pop-out-extreme inline-block" data-i18n="arch_fin_title">Annual Operations</h4>
<p className="text-stone-500 text-base font-light block" data-i18n="arch_fin_desc">System requirements for the current nurturing cycle</p>
</div>
<div className="text-start md:text-end relative pop-out preserve-3d">
<p className="text-5xl md:text-6xl font-medium tracking-tight text-stone-800 mb-5 relative z-10 pop-out-extreme" dir="ltr">₹ 10.48L</p>
<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 border border-white shadow-sm relative z-10 pop-out-extreme">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
</div>
<p className="text-xs font-medium text-stone-600 tracking-wide" data-i18n="arch_fin_status">Status: Active Request</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden z-10 scroll-mt-20" id="admissions">
<div className="max-w-[70rem] mx-auto px-6 fade-up-wait">
<div className="perspective-container">
<div className="relative tilt-element rounded-[3rem] bg-stone-900 p-1 shadow-[0_30px_60px_rgba(225,29,72,0.15)] overflow-hidden group/admit">

<div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 via-pink-500/20 to-rose-500/20 w-[200%] animate-[blob_10s_linear_infinite] opacity-50 z-0"></div>
<div className="relative z-10 bg-stone-900 rounded-[2.8rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 preserve-3d h-full w-full overflow-hidden border border-stone-800">
<div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none mix-blend-overlay"></div>
<div className="preserve-3d text-center md:text-start pop-out">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 mb-8 pop-out-extreme">
<span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></span>
<span className="text-xs font-medium text-stone-300 tracking-widest uppercase" data-i18n="admissions_badge">Portal Active</span>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 pop-out-extreme">
<span className="" data-i18n="admissions_title_1">Digital Admission</span><br/>
<span className="text-rose-300" data-i18n="admissions_title_2">Gateway 2024-25</span>
</h2>
<p className="text-stone-400 text-lg font-light leading-relaxed max-w-md pop-out mb-8" data-i18n="admissions_desc">
                                Initiate the enrollment protocol securely. Experience a seamless digital onboarding process for the upcoming academic cycle directly via WhatsApp.
                            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 pop-out-extreme">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-stone-900 rounded-full text-sm font-medium hover:bg-rose-50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3" href="https://wa.me/916300012291?text=Hello%20Madrasa-e-Fathima%20Niswan%2C%20I%20am%20interested%20in%20initializing%20the%20online%20admission%20process%20for%20the%202024-25%20academic%20cycle.%20Please%20guide%20me." target="_blank">
<span data-i18n="btn_init_app">Initialize Application</span>
<iconify-icon className="text-lg text-rose-500 rtl:rotate-[-90deg]" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>

<div className="relative w-64 h-64 shrink-0 preserve-3d pop-out-extreme transition-transform duration-700">
<div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 to-transparent rounded-3xl border border-stone-700/50 transform translate-z-[-30px] shadow-[0_0_50px_rgba(225,29,72,0.15)]"></div>
<div className="absolute inset-4 bg-stone-800 rounded-2xl border border-stone-700 shadow-xl flex items-center justify-center transform translate-z-[20px] overflow-hidden">
<div className="w-32 h-32 bg-rose-500/20 rounded-full blur-xl absolute animate-pulse"></div>
<iconify-icon className="text-7xl text-rose-300 relative z-10" icon="solar:user-circle-linear"></iconify-icon>
</div>
<div className="absolute -end-6 -bottom-6 w-24 h-24 bg-rose-500 rounded-2xl flex items-center justify-center text-white transform translate-z-[70px] shadow-2xl rotate-12 group-hover/admit:rotate-0 transition-transform duration-700">
<iconify-icon className="text-4xl" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden scroll-mt-20 z-10 pt-32 pb-32 relative" id="prototypes">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-200/50 to-transparent"></div>
<div className="max-w-[100rem] mx-auto px-6 perspective-container">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 max-w-6xl mx-auto w-full fade-up-wait">
<div className="">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-stone-800 mb-4" data-i18n="proto_title">Campus Prototypes</h2>
<p className="text-stone-500 text-base font-light" data-i18n="proto_subtitle">Upcoming physical infrastructure and graceful environments.</p>
</div>
<div className="flex gap-3">
<button className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-stone-600 hover:text-rose-500 hover:scale-110 active:scale-95 transition-all duration-300" onclick="document.getElementById('slider').scrollBy({left: -400, behavior: 'smooth'})">
<iconify-icon className="text-xl rtl:rotate-180" icon="solar:arrow-left-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-stone-600 hover:text-rose-500 hover:scale-110 active:scale-95 transition-all duration-300" onclick="document.getElementById('slider').scrollBy({left: 400, behavior: 'smooth'})">
<iconify-icon className="text-xl rtl:rotate-180" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="max-w-6xl mx-auto delay-200 fade-up-wait">
<div className="flex gap-8 overflow-x-auto hide-scroll pb-16 pt-4 snap-x snap-mandatory px-4 -mx-4 items-center perspective-container" id="slider">

<div className="tilt-element snap-center md:snap-start shrink-0 w-[22rem] md:w-[28rem] h-[32rem] rounded-[2.5rem] glass-card p-10 flex flex-col justify-between group cursor-pointer relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-rose-100/40 to-white/0 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] z-0"></div>
<div className="relative z-10 flex flex-col h-full justify-between preserve-3d pop-out">
<div className="preserve-3d">
<span className="inline-block px-4 py-1.5 rounded-full bg-white/60 border border-white text-xs font-medium text-stone-500 mb-8 tracking-widest shadow-sm pop-out-extreme" data-i18n="proto_node1">NODE_01 // LAND</span>
<h3 className="pop-out text-3xl font-medium text-stone-800 tracking-tight mb-4" data-i18n="proto_node1_title">1/2 Acre Vision</h3>
<p className="text-stone-500 text-base font-light leading-relaxed pop-out" data-i18n="proto_node1_desc">
                                    Acquiring primary land mass to compile a permanent, high-tech campus dedicated entirely to female scholars in an elegant setting.
                                </p>
</div>
<div className="w-full bg-stone-100/80 h-1.5 rounded-full overflow-hidden shadow-inner pop-out-extreme">
<div className="bg-gradient-to-r from-rose-300 to-pink-400 h-full w-1/3 rounded-full group-hover:w-1/2 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] relative overflow-hidden">
<div className="absolute inset-0 bg-white/40 w-full -translate-x-full group-hover:translate-x-full transition-transform duration-1000 delay-300 rtl:translate-x-full rtl:group-hover:-translate-x-full"></div>
</div>
</div>
</div>
</div>

<div className="tilt-element snap-center md:snap-start shrink-0 w-[22rem] md:w-[28rem] h-[32rem] rounded-[2.5rem] glass-card p-10 flex flex-col justify-between group cursor-pointer relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-pink-50/60 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>
<div className="relative z-10 flex flex-col h-full justify-between preserve-3d pop-out">
<div className="preserve-3d">
<span className="inline-block px-4 py-1.5 rounded-full bg-white/60 border border-white text-xs font-medium text-stone-500 mb-8 tracking-widest shadow-sm pop-out-extreme" data-i18n="proto_node2">NODE_02 // COST</span>
<h3 className="text-3xl font-medium tracking-tight text-stone-800 mb-4 pop-out" data-i18n="proto_node2_title" dir="ltr">₹ 2,000 / sqft</h3>
<p className="text-stone-500 text-base font-light leading-relaxed pop-out" data-i18n="proto_node2_desc">
                                    Micro-transactions enabled. Contribute per square foot to mathematically build the permanent, graceful house of Ilm.
                                </p>
</div>
<div className="flex items-center gap-4 pop-out-extreme group-hover:translate-x-2 rtl:group-hover:-translate-x-2 transition-transform duration-500">
<div className="w-12 h-12 rounded-full border border-rose-100 flex items-center justify-center bg-white group-hover:bg-rose-400 transition-colors duration-500 shadow-sm">
<iconify-icon className="group-hover:text-white transition-colors duration-500 text-xl text-rose-400" height="20" icon="solar:calculator-linear" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-wide text-stone-600 group-hover:text-stone-900 transition-colors duration-500" data-i18n="btn_calc">Calculate Share</span>
</div>
</div>
</div>

<div className="tilt-element snap-center md:snap-start shrink-0 w-[22rem] md:w-[28rem] h-[32rem] rounded-[2.5rem] bg-stone-800 p-10 flex flex-col justify-between group cursor-pointer relative overflow-hidden shadow-[0_20px_40px_rgb(41,37,36,0.1)]">
<div className="absolute inset-0 bg-gradient-to-br from-stone-700 to-stone-900 scale-110 group-hover:scale-100 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] z-0"></div>
<div className="relative z-10 flex flex-col h-full justify-between preserve-3d pop-out">
<div className="preserve-3d">
<span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-stone-300 mb-8 tracking-widest pop-out-extreme" data-i18n="proto_node3">NODE_03 // ACTIVE</span>
<h3 className="text-3xl font-medium tracking-tight text-rose-50 mb-4 pop-out" data-i18n="proto_node3_title">Sadaqah Jariyah</h3>
<p className="text-stone-400 text-base font-light leading-relaxed pop-out" data-i18n="proto_node3_desc">
                                    An infinite loop. A legacy protocol that continues to process rewards exponentially, independent of time, radiating light forever.
                                </p>
</div>
<div className="flex justify-between items-center w-full pop-out-extreme">
<div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-r from-rose-300 to-white w-full rounded-full animate-pulse opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="ms-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:rotate-45 transition-transform duration-500">
<iconify-icon className="text-xl text-rose-100" icon="solar:infinity-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="flex-grow scroll-mt-20 z-10 pt-32 pr-6 pb-32 pl-6 relative perspective-container" id="gateway">
<div className="max-w-[70rem] mx-auto fade-up-wait">
<div className="tilt-element glass-card md:p-20 overflow-hidden group rounded-[3rem] pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute top-0 end-0 w-[400px] h-[400px] bg-rose-100/50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-rose-200/50 transition-colors duration-1000 transform translate-z-[-50px]"></div>
<div className="grid md:grid-cols-2 preserve-3d pop-out z-10 relative gap-x-20 gap-y-20 items-center">

<div className="preserve-3d">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-white shadow-sm mb-10 pop-out-extreme">
<div className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
<span className="text-xs font-medium text-stone-600 tracking-wide" data-i18n="gate_secure">Secure Gateway Connection</span>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-stone-800 mb-10 pop-out" data-i18n="gate_title">Initialize Support.</h2>
<div className="space-y-5 preserve-3d">

<div className="tilt-element p-8 rounded-[2rem] bg-white/50 backdrop-blur-sm border border-white shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(225,29,72,0.1)] hover:bg-white/80 transition-all duration-500 cursor-default">
<p className="text-stone-400 text-xs font-medium uppercase tracking-[0.2em] mb-3 pop-out-extreme" data-i18n="gate_bank">Bank Credentials</p>
<div className="flex justify-between items-center mb-2 pop-out-extreme">
<p className="text-stone-800 text-2xl font-medium tracking-tight" dir="ltr">SBI: 00000044828743507</p>
<button className="text-stone-400 hover:text-rose-500 transition-colors p-3 rounded-xl hover:bg-rose-50 bg-white shadow-sm" onclick="alert('Copied to clipboard')" title="Copy Account Number">
<iconify-icon className="text-xl" icon="solar:copy-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<p className="text-stone-500 text-sm font-light pop-out" dir="ltr">IFSC: SBIN0000763</p>
</div>

<div className="tilt-element p-8 rounded-[2rem] bg-white/50 backdrop-blur-sm border border-white shadow-[0_4px_20px_rgb(0,0,0,0.02)] flex items-center justify-between hover:shadow-[0_15px_40px_rgba(225,29,72,0.1)] hover:bg-white/80 transition-all duration-500 cursor-pointer" onclick="window.open('https://wa.me/916300012291', '_blank')">
<div className="flex items-center gap-5 pop-out-extreme">
<div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center transition-all duration-500">
<iconify-icon className="text-xl text-rose-400" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-stone-800 text-lg font-medium" dir="ltr">+91 63000 12291</span>
</div>
<div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center text-rose-50 shadow-md pop-out-extreme">
<iconify-icon className="text-xl rtl:rotate-[-90deg]" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="flex flex-col preserve-3d pop-out relative items-center justify-center">
<div className="absolute w-[300px] h-[300px] border border-rose-200/50 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-20 pointer-events-none transform translate-z-[-30px]"></div>
<div className="tilt-element group/qr cursor-pointer hover:shadow-[0_40px_80px_rgba(225,29,72,0.15)] bg-red-100/80 w-72 h-72 border-white border rounded-[2.5rem] px-8 py-8 relative shadow-[0_20px_50px_rgb(225,29,72,0.05)] backdrop-blur-md">
<div className="flex group-hover/qr:bg-rose-50/30 transition-colors duration-700 overflow-hidden pop-out-extreme bg-stone-50 w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b494141a-4c40-4880-a182-cc2573cdbcb0_3840w.png)] bg-contain border-stone-100 border rounded-2xl relative items-center justify-center">
</div><div className="absolute inset-x-8 top-8 h-[2px] bg-gradient-to-r from-transparent via-rose-400 to-transparent shadow-[0_0_15px_rgba(251,113,133,0.8)] z-20 opacity-0 group-hover/qr:animate-[scanLaser_2s_ease-in-out_infinite] rounded-full transform translate-z-[30px]"></div>
</div>
<div className="mt-12 flex items-center gap-3 bg-white/50 px-5 py-2.5 rounded-full border border-white shadow-sm pop-out cursor-default">
<span className="w-2.5 h-2.5 bg-rose-300 rounded-full animate-pulse shadow-[0_0_8px_rgba(251,113,133,0.5)]"></span>
<p className="text-xs font-medium text-stone-500 tracking-[0.2em] uppercase" data-i18n="gate_await">
                                Awaiting Transaction
                            </p>
</div>
</div>
</div>
</div>
</div>
</section><section className="py-32 relative z-10 scroll-mt-20 overflow-hidden" id="reviews">
<div className="max-w-[100rem] mr-auto ml-auto pr-6 pl-6 perspective-container">

<div className="mb-20 max-w-6xl mx-auto text-center fade-up-wait">
<p className="uppercase text-xs font-medium text-stone-500 tracking-widest mb-3" data-i18n="reviews_label">OUR MADRASA-E-FATHIMA NISWAN EDU (T) </p>
<section className="mt-10">
<div className="flex sm:mb-8 mb-6 items-end justify-between">
<div className="">
<p className="text-[11px] sm:text-xs uppercase text-neutral-500 tracking-widest font-geist">(01) Recent Work</p>
<h3 className="mt-2 text-2xl sm:text-3xl tracking-tight font-geist font-medium">Stories worth telling.</h3>
</div>
<a className="hidden sm:inline-flex items-center gap-2 ring-1 ring-neutral-200 hover:shadow text-sm text-neutral-700 font-geist bg-white rounded-full pt-2 pr-4 pb-2 pl-4" href="#work">
                            View All Photos
                            <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M7 7h10v10"></path><path className="" d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">

<div className="flex flex-col gap-4 sm:gap-5">
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="#work">
<img alt="Wedding ceremony" className="h-56 w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/43aa6a23-bcb0-4a3e-ba37-eb0ecaa31528_3840w.jpg"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">Independence Day </p>
<div className="mt-1 flex items-center justify-between">
<h4 className="sm:text-lg text-base font-medium text-white tracking-tight font-geist">we love our country</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a>
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="#work">
<img alt="Family portrait" className="h-72 w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3321715e-5481-4677-8ba4-977bae15c48c_800w.jpg"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">top floor • Look </p>
<div className="mt-1 flex items-center justify-between">
<h4 className="sm:text-lg text-base font-medium text-white tracking-tight font-geist">Morning Prayer</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a><a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="#work">
<img alt="Corporate event" className="h-56 w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5794941d-a2ee-4408-87b0-3da7f26b40fe_3840w.jpg"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">Corporate • Events</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="sm:text-lg text-base font-medium text-white tracking-tight font-geist">students Summit 2025</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a>
</div>

<div className="flex flex-col gap-4 sm:gap-5">
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="#work">
<img alt="Maternity shoot" className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d09c8ce-cb2d-493c-9f65-1296d12fc3ac_3840w.jpg"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">Maternity • Lifestyle</p>
<div className="flex mt-1 items-center justify-between">
<h4 className="sm:text-lg text-base font-medium text-white tracking-tight font-geist">Hadees classes</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a>
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="#work">
<img alt="Engagement shoot" className="h-56 w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/12159758-33e8-4a9f-af33-359746f263e5_3840w.jpg"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">listening • Indoor</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="sm:text-lg text-base font-medium text-white tracking-tight font-geist">Hall Area</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a><a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="#work">
<img alt="Branding project" className="h-64 w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7409d6d1-1f33-4cf8-b484-c2987927873f_3840w.jpg"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 pt-5 pr-5 pb-5 pl-5">
<p className="text-xs text-white/70 font-geist">spritual • Visual Identity</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="sm:text-lg text-base font-medium text-white tracking-tight font-geist">praying salah</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a>
</div>

<div className="flex flex-col gap-4 sm:gap-5">
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="#work">
<img alt="Corporate headshots" className="h-72 w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/40b4e450-99b5-4324-a665-44d3ae4efe46_3840w.jpg"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">Corporate • </p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Professional Series</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a>
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="#work">
<img alt="Newborn photography" className="transition-transform duration-500 group-hover:scale-105 w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d526413-56ce-4f9e-b002-acc6f9d5a98f_3840w.jpg"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">ceremony • jalsa</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="sm:text-lg text-base font-medium text-white tracking-tight font-geist">Annaual Day</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a><a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="#work">
<img alt="Fashion editorial" className="h-64 w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a8c0295a-cdc8-49dc-8b04-4d7071a05858_800w.jpg"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">learning • white board</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="sm:text-lg text-base font-medium text-white tracking-tight font-geist">special classes</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a>
</div>
</div>
<div className="mt-8 sm:mt-10 flex justify-center">
<a className="inline-flex items-center gap-2 hover:shadow text-sm text-neutral-700 font-geist bg-white ring-neutral-200 ring-1 rounded-full pt-3 pr-5 pb-3 pl-5" href="#work">
                            View Full Gallery
                            <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M7 7h10v10"></path><path className="" d="M7 17 17 7"></path></svg>
</a>
</div>
</section>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-center py-12 fade-up-wait min-h-[450px] -space-y-16 md:-space-y-0 md:-space-x-12 preserve-3d">

<div className="w-[300px] md:w-[340px] h-[340px] tilt-element glass-card rounded-[2.5rem] p-8 flex flex-col relative transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-6 md:hover:-translate-y-8 hover:rotate-0 hover:z-50 z-10 transform -rotate-6 md:-rotate-12 shadow-[0_20px_40px_rgba(225,29,72,0.05)] cursor-default bg-white/60 hover:bg-white/90 group hover:shadow-[0_40px_80px_rgba(225,29,72,0.1)]">
<div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="preserve-3d pop-out h-full flex flex-col relative z-10">
<div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl mb-6 bg-white shadow-sm border border-rose-50 pop-out-extreme group-hover:scale-110 group-hover:border-rose-100 transition-all duration-500">
<svg className="text-rose-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<p className="text-sm leading-relaxed mb-auto text-stone-500 font-light pop-out group-hover:text-stone-700 transition-colors duration-500">
                        Working with Jin was transformative. The design elevated our brand and user experience to new heights. Their attention to detail is unmatched.
                    </p>
<div className="pt-5 border-t border-stone-200/50 flex items-center justify-between pop-out-extreme mt-6 group-hover:border-rose-100 transition-colors duration-500">
<div className="flex items-center gap-3">
<img alt="Alex Rivera" className="h-10 w-10 rounded-full object-cover shadow-sm border-2 border-white bg-stone-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a473313f-eba8-4077-ba68-13b30b708d43_320w.png?w=800&amp;q=80"/>
<div>
<div className="text-xs font-medium text-stone-800 tracking-tight">Alex Rivera</div>
<div className="text-[10px] text-stone-400 uppercase tracking-widest font-medium mt-0.5">CEO, GrowthLabs</div>
</div>
</div>
<div className="flex items-center gap-1.5 bg-white/80 px-2.5 py-1.5 rounded-lg shadow-sm border border-white">
<svg className="text-rose-400" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<span className="text-xs font-medium text-stone-600">5.0</span>
</div>
</div>
</div>
</div>

<div className="w-[300px] md:w-[340px] h-[340px] tilt-element glass-card rounded-[2.5rem] p-8 flex flex-col relative transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-6 md:hover:-translate-y-8 hover:rotate-0 hover:z-50 z-20 transform rotate-2 md:-rotate-2 shadow-[0_25px_50px_rgba(225,29,72,0.08)] cursor-default bg-white/70 hover:bg-white/90 group md:-mt-8" style={{transform: 'perspective(1200px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)'}}>
<div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="preserve-3d pop-out h-full flex flex-col relative z-10">
<div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl mb-6 bg-white shadow-sm border border-rose-50 pop-out-extreme group-hover:scale-110 group-hover:border-rose-100 transition-all duration-500">
<svg className="text-rose-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<p className="text-sm leading-relaxed mb-auto text-stone-500 font-light pop-out group-hover:text-stone-700 transition-colors duration-500">masha allah madrasa e fathima niswan the student displine and the studies are good please vist once</p>
<div className="pt-5 border-t border-stone-200/50 flex items-center justify-between pop-out-extreme mt-6 group-hover:border-rose-100 transition-colors duration-500">
<div className="flex items-center gap-3">
<img alt="Nina Patel" className="h-10 w-10 rounded-full object-cover shadow-sm border-2 border-white bg-stone-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/160a25ab-329d-4740-8101-e786bf07bc25_320w.png?w=800&amp;q=80"/>
<div className="">
<div className="text-xs font-medium text-stone-800 tracking-tight">Nina Patel</div>
<div className="text-[10px] text-stone-400 uppercase tracking-widest font-medium mt-0.5">Director, PixelCraft</div>
</div>
</div>
<div className="flex items-center gap-1.5 bg-white/80 px-2.5 py-1.5 rounded-lg shadow-sm border border-white">
<svg className="text-rose-400" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<span className="text-xs font-medium text-stone-600">5.0</span>
</div>
</div>
</div>
</div>

<div className="w-[300px] md:w-[340px] h-[340px] tilt-element glass-card rounded-[2.5rem] p-8 flex flex-col relative transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-6 md:hover:-translate-y-8 hover:rotate-0 hover:z-50 z-30 transform rotate-6 md:rotate-8 shadow-[0_20px_40px_rgba(225,29,72,0.05)] cursor-default bg-white/60 hover:bg-white/90 group">
<div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="preserve-3d pop-out h-full flex flex-col relative z-10">
<div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl mb-6 bg-white shadow-sm border border-rose-50 pop-out-extreme group-hover:scale-110 group-hover:border-rose-100 transition-all duration-500">
<svg className="text-rose-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<p className="text-sm leading-relaxed mb-auto text-stone-500 font-light pop-out group-hover:text-stone-700 transition-colors duration-500">
                        Exceptional designer with a strategic mindset. Jin helped us rethink our entire product experience from the ground up.
                    </p>
<div className="pt-5 border-t border-stone-200/50 flex items-center justify-between pop-out-extreme mt-6 group-hover:border-rose-100 transition-colors duration-500">
<div className="flex items-center gap-3">
<img alt="Marcus Webb" className="h-10 w-10 rounded-full object-cover shadow-sm border-2 border-white bg-stone-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eec93883-63c1-4b1d-a973-0b6fb859e85e_320w.webp"/>
<div className="">
<div className="text-xs font-medium text-stone-800 tracking-tight">Marcus Webb</div>
<div className="text-[10px] text-stone-400 uppercase tracking-widest font-medium mt-0.5">VP Product, Velocity</div>
</div>
</div>
<div className="flex items-center gap-1.5 bg-white/80 px-2.5 py-1.5 rounded-lg shadow-sm border border-white">
<svg className="text-rose-400" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<span className="text-xs font-medium text-stone-600">5.0</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="text-center bg-white/40 z-10 border-white border-t mt-auto pt-12 pb-12 relative backdrop-blur-xl perspective-container">
<div className="flex flex-col items-center gap-5 preserve-3d tilt-element inline-block mx-auto p-4 rounded-3xl cursor-default">
<div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center pop-out shadow-sm border border-rose-100">
<iconify-icon className="text-rose-400 text-xl" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-2 pop-out-extreme">
<span className="text-sm font-medium tracking-tight text-stone-800" data-i18n="brand_name">MEFNET</span>
<p className="text-[10px] md:text-xs font-medium uppercase tracking-[0.3em] text-stone-400" data-i18n="footer_text">
                    End of Protocol // 2026 // Hospet Node
                </p>
</div>
</div>
</footer>



    </>
  );
}
