import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



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



// Fix for 'More Projects' dropdown interaction
window.showProject = function(index) {
// Hide all preview cards
const allPreviews = document.querySelectorAll('[id^="nav-preview-"]');
allPreviews.forEach(el => {
el.classList.add('opacity-0', 'pointer-events-none');
el.classList.remove('z-10');
});
// Show the hovered project's preview
const target = document.getElementById('nav-preview-' + index);
if (target) {
target.classList.remove('opacity-0', 'pointer-events-none');
target.classList.add('z-10');
}
};
// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
const dropdown = document.getElementById('projects-dropdown');
if (!dropdown || dropdown.classList.contains('invisible')) return;
const isClickInside = dropdown.contains(e.target);
const btn = e.target.closest('button');
const isToggleButton = btn && btn.textContent.includes('More Projects');
if (!isClickInside && !isToggleButton) {
dropdown.classList.add('opacity-0', 'invisible', 'translate-y-2');
dropdown.classList.remove('opacity-100', 'visible', 'translate-y-0');
}
});



                window.painPoints = [
                  {
                    title: "The \"Endless Tree\" Navigation",
                    desc: "Finding a single setting requires clicking through 10+ layers of nested folders. This forces Admins to rely on memorization rather than intuitive discovery, making the tool impossible for new users to learn without extensive training.",
                    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a82c0b67-f3fd-4dd4-bf87-22467336cc9e_3840w.png"
                  },
                  {
                    title: "Disjointed Pop-up Windows",
                    desc: "The workflow is fragmented across multiple separate applications (Console, Editor, Status Viewer). Users constantly lose context as they jump between disjointed windows to complete a single task.",
                    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/309fe7a0-ecf7-4e13-996e-c4792fd07716_1600w.png"
                  },
                  {
                    title: "Invisible Status",
                    desc: "Flying Blind (High Anxiety) - The interface is purely for \"definition,\" not \"monitoring.\" It lacks visual feedback (like green checks or error alerts), leaving Admins in the dark about whether their policies were actually applied successfully on the devices.",
                    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/efbdb5d0-04df-4398-83b8-35b96ba6d3ec_3840w.png"
                  },
                  {
                    title: "Manual Input",
                    desc: "Manual Scripting Required: Users are often forced to exit the UI and write raw scripts or edit registry values to achieve advanced configurations. A single syntax error can silently fail the entire policy deployment.",
                    img: "https://hoirqrkdgbmvpwutwuwj.supabase.c28-41fd-b02e-6d730184685d_3840w.png"
                  }
                ];

                window.updatePainPoint = function(index) {
                  const buttons = document.querySelectorAll('.pp-tab-btn');
                  const spans = document.querySelectorAll('.pp-tab-btn span');

                  buttons.forEach((btn, i) => {
                    const span = spans[i];
                    if (i === index) {
                      btn.className = "pp-tab-btn transition-all flex gap-2 group text-sm font-semibold text-[#455381] bg-white w-full md:w-auto border-[#455381] border-b-2 pt-4 pr-6 pb-4 pl-6 items-center justify-center cursor-default";
                      span.className = "text-[#455381] font-mono font-bold";
                    } else {
                      btn.className = "pp-tab-btn transition-all flex gap-2 hover:text-neutral-800 hover:bg-white/50 group text-sm font-semibold text-neutral-500 w-full md:w-auto border-transparent border-b-2 pt-4 pr-6 pb-4 pl-6 items-center justify-center cursor-pointer";
                      span.className = "text-neutral-400 group-hover:text-neutral-600 font-mono transition-colors";
                    }
                  });

                  const data = window.painPoints[index];
                  const img = document.getElementById('pp-image');
                  const desc = document.getElementById('pp-desc');
                  const title = document.getElementById('pp-title');

                  if (img && desc && title) {
                    // Start fade out
                    img.style.opacity = '0.4';
                    desc.parentElement.style.opacity = '0.5';

                    setTimeout(() => {
                      img.src = data.img;
                      title.textContent = data.title;
                      desc.textContent = data.desc;

                      // Fade in
                      img.onload = () => { img.style.opacity = '1'; };
                      desc.parentElement.style.opacity = '1';
                    }, 200);
                  }
                };
              


                  window.updateSolution = function(index) {
                                                        const solutionData = [{
                                                            img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab1cd31e-0bc0-4210-855f-37451330c75e_original.GIF",
                                                            pain: "Administrators struggled with flattened, unstructured policy lists and were forced to exit the workflow to verify version updates. This lack of hierarchy and context led to high cognitive load and \"update fatigue.\"",
                                                            desc: "We restructured the interface with OS-level grouping and integrated hover-triggered change logs. This empowers users to visualize fleet coverage and validate version differences instantly—zero navigation required."
                                                          },
                                                          {
                                                            img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/021e7ff6-7781-479c-8b25-2c5f10aa2a2d_original.GIF",
                                                            pain: "Legacy interfaces relied on generic string inputs for all data types (e.g., Boolean, Integer). Administrators frequently entered invalid formats—such as typing \"Yes\" instead of \"true\"—leading to frequent validation failures and deployment rollbacks.",
                                                            desc: "The redesigned wizard replaces raw text fields with type-specific controls, such as toggle switches for booleans and validated inputs for integers. By constraining user input to valid states only, the design eliminates syntax errors and significantly accelerates the configuration process."
                                                          },
                                                          {
                                                            img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8a925e03-f7fb-4196-821e-870f1585c6e0_original.GIF",
                                                            pain: "Previously, the confirmation screen displayed raw API values (e.g., \"false\", \"null\"), forcing administrators to mentally decode complex configurations. This ambiguity created critical security blind spots, where high-risk settings (like disabling password complexity) could be deployed inadvertently.",
                                                            desc: "The design transforms the review experience into a human-readable safety net. By translating boolean code into clear states (Disabled/Enabled) and integrating just-in-time risk alerts (via tooltips), the interface empowers users to identify and remediate vulnerabilities instantly before committing to production."
                                                          },
                                                          {
                                                            img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/16c9431b-954a-4253-83b2-207f1548097b_original.GIF",
                                                            pain: "Legacy reporting provided simple \"Pass/Fail\" states, which failed to convey the magnitude of issues (e.g., failing 1 setting vs. 50). This lack of nuance hindered effective triage, causing teams to waste time investigating minor drifts while missing critical failures.",
                                                            desc: "The interface implements density-based progress bars within the list view (e.g., visualizing 6/24 failed checks). This visual granularity empowers users to differentiate between minor configuration gaps and systemic breakdowns instantly, ensuring that the most degraded systems are prioritized for remediation."
                                                          }
                                                        ];

                                                        const data = solutionData[index];
                                                        const container = document.getElementById('solution-viewer');
                                                        const img = document.getElementById('sol-image');
                                                        const pain = document.getElementById('sol-pain');
                                                        const desc = document.getElementById('sol-desc');

                                                        if (container) {
                                                          const btns = container.querySelectorAll('.tab-btn');
                                                          btns.forEach((btn, i) => {
                                                            if (i === index) {
                                                              btn.className = "tab-btn w-full md:w-auto px-6 py-4 text-sm font-semibold text-[#455381] border-b-2 border-[#455381] bg-white transition-all duration-300 flex items-center justify-center gap-2 cursor-default";
                                                            } else {
                                                              btn.className = "tab-btn w-full md:w-auto px-6 py-4 text-sm font-semibold text-neutral-500 border-b-2 border-transparent hover:text-neutral-800 hover:bg-white/50 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer";
                                                            }
                                                          });
                                                        }

                                                        if (img) {
                                                          img.style.opacity = '0';
                                                          img.style.transform = 'scale(0.98)';
                                                          setTimeout(() => {
                                                            img.src = data.img;
                                                            const onLoad = () => {
                                                              img.style.opacity = '1';
                                                              img.style.transform = 'scale(1)';
                                                            };
                                                            if (img.complete) {
                                                              onLoad();
                                                            } else {
                                                              img.onload = onLoad;
                                                            }
                                                          }, 200);
                                                        }

                                                        const updateText = (el, text) => {
                                                          if (el) {
                                                            el.style.opacity = '0';
                                                            el.style.transform = 'translateY(4px)';
                                                            setTimeout(() => {
                                                              el.textContent = text;
                                                              el.style.opacity = '1';
                                                              el.style.transform = 'translateY(0)';
                                                            }, 200);
                                                          }
                                                        };

                                                        updateText(pain, data.pain);
                                                        updateText(desc, data.desc);
                                                      };
                
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
    No Status Indicator
    <meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Project Case Study - Azure Arc</title>
<meta content="UX Case Study" name="description"/>


<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<style>
      html {
      scroll-behavior: smooth;
      scroll-padding-top: 120px;
      }
      body {
      font-family: 'Manrope', sans-serif;
      background-color: #F4F4F5;
      color: #171717;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      }
      /* --- BACKGROUND EFFECTS --- */
      .bokeh-container {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 0;
      overflow: hidden;
      background: transparent;
      }
      .bokeh {
      position: absolute;
      border-radius: 50%;
      filter: blur(var(--blur));
      opacity: 0.8;
      animation: float-bokeh var(--duration) infinite ease-in-out var(--delay);
      mix-blend-mode: multiply;
      }
      @keyframes float-bokeh {
      0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
      50% { transform: translate(var(--move-x), var(--move-y)) scale(1.1); opacity: 0.6; }
      }
      .bg-noise {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 40;
      opacity: 0.04;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
      mix-blend-mode: overlay;
      }
      .bg-grid {
      background-size: 40px 40px;
      background-image:
      linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px);
      position: fixed;
      inset: 0;
      z-index: -1;
      mask-image: radial-gradient(circle at 50% 30%, black 50%, rgba(0,0,0,0.2) 100%);
      }
      /* --- UI COMPONENTS --- */
      .glass-card {
      background: rgba(255, 255, 255, 0.65);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border: 1px solid rgba(255, 255, 255, 0.4);
      box-shadow:
      0 8px 32px 0 rgba(31, 38, 135, 0.07),
      inset 0 0 0 1px rgba(255, 255, 255, 0.2);
      }
      .content-card {
      background: rgba(255, 255, 255, 0.75);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border: 1px solid rgba(255, 255, 255, 0.5);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.05);
      border-radius: 1rem;
      overflow: hidden;
      }
      .toc-link.active {
      color: #171717;
      font-weight: 600;
      border-left-color: #455381;
      background: linear-gradient(to right, rgba(69,83,129,0.1), transparent);
      }
      .image-container {
      position: relative;
      overflow: hidden;
      border-radius: 0.5rem;
      border: 1px solid rgba(0,0,0,0.08);
      }
      ::selection { background: #455381; color: white; }
    </style>

<link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-geist" rel="stylesheet"/>
<style id="all-fonts-style-font-geist">
      .font-geist { font-family: 'Geist', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-roboto" rel="stylesheet"/>
<style id="all-fonts-style-font-roboto">
      .font-roboto { font-family: 'Roboto', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-montserrat" rel="stylesheet"/>
<style id="all-fonts-style-font-montserrat">
      .font-montserrat { font-family: 'Montserrat', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-poppins" rel="stylesheet"/>
<style id="all-fonts-style-font-poppins">
      .font-poppins { font-family: 'Poppins', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&amp;display=swap" id="all-fonts-link-font-playfair" rel="stylesheet"/>
<style id="all-fonts-style-font-playfair">
      .font-playfair { font-family: 'Playfair Display', serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;500;600;700&amp;display=swap" id="all-fonts-link-font-instrument-serif" rel="stylesheet"/>
<style id="all-fonts-style-font-instrument-serif">
      .font-instrument-serif { font-family: 'Instrument Serif', serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&amp;display=swap" id="all-fonts-link-font-merriweather" rel="stylesheet"/>
<style id="all-fonts-style-font-merriweather">
      .font-merriweather { font-family: 'Merriweather', serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-bricolage" rel="stylesheet"/>
<style id="all-fonts-style-font-bricolage">
      .font-bricolage { font-family: 'Bricolage Grotesque', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&amp;display=swap" id="all-fonts-link-font-jakarta" rel="stylesheet"/>
<style id="all-fonts-style-font-jakarta">
      .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-space-grotesk" rel="stylesheet"/>
<style id="all-fonts-style-font-space-grotesk">
      .font-space-grotesk { font-family: 'Space Grotesk', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800&amp;display=swap" id="all-fonts-link-font-work-sans" rel="stylesheet"/>
<style id="all-fonts-style-font-work-sans">
      .font-work-sans { font-family: 'Work Sans', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&amp;display=swap" id="all-fonts-link-font-pt-serif" rel="stylesheet"/>
<style id="all-fonts-style-font-pt-serif">
      .font-pt-serif { font-family: 'PT Serif', serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-geist-mono" rel="stylesheet"/>
<style id="all-fonts-style-font-geist-mono">
      .font-geist-mono { font-family: 'Geist Mono', monospace !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&amp;display=swap" id="all-fonts-link-font-space-mono" rel="stylesheet"/>
<style id="all-fonts-style-font-space-mono">
      .font-space-mono { font-family: 'Space Mono', monospace !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-quicksand" rel="stylesheet"/>
<style id="all-fonts-style-font-quicksand">
      .font-quicksand { font-family: 'Quicksand', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&amp;display=swap" id="all-fonts-link-font-nunito" rel="stylesheet"/>
<style id="all-fonts-style-font-nunito">
      .font-nunito { font-family: 'Nunito', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400..800&amp;display=swap" id="all-fonts-link-font-newsreader" rel="stylesheet"/>
<style id="all-fonts-style-font-newsreader">
      .font-newsreader { font-family: 'Newsreader', serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@400;500;600;700&amp;display=swap" id="all-fonts-link-font-google-sans-flex" rel="stylesheet"/>
<style id="all-fonts-style-font-google-sans-flex">
      .font-google-sans-flex { font-family: 'Google Sans Flex', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-oswald" rel="stylesheet"/>
<style id="all-fonts-style-font-oswald">
      .font-oswald { font-family: 'Oswald', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-dm-sans" rel="stylesheet"/>
<style id="all-fonts-style-font-dm-sans">
      .font-dm-sans { font-family: 'DM Sans', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&amp;display=swap" id="all-fonts-link-font-manrope" rel="stylesheet"/>
<style id="all-fonts-style-font-manrope">
      .font-manrope { font-family: 'Manrope', sans-serif !important; }
    </style>

<div className="bokeh-container" style={{}}>
<div className="bokeh" style={{width: '50vw', height: '50vw', top: '-10%', left: '-10%', background: 'radial-gradient(circle, rgba(113, 146, 146, 0.35) 0%, transparent 65%)', -Blur: '60px', -Duration: '20s', -Delay: '0s', -MoveX: '10vw', -MoveY: '10vh'}}></div>
<div className="bokeh" style={{width: '60vw', height: '60vw', bottom: '-20%', right: '-20%', background: 'radial-gradient(circle, rgba(69, 83, 129, 0.3) 0%, transparent 70%)', -Blur: '70px', -Duration: '25s', -Delay: '-5s', -MoveX: '-10vw', -MoveY: '-10vh'}}></div>
</div>
<div className="bg-grid" style={{}}></div>
<div className="bg-noise" style={{}}></div>
    Azure Machine Configuration
    
<nav className="fixed z-50 flex lg:px-12 transition-all duration-300 bg-white/70 h-16 border-black/5 border-b pr-6 pl-6 top-0 right-0 left-0 backdrop-blur-xl items-center justify-between" style={{}}>
<a className="group flex items-center gap-2 hover:text-neutral-900 transition-colors text-base font-semibold text-neutral-600" href="/index">
<div className="group-hover:bg-[#455381] group-hover:text-white transition-colors duration-300 cursor-pointer bg-neutral-100 rounded-md pt-1.5 pr-1.5 pb-1.5 pl-1.5" onclick="window.location.href='/homepage';window.location.href='/homepage'" role="button">
<svg className="lucide lucide-arrow-left w-4 h-4" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 19-7-7 7-7"></path>
<path d="M19 12H5"></path>
</svg>
</div>
<span className="tracking-tight">Portfolio Home</span>
</a>
<div className="flex items-center gap-4">
<div className="hidden md:block relative gap-x-1.5 gap-y-1.5">
<div className="transition-all duration-300 origin-top-right -right-4 w-[960px] pt-6 absolute top-full right-0 gap-x-1.5 gap-y-1.5 opacity-0 invisible translate-y-2" id="projects-dropdown">
<div className="flex overflow-hidden bg-white w-full border-white/60 border ring-black/5 ring-1 rounded-2xl pt-0 pr-0 pb-0 pl-0 shadow-2xl gap-x-1.5 gap-y-1.5 h-[740px]">

<div className="w-[340px] flex flex-col bg-neutral-50/50 backdrop-blur-xl border-r border-neutral-200/60 flex-shrink-0">
<div className="px-5 py-4 border-b border-neutral-200/50 flex items-center justify-between">
<span className="text-xs text-neutral-400 uppercase tracking-widest font-semibold">
                    Selected Work
                  </span>
</div>
<div className="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar">

<a className="group/item flex items-center justify-between transition-all duration-200 bg-white border-neutral-100 border rounded-xl pt-4 pr-5 pb-4 pl-5 relative shadow-[0_2px_8px_rgba(0,0,0,0.04)]" href="/machine-configuration" onmouseenter="showProject(0)">
<span className="text-[15px] font-medium text-[#455381] transition-colors">
                      01 / Azure Machine Configuration
                    </span>
<svg className="text-[#455381] opacity-100 translate-x-0 transition-all" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>

<a className="group/item flex items-center justify-between hover:bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:scale-[1.02] transition-all duration-200 hover:border-neutral-100 border-transparent border rounded-xl pt-4 pr-5 pb-4 pl-5 relative" href="/arc-service-management" onmouseenter="showProject(1)">
<span className="text-[15px] font-medium text-neutral-700 group-hover/item:text-[#455381] transition-colors">
                      02 / Azure Arc Service Management
                    </span>
<svg className="text-[#455381] opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>

<a className="group/item flex items-center justify-between hover:bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:scale-[1.02] transition-all duration-200 hover:border-neutral-100 border-transparent border rounded-xl pt-4 pr-5 pb-4 pl-5 relative" href="/azure-resource-change-portal" onmouseenter="showProject(2)">
<span className="text-[15px] font-medium text-neutral-700 group-hover/item:text-[#455381] transition-colors">
                      03 / Azure Resource Change Portal
                    </span>
<svg className="text-[#455381] opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>

<a className="group/item flex items-center justify-between px-5 py-4 rounded-xl hover:bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:scale-[1.02] transition-all duration-200 border border-transparent hover:border-neutral-100 relative" href="#" onmouseenter="showProject(3)">
<span className="text-[15px] font-medium text-neutral-700 group-hover/item:text-[#455381] transition-colors">
                      04 / Soca Network
                    </span>
<svg className="text-[#455381] opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>

<a className="group/item flex items-center justify-between hover:bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:scale-[1.02] transition-all duration-200 hover:border-neutral-100 border-transparent border rounded-xl pt-4 pr-5 pb-4 pl-5 relative" href="/fiori-design-system" onmouseenter="showProject(4)">
<span className="text-[15px] font-medium text-neutral-700 group-hover/item:text-[#455381] transition-colors">
                      05 / SAP Fiori Design System
                    </span>
<svg className="text-[#455381] opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
</div>
<div className="p-3 border-t border-neutral-200/50">
<a className="flex items-center justify-center gap-2 hover:text-neutral-900 hover:border-neutral-300 transition-all group text-sm font-semibold text-neutral-600 bg-white w-full border-neutral-200 border rounded-lg pt-2.5 pb-2.5 shadow-sm" href="/index">
                    View All Projects
                    <svg className="group-hover:translate-x-0.5 transition-transform" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>

<div className="flex-1 bg-white relative">

<div className="absolute inset-0 flex flex-col h-full transition-opacity duration-300 bg-white" id="nav-preview-0">
<div className="w-full relative overflow-hidden group h-[480px]">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4532f668-1128-4f7d-a65e-c74e5ace009b_1600w.png" style={{}}/>
</div>
<div className="flex-1 p-8 flex flex-col">
<h4 className="text-2xl text-neutral-900 mb-2 tracking-tight font-semibold">
                      Azure Machine Configuration
                    </h4>
<p className="text-default text-neutral-500 leading-relaxed mb-6 line-clamp-2">
                      Unified Cloud Configuration Management Service for Windows
                      &amp; Linux systems.
                    </p>
<div className="mt-auto grid grid-cols-2 gap-8 border-t border-neutral-100 pt-5">
<div>
<span className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest block mb-1">
                          User Retention
                        </span>
<span className="text-base font-bold text-neutral-700">
                          70%+ Boost
                        </span>
</div>
<div>
<span className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest block mb-1">
                          Market pilots
                        </span>
<span className="text-base font-bold text-neutral-700">
                          12+ Major Firms
                        </span>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 flex flex-col h-full transition-opacity duration-300 bg-white opacity-0 pointer-events-none" id="nav-preview-1">
<div className="w-full relative overflow-hidden group h-[480px]">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/82b0a5aa-d578-418d-a2be-d0b143e9782f_1600w.png" style={{}}/>
</div>
<div className="flex-1 p-8 flex flex-col">
<h4 className="text-2xl text-neutral-900 mb-2 tracking-tight font-semibold">
                      Azure Arc Service Management
                    </h4>
<p className="text-default text-neutral-500 leading-relaxed mb-6 line-clamp-2">
                      Microsoft Hybrid Cloud Operations &amp; Governance Service
                      for enterprise.
                    </p>
<div className="mt-auto grid grid-cols-2 gap-8 border-t border-neutral-100 pt-5">
<div>
<span className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest block mb-1">
                          Efficiency Boost
                        </span>
<span className="text-base font-bold text-neutral-700">
                          60%+ vs Traditional
                        </span>
</div>
<div>
<span className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest block mb-1">
                          New Service Adoption
                        </span>
<span className="text-base font-bold text-neutral-700">
                          12% Growth
                        </span>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 flex flex-col h-full transition-opacity duration-300 bg-white" id="nav-preview-2">
<div className="w-full relative overflow-hidden group h-[480px]">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b42827d7-17d5-468c-9736-f5a69b577e1a_1600w.png" style={{}}/>
</div>
<div className="flex-1 p-8 flex flex-col">
<h4 className="text-2xl text-neutral-900 mb-2 tracking-tight font-semibold">
                      Azure Resource Change Portal
                    </h4>
<p className="text-default text-neutral-500 leading-relaxed mb-6 line-clamp-2">
                      A centralized portal for visualizing resource change
                      history and analyzing impact on system stability.
                    </p>
<div className="mt-auto grid grid-cols-2 gap-8 border-t border-neutral-100 pt-5">
<div>
<span className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest block mb-1">
                          Deployment Efficiency
                        </span>
<span className="text-base font-bold text-neutral-700">
                          +18% Rate
                        </span>
</div>
<div>
<span className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest block mb-1">
                          Error Impact
                        </span>
<span className="text-base font-bold text-neutral-700">
                          -24% Reduced
                        </span>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 flex flex-col h-full transition-opacity duration-300 bg-white" id="nav-preview-3">
<div className="w-full relative overflow-hidden group h-[480px]">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9ba68429-0cad-4a0b-84db-68764f2d3e5a_1600w.png" style={{}}/>
</div>
<div className="flex-1 p-8 flex flex-col">
<h4 className="text-2xl text-neutral-900 mb-2 tracking-tight font-semibold">
                      Soca Network
                    </h4>
<p className="text-default text-neutral-500 leading-relaxed mb-6 line-clamp-2">
                      A peer-to-peer social platform connecting job seekers with
                      company insiders for direct referrals.
                    </p>
<div className="mt-auto grid grid-cols-2 gap-8 border-t border-neutral-100 pt-5">
<div>
<span className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest block mb-1">
                          Growth
                        </span>
<span className="text-base font-bold text-neutral-700">
                          2k+ in 2 Mos
                        </span>
</div>
<div>
<span className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest block mb-1">
                          Outcomes
                        </span>
<span className="text-base font-bold text-neutral-700">
                          70+ Referrals
                        </span>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 flex flex-col h-full transition-opacity duration-300 bg-white" id="nav-preview-4">
<div className="w-full relative overflow-hidden group h-[480px]">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d93e720c-93b0-4d2e-aa39-312fc7f67b0c_1600w.png" style={{}}/>
</div>
<div className="flex-1 p-8 flex flex-col">
<h4 className="text-2xl text-neutral-900 mb-2 tracking-tight font-semibold">
                      SAP Fiori Design System
                    </h4>
<p className="text-default text-neutral-500 leading-relaxed mb-6 line-clamp-2">
                      Defining native components for Android and conversational
                      UI patterns for AI assistants.
                    </p>
<div className="mt-auto grid grid-cols-2 gap-8 border-t border-neutral-100 pt-5">
<div>
<span className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest block mb-1">
                          Adoption
                        </span>
<span className="text-base font-bold text-neutral-700">
                          23+ Apps
                        </span>
</div>
<div>
<span className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest block mb-1">
                          Comps / Patterns
                        </span>
<span className="text-base font-bold text-neutral-700">
                          32 / 12
                        </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<button className="flex hover:text-neutral-900 transition-colors text-sm font-semibold text-neutral-600 pt-2 pb-2 gap-x-1.5 gap-y-1.5 items-center" onmouseenter="const m=document.getElementById('projects-dropdown'); if(m){ clearTimeout(m._timer); m.classList.remove('opacity-0','invisible','translate-y-2'); m.classList.add('opacity-100','visible','translate-y-0'); if(!m._hasHoverListener){ m.addEventListener('mouseenter', ()=&gt;clearTimeout(m._timer)); m.addEventListener('mouseleave', ()=&gt;{ m._timer=setTimeout(()=&gt;{ m.classList.add('opacity-0','invisible','translate-y-2'); m.classList.remove('opacity-100','visible','translate-y-0'); }, 100); }); m._hasHoverListener=true; } }" onmouseleave="const m=document.getElementById('projects-dropdown'); if(m){ m._timer=setTimeout(()=&gt;{ if(!m.matches(':hover')){ m.classList.add('opacity-0','invisible','translate-y-2'); m.classList.remove('opacity-100','visible','translate-y-0'); } }, 100); }">
            More Projects
            <svg className="opacity-50 w-[14px] h-[14px]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m6 9 6 6 6-6"></path>
</svg>
</button>
</div>
<div className="w-px hidden md:block bg-neutral-200 h-6 gap-x-1.5 gap-y-1.5"></div>
<span className="text-sm text-neutral-400 font-mono">Case Study 01</span>
</div>
</nav>

<main className="z-10 w-[70%] mr-auto ml-auto pt-28 pr-6 pb-32 pl-6 relative">

<header className="glass-card rounded-2xl mb-8 relative overflow-hidden group border border-white/60 transition-transform duration-300 ease-out hover:scale-[1.02]" id="hero">
<div className="absolute inset-0 bg-gradient-to-br from-white via-neutral-50/50 to-[#455381]/10 opacity-80 pointer-events-none"></div>
<div className="md:h-[32rem] lg:h-[40rem] overflow-hidden bg-neutral-100 w-full border-neutral-200/50 border-b relative">
<img alt="Case Study Cover" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-95 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b1508786-dd65-4b64-91a8-0ade9de1606c_3840w.png" style={{}}/>
</div>
<div className="z-10 flex flex-col gap-12 md:p-12 lg:p-16 pt-8 pr-8 pb-8 pl-8 relative gap-x-12 gap-y-12">
<div className="flex flex-col gap-6">
<h1 className="text-balance md:text-5xl lg:text-4xl text-4xl font-semibold text-neutral-900 tracking-tight font-google-sans-flex">
              Azure Machine Configuration
            </h1>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-neutral-200/60 w-full">
<div className="flex flex-col gap-1.5">
<span className="font-semibold text-neutral-400 uppercase tracking-widest text-sm">
                  My Role
                </span>
<span className="font-semibold text-neutral-900">
                  Lead UX Designer
                </span>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                  Timeline
                </span>
<span className="font-semibold text-neutral-900">
                  6 Months (Q4 2025)
                </span>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                  Team
                </span>
<span className="font-semibold text-neutral-900">
                  2 PM, 3 Eng, 1 Researcher
                </span>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                  Status
                </span>
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-500"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="font-semibold text-neutral-900">Shipped</span>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
<div className="flex flex-col gap-3">
<span className="uppercase text-xs font-semibold text-neutral-400 tracking-widest ml-0">
                The Overview
              </span>
<p className="leading-relaxed text-balance font-medium text-neutral-900">
                A centralized, cloud-native service for automating server
                compliance and governance across hybrid environments (Windows
                &amp; Linux). It replaces legacy on-premise tools, enabling IT
                teams to audit and remediate configurations at enterprise scale.
              </p>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                The Challenge
              </span>
<p className="leading-relaxed text-balance font-medium text-neutral-900">
                How to translate the complex, manual logic of legacy "Group
                Policy" into a modern, automated cloud workflow? The challenge
                was to simplify configuration management without sacrificing the
                granular control that Enterprise IT Admins require.
              </p>
</div>
</div>
<div className="flex flex-col gap-4 w-full">
<span className="uppercase text-xs font-semibold text-neutral-400 tracking-widest">
              Impact
            </span>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="hover:shadow-md transition-all bg-white/60 border-neutral-200/50 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-sm">
<div className="text-3xl font-bold text-[#455381] tracking-tight mb-3">
                  70%+ Boost
                </div>
<div className="font-semibold text-neutral-900 pb-1">
                  Deployment Efficiency
                </div>
<div className="font-medium text-neutral-500 mt-1">
                  Consolidated 12+ fragmented browser tabs into a unified
                  'single pane of glass,' slashing operational audit time from
                  minutes to seconds.
                </div>
</div>
<div className="p-5 rounded-xl bg-white/60 border border-neutral-200/50 backdrop-blur-sm hover:shadow-md transition-all">
<div className="text-3xl font-bold text-[#455381] tracking-tight mb-2">
                  12+ Major Firms
                </div>
<div className="font-semibold text-neutral-900 pb-1">
                  Market Pilots
                </div>
<div className="font-medium text-neutral-500 mt-1">
                  Secured pilots with industry leaders. The new 'risk-averse'
                  review flow increased user confidence, driving a sustained
                  spike in weekly active usage.
                </div>
</div>
</div>
</div>
</div>
</header>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">

<aside className="fixed bottom-8 right-8 z-50 group font-manrope lg:right-[calc(15%_+_2rem)]" onmouseenter="const btn = this.querySelector('button'); if (btn) { btn.classList.remove('nav-initial-glow'); btn.classList.add('border-neutral-200/50'); }" style={{}}>
<div className="relative group/nav inline-flex flex-col items-end z-50">
<div className="absolute bottom-full right-0 mb-4 opacity-0 invisible translate-y-2 scale-95 group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:scale-100 transition-all duration-300 origin-bottom-right z-[100]">
<div className="bg-white/90 backdrop-blur-xl border border-white/60 p-2 rounded-2xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] ring-1 ring-black/5 min-w-[260px]">
<div className="px-4 py-3 border-b border-neutral-100">
<span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-widest">
                    Navigate
                  </span>
</div>
<nav className="flex flex-col gap-0.5 p-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-all group/item whitespace-nowrap" href="#problem">
<svg className="w-4 h-4 text-neutral-400 group-hover/item:text-[#455381] transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
<span>User Story &amp; Pain Points</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-all group/item whitespace-nowrap" href="#research">
<svg className="w-4 h-4 text-neutral-400 group-hover/item:text-[#455381] transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
<span>Research &amp; Discovery</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-all group/item whitespace-nowrap" href="#ideation">
<svg className="w-4 h-4 text-neutral-400 group-hover/item:text-[#455381] transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
<path d="M9 18h6"></path>
<path d="M10 22h4"></path>
</svg>
<span>Ideation &amp; Trade-offs</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-all group/item whitespace-nowrap" href="#solution">
<svg className="w-4 h-4 text-neutral-400 group-hover/item:text-[#455381] transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
<span>Final Solution</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-all group/item whitespace-nowrap" href="#outcome">
<svg className="w-4 h-4 text-neutral-400 group-hover/item:text-[#455381] transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m16 6 4 14"></path>
<path d="M12 6v14"></path>
<path d="M8 8v12"></path>
<path d="M4 4v16"></path>
</svg>
<span>Impact &amp; Key Learnings</span>
</a>
</nav>
</div>
</div>
<div className="relative">
<button className="z-10 hover:bg-neutral-50 transition-all duration-300 hover:scale-105 active:scale-95 flex group-hover/nav:shadow-[#455381]/20 group-hover/nav:border-[#455381]/30 gap-2.5 text-neutral-800 bg-white border rounded-full pt-3 pr-5 pb-3 pl-5 relative shadow-[0_8px_30px_rgb(0,0,0,0.12)] gap-x-2.5 gap-y-2.5 items-center justify-center nav-initial-glow">
<svg className="lucide lucide-compass w-5 h-5" data-lucide="compass" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
</svg>
<span className="text-sm font-medium">Navigate</span>
</button>
</div>
</div>
</aside>

<article className="col-span-1 lg:col-span-12 flex flex-col gap-8 w-full">

<section className="content-card md:p-10 scroll-mt-32 transition-all duration-300 ease-out hover:scale-[1.02] hover:border-[#455381] group pt-8 pr-8 pb-8 pl-8" id="problem">
<h2 className="text-xl font-semibold tracking-tight text-neutral-900 mb-8 flex items-center gap-3">
<span className="flex items-center justify-center w-7 h-7 rounded-md bg-neutral-100 text-neutral-500 text-sm group-hover:bg-[#455381] group-hover:text-white group-hover:scale-110 transition-all duration-300 font-semibold">
                01
              </span>
              User Story &amp; Pain Points
            </h2>
<div className="mb-12">
<div className="flex flex-col gap-6">
<div className="">
<h3 className="text-xl font-semibold text-neutral-900 tracking-tight mb-3">
                    The Status Quo: On-Premise Dependency
                  </h3>
<p className="leading-relaxed text-balance font-medium text-neutral-600 mb-4">
                    Currently, IT Administrators rely on Group Policy, a
                    decades-old tool designed for a pre-cloud era. The workflow
                    is strictly linear and constrained to the corporate
                    firewall: an Admin defines a rule (ADMX) on a local server
                    and "pushes" it to devices on the internal network.
                  </p>
</div>
<div className="bg-amber-50/50 border-amber-100/60 border rounded-xl pt-5 pr-5 pb-5 pl-5">
<h4 className="text-base font-bold text-amber-900/80 mb-2 uppercase tracking-wide text-xs flex items-center gap-2">
<svg className="lucide lucide-alert-triangle" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
<path d="M12 9v4"></path>
<path d="M12 17h.01"></path>
</svg>
                    The Gap
                  </h4>
<p className="leading-relaxed font-medium text-neutral-700">
                    This model assumes all devices are "in the building." It
                    breaks down immediately when devices move to the cloud or
                    off-network, leaving Admins with no control and no feedback
                    loop.
                  </p>
</div>
</div>
</div>

<div className="overflow-hidden transition-all duration-300 bg-white/40 border-white/60 border rounded-xl mb-10 shadow-sm backdrop-blur-xl" id="pain-point-viewer">

<div className="flex flex-wrap bg-neutral-50/50 border-neutral-100 border-b">
<button className="pp-tab-btn transition-all flex gap-2 group md:w-auto text-sm font-semibold text-[#455381] bg-white w-full border-[#455381] border-b-2 pt-4 pr-6 pb-4 pl-6 gap-x-2 gap-y-2 items-center justify-center" onclick="updatePainPoint(0)">
<span className="text-[#455381] font-mono">01</span>
                  The "Endless Tree" Navigation
                </button>
<button className="pp-tab-btn transition-all flex hover:text-neutral-800 hover:bg-white/50 group md:w-auto text-sm font-semibold text-neutral-500 w-full border-transparent border-b-2 pt-4 pr-6 pb-4 pl-6 gap-x-2 gap-y-2 items-center justify-center" onclick="updatePainPoint(1)">
<span className="text-neutral-400 group-hover:text-neutral-600 font-mono transition-colors">
                    02
                  </span>
                  Disjointed Pop-up Windows
                </button>
<button className="pp-tab-btn transition-all flex gap-2 hover:text-neutral-800 hover:bg-white/50 group text-sm font-semibold text-neutral-500 w-full md:w-auto border-transparent border-b-2 pt-4 pr-6 pb-4 pl-6 items-center justify-center" onclick="updatePainPoint(2)">
<span className="text-neutral-400 group-hover:text-neutral-600 font-mono transition-colors">
                    03
                  </span>
                  Invisible Status
                </button>
<button className="pp-tab-btn transition-all flex gap-2 hover:text-neutral-800 hover:bg-white/50 group text-sm font-medium text-neutral-500 w-full md:w-auto border-transparent border-b-2 pt-4 pr-6 pb-4 pl-6 items-center justify-center" onclick="updatePainPoint(3)">
<span className="text-neutral-400 group-hover:text-neutral-600 font-mono transition-colors">
                    04
                  </span>
                  Manual Input
                </button>
</div>



<div className="bg-neutral-100 pt-1.5 pr-1.5 pb-1.5 pl-1.5">
<div className="aspect-[16/10] md:aspect-[2/1] overflow-hidden bg-white border-black/5 border rounded-lg relative shadow-inner">
<div className="z-10 uppercase flex gap-2 text-xs font-bold text-neutral-600 tracking-wider bg-white/90 border-black/5 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 absolute top-4 left-4 shadow-sm backdrop-blur-md items-center">
<div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                    Current Experience
                  </div>
<img alt="Pain Point Visualization" className="transition-opacity duration-300 w-full h-full object-cover" id="pp-image" onload='if(!window.initPP){window.initPP=1;window.painPoints=[{title:"The \"Endless Tree\" Navigation",desc:"Finding a single setting requires clicking through 10+ layers of nested folders. This forces Admins to rely on memorization rather than intuitive discovery, making the tool impossible for new users to learn without extensive training.",img:"https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a82c0b67-f3fd-4dd4-bf87-22467336cc9e_3840w.png"},{title:"Disjointed Pop-up Windows",desc:"The workflow is fragmented across multiple separate applications (Console, Editor, Status Viewer). Users constantly lose context as they jump between disjointed windows to complete a single task.",img:"https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/309fe7a0-ecf7-4e13-996e-c4792fd07716_1600w.png"},{title:"Invisible Status",desc:"Flying Blind (High Anxiety) - The interface is purely for definition, not monitoring. It lacks visual feedback (like green checks or error alerts), leaving Admins in the dark about whether their policies were actually applied successfully on the devices.",img:"https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/efbdb5d0-04df-4398-83b8-35b96ba6d3ec_3840w.png"},{title:"Manual Input",desc:"Manual Scripting Required: Users are often forced to exit the UI and write raw scripts or edit registry values to achieve advanced configurations. A single syntax error can silently fail the entire policy deployment.",img:"https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79fbc703-0c28-41fd-b02e-6d730184685d_3840w.png"}];window.updatePainPoint=function(e){document.querySelectorAll(".pp-tab-btn").forEach((t,n)=&gt;{const o=t.querySelector("span");n===e?(t.className="pp-tab-btn transition-all flex gap-2 group text-sm font-semibold text-[#455381] bg-white w-full md:w-auto border-[#455381] border-b-2 pt-4 pr-6 pb-4 pl-6 items-center justify-center cursor-default",o.className="text-[#455381] font-mono font-bold"):(t.className="pp-tab-btn transition-all flex gap-2 hover:text-neutral-800 hover:bg-white/50 group text-sm font-semibold text-neutral-500 w-full md:w-auto border-transparent border-b-2 pt-4 pr-6 pb-4 pl-6 items-center justify-center cursor-pointer",o.className="text-neutral-400 group-hover:text-neutral-600 font-mono transition-colors")});const t=window.painPoints[e],n=document.getElementById("pp-image"),o=document.getElementById("pp-desc"),i=document.getElementById("pp-title");n&amp;&amp;o&amp;&amp;i&amp;&amp;(n.style.opacity="0.4",o.parentElement.style.opacity="0.5",setTimeout(()=&gt;{n.src=t.img,i.textContent=t.title,o.textContent=t.desc,n.onload=()=&gt;{n.style.opacity="1"},o.parentElement.style.opacity="1"},200))}}' src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a82c0b67-f3fd-4dd4-bf87-22467336cc9e_3840w.png" style={{}}/>
</div>
</div>

<div className="md:p-8 bg-white/60 border-white/60 border-t pt-6 pr-6 pb-6 pl-6 backdrop-blur-md">
<div className="flex items-start gap-4 transition-opacity duration-300" style={{opacity: '1'}}>
<div className="p-2 bg-red-50 text-red-600 rounded-lg border border-red-100 flex-shrink-0">
<svg className="lucide lucide-message-square-warning" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
<path d="M12 7v2"></path>
<path d="M12 13h.01"></path>
</svg>
</div>
<div className="">
<h4 className="text-base font-bold text-neutral-900 mb-1" id="pp-title">
                      The "Endless Tree" Navigation
                    </h4>
<p className="leading-relaxed font-medium text-neutral-600" id="pp-desc">
                      Finding a single setting requires clicking through 10+
                      layers of nested folders. This forces Admins to rely on
                      memorization rather than intuitive discovery, making the
                      tool impossible for new users to learn without extensive
                      training.
                    </p>
</div>
</div>
</div>
</div>
<h3 className="text-lg font-bold text-neutral-900 mb-6 mt-12 flex items-center gap-2">
<svg className="lucide lucide-frown text-neutral-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
<line x1="9" x2="9.01" y1="9" y2="9"></line>
<line x1="15" x2="15.01" y1="9" y2="9"></line>
</svg>
              Friction Analysis
            </h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
<div className="hover:border-red-200 hover:bg-red-50/30 transition-all group/card bg-zinc-100/50 border-zinc-200 border rounded-xl pt-5 pr-5 pb-5 pl-5">
<div className="mb-3 text-red-500 group-hover/card:scale-110 transition-transform origin-left">
<svg className="lucide lucide-server-crash" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"></path>
<path d="M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"></path>
<path d="M6 6h.01"></path>
<path d="M6 18h.01"></path>
<path d="m13 6-4 6h6l-4 6"></path>
</svg>
</div>
<h4 className="font-semibold text-neutral-900 mb-1">
                  Scalability Blockers
                </h4>
<p className="leading-relaxed font-medium text-neutral-600">
                  Legacy tools cannot manage devices outside the corporate
                  firewall or across hybrid cloud environments.
                </p>
</div>
<div className="hover:border-orange-200 hover:bg-orange-50/30 transition-all group/card bg-zinc-100/50 border-zinc-200 border rounded-xl pt-5 pr-5 pb-5 pl-5">
<div className="mb-3 text-orange-500 group-hover/card:scale-110 transition-transform origin-left">
<svg className="lucide lucide-layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
<path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
<path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
</svg>
</div>
<h4 className="font-semibold text-neutral-900 mb-1">
                  Fragmented UI
                </h4>
<p className="leading-relaxed font-medium text-neutral-600">
                  Switching between disjointed tools creates a steep learning
                  curve and inefficient workflows.
                </p>
</div>
<div className="hover:border-blue-200 hover:bg-blue-50/30 transition-all group/card bg-zinc-100/50 border-zinc-200 border rounded-xl pt-5 pr-5 pb-5 pl-5">
<div className="mb-3 text-blue-500 group-hover/card:scale-110 transition-transform origin-left">
<svg className="lucide lucide-eye-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
<path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
<path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
<line x1="2" x2="22" y1="2" y2="22"></line>
</svg>
</div>
<h4 className="font-semibold text-neutral-900 mb-1">
                  No Visibility
                </h4>
<p className="leading-relaxed font-medium text-neutral-600">
                  Admins cannot detect "Compliance Drifts" or link specific
                  rules to device failures.
                </p>
</div>
</div>

<div className="w-full h-px bg-neutral-200/60 my-12"></div>

<h3 className="text-lg font-bold text-neutral-900 mb-6 flex items-center gap-2">
<svg className="lucide lucide-compass text-[#455381]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
</svg>
              Strategic Drivers
            </h3>
<div className="bg-zinc-100/50 border-zinc-200 border rounded-xl p-6 md:p-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
<div>
<h4 className="text-lg font-bold text-neutral-900 mb-3 tracking-tight">Driving the Shift from On-Prem to Cloud</h4>
<p className="leading-relaxed font-medium text-neutral-600">The strategic goal was to accelerate enterprise migration to
                    Azure by removing the dependency on local hardware.</p>
</div>
<div className="bg-white/50 rounded-xl p-6 border border-neutral-200/60 shadow-sm">
<ul className="list-none space-y-4">
<li className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#455381] ring-2 ring-[#455381]/20"></div>
<span className="font-semibold text-neutral-900">
                          Reduce Cost
                        </span>
</div>
<span className="leading-relaxed font-medium text-neutral-500 pl-3.5">
                        Eliminate the need for customers to maintain expensive
                        local servers for policy management.
                      </span>
</li>
<li className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#455381] ring-2 ring-[#455381]/20"></div>
<span className="font-semibold text-neutral-900">
                          Unblock Hybrid Growth
                        </span>
</div>
<span className="leading-relaxed font-medium text-neutral-500 pl-3.5">
                        Enable support for major enterprise clients (like Nike,
                        Home Depot) with complex, hybrid infrastructure
                        requirements.
                      </span>
</li>
</ul>
</div>
</div>
</div>

<div className="w-full h-px bg-neutral-200/60 my-12"></div>

<h3 className="text-lg font-bold text-neutral-900 mb-6 flex items-center gap-2">
<svg className="lucide lucide-bar-chart-3 text-[#455381]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="M18 17V9"></path>
<path d="M13 17V5"></path>
<path d="M8 17v-3"></path>
</svg>
              Defining Success
            </h3>
<div className="bg-zinc-100/50 border-zinc-200 border rounded-xl p-6 md:p-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
<div>
<p className="text-lg font-medium text-neutral-900 leading-relaxed">We measured impact through efficiency gains and adoption
                  velocity.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="bg-white border border-neutral-200/50 rounded-lg p-4 shadow-sm flex flex-col group hover:border-neutral-300 transition-colors">
<div className="text-2xl font-bold text-[#455381] tracking-tight mb-2">
                      70%+
                    </div>
<div className="text-[10px] font-bold text-neutral-700 uppercase tracking-wider mb-2">
                      Efficiency
                    </div>
<div className="text-xs leading-relaxed font-medium text-neutral-500 border-neutral-100 border-t pt-2">
                      Reduction in time spent on routine tasks.
                    </div>
</div>
<div className="bg-white border border-neutral-200/50 rounded-lg p-4 shadow-sm flex flex-col group hover:border-neutral-300 transition-colors">
<div className="text-2xl font-bold text-[#455381] tracking-tight mb-2">
                      -24%
                    </div>
<div className="text-[10px] font-bold text-neutral-700 uppercase tracking-wider mb-2">
                      Error Rate
                    </div>
<div className="text-xs leading-relaxed font-medium text-neutral-500 border-neutral-100 border-t pt-2">
                      Automated compliance checks reduced errors.
                    </div>
</div>
<div className="bg-white border border-neutral-200/50 rounded-lg p-4 shadow-sm flex flex-col group hover:border-neutral-300 transition-colors">
<div className="text-xl font-bold text-[#455381] tracking-tight mb-2">
                      12+ Firms
                    </div>
<div className="text-[10px] font-bold text-neutral-700 uppercase tracking-wider mb-2">
                      Adoption
                    </div>
<div className="text-xs leading-relaxed font-medium text-neutral-500 border-neutral-100 border-t pt-2">
                      Onboarded major firms like Nike.
                    </div>
</div>
</div>
</div>
</div>
</section>

<section className="content-card md:p-10 scroll-mt-32 transition-all duration-300 ease-out hover:scale-[1.02] hover:border-[#455381] group pt-8 pr-8 pb-8 pl-8" id="research">
<h2 className="flex items-center gap-3 text-xl font-semibold text-neutral-900 tracking-tight mb-8">
<span className="flex items-center justify-center w-7 h-7 rounded-md bg-neutral-100 text-neutral-500 text-sm group-hover:bg-[#455381] group-hover:text-white group-hover:scale-110 transition-all duration-300 font-semibold">
                02
              </span>
              Research &amp; Discovery
            </h2>
<div className="mb-10">
<h3 className="text-lg font-semibold text-neutral-900 mb-3">
                Decoding the Administrator's Mental Model
              </h3>
<p className="leading-relaxed font-medium text-neutral-700 max-w-prose">
                Qualitative interviews with IT Administrators revealed critical
                gaps in the legacy workflow. While the "Group Policy" model
                worked for local networks, it failed to scale for hybrid cloud
                environments due to a lack of feedback loops and rigid, linear
                processes.
              </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
<div className="flex flex-col bg-zinc-100 h-full border-zinc-200 border rounded-xl pt-6 pr-6 pb-6 pl-6">
<h4 className="flex items-center gap-2 text-lg font-semibold text-neutral-900 mb-2">
<svg className="lucide lucide-copy text-neutral-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect>
<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
</svg>
                  Insight 01: The "Reuse" Dependency
                </h4>
<p className="leading-relaxed flex-grow font-medium text-neutral-600 mb-4">
                  Admins don't want to start from scratch. Research indicated
                  that administrators rely heavily on "Golden Templates"—proven
                  configurations refined over years.
                </p>
<div className="bg-gray-50 border-neutral-200/50 border rounded-lg mt-auto px-4 py-4 shadow-sm">
<span className="uppercase block text-xs font-bold text-[#455381] tracking-wider mb-2">
                    The Pivot
                  </span>
<p className="font-medium text-neutral-800">
                    Instead of forcing users to code new rules, the design must
                    prioritize
                    <span className="font-semibold">Template Ingestion</span>
                    , allowing teams to migrate existing logic rather than
                    rewriting it.
                  </p>
</div>
</div>
<div className="flex flex-col bg-zinc-100 h-full border-zinc-200 border rounded-xl pt-6 pr-6 pb-6 pl-6">
<h4 className="flex items-center gap-2 text-lg font-semibold text-neutral-900 mb-2">
<svg className="lucide lucide-eye text-neutral-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
                  Insight 02: The Visibility Gap
                </h4>
<p className="leading-relaxed flex-grow font-medium text-neutral-600 mb-4">
                  From "Fire and Forget" to "Continuous Auditing." The legacy
                  model functioned as a one-way execution path with no
                  confirmation of success.
                </p>
<div className="bg-gray-50 border-neutral-200/50 border rounded-lg mt-auto px-4 py-4 shadow-sm">
<span className="uppercase block text-xs font-bold text-[#455381] tracking-wider mb-2">
                    The Pivot
                  </span>
<p className="font-medium text-neutral-800">
                    The new system needed to shift the core mental model from
                    static configuration to
                    <span className="font-semibold">Dynamic Remediation</span>
                    —providing real-time data on compliance drifts and
                    automatically fixing failures.
                  </p>
</div>
</div>
</div>
<div className="bg-neutral-900 text-neutral-300 rounded-xl overflow-hidden relative border border-neutral-800 shadow-2xl">
<div className="absolute inset-0 opacity-10 pointer-events-none bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/021e7ff6-7781-479c-8b25-2c5f10aa2a2d_original.GIF)] bg-cover bg-center" style={{}}></div>
<div className="md:p-10 z-10 pt-8 pr-8 pb-8 pl-8 relative">
<h3 className="text-lg font-semibold text-white tracking-tight text-center mb-12">
                  Mental Model Shift
                </h3>
<div className="flex flex-col md:flex-row gap-8 gap-x-8 gap-y-8 items-start justify-center">

<div aria-label="Legacy Workflow: Blind Execution" className="flex-1 flex flex-col items-center w-full group" role="region">

<div className="flex gap-2 group-hover:grayscale-0 transition-all duration-500 opacity-100 mb-6 gap-x-2 gap-y-2" role="list">

<div className="flex flex-col items-center gap-3" role="listitem">
<div aria-label="Step 1: Admin User" className="w-12 h-12 rounded-xl bg-neutral-700 flex items-center justify-center border border-neutral-500 shadow-inner ring-1 ring-white/10">
<svg aria-hidden="true" className="lucide lucide-user text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
<span aria-hidden="true" className="text-[10px] uppercase font-semibold text-white tracking-wider text-center">
                          Manual
                        </span>
</div>

<div aria-hidden="true" className="mt-6 w-6 border-t border-dashed border-neutral-500"></div>

<div className="flex flex-col gap-3 gap-x-3 gap-y-3 items-center" role="listitem">
<div aria-label="Step 2: Edit GPO File" className="w-12 h-12 rounded-xl bg-neutral-700 flex items-center justify-center border border-neutral-500 shadow-inner ring-1 ring-white/10">
<svg aria-hidden="true" className="lucide lucide-file-cog text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
<path d="m3.2 12.9-.9-.4"></path>
<path d="m3.2 15.1-.9.4"></path>
<path d="M4.6 14c-.1.7.1 1.4.6 1.9"></path>
<path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"></path>
<path d="m4.9 11.2-.4-.9"></path>
<path d="m4.9 16.8-.4.9"></path>
<path d="M7 14a2 2 0 0 1 2 2"></path>
<circle cx="7" cy="14" r="3"></circle>
</svg>
</div>
<span aria-hidden="true" className="text-[10px] font-semibold uppercase tracking-wider text-center text-white">
                          Edit
                        </span>
</div>

<div aria-hidden="true" className="mt-6 w-6 border-t border-dashed border-neutral-500"></div>

<div className="flex flex-col items-center gap-3" role="listitem">
<div aria-label="Step 3: Unknown Status" className="w-12 h-12 rounded-xl bg-red-900/40 text-red-300 flex items-center justify-center border border-red-500/30 shadow-inner ring-1 ring-red-500/20">
<svg aria-hidden="true" className="lucide lucide-cloud-off" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m2 2 20 20"></path>
<path className="" d="M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-8.807"></path>
<path d="M21.5 19.862a2.25 2.25 0 0 0 .637-2.348"></path>
<path d="M17.5 19h-5"></path>
<path d="M9.167 4.619a6.997 6.997 0 0 1 7.23 2.913"></path>
<path d="M16 11h.01"></path>
</svg>
</div>
<span aria-hidden="true" className="text-[10px] font-semibold uppercase tracking-wider text-center text-red-300">
                          Drift
                        </span>
</div>
</div>
<h4 className="text-xs font-bold uppercase tracking-widest mb-2 text-white">
                      Blind Execution
                    </h4>
<p className="leading-relaxed text-sm text-neutral-300 text-center max-w-[220px]">
                      Admin manually edits GPO settings and hopes they propagate
                      without errors.
                    </p>
</div>

<div className="hidden md:flex flex-col items-center justify-center pt-8 opacity-100">
<svg className="lucide lucide-arrow-right w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</div>

<div aria-label="Modern Workflow: Continuous Compliance" className="flex-1 flex flex-col items-center w-full" role="region">

<div className="flex items-start gap-2 mb-6" role="list">

<div className="flex flex-col items-center gap-3" role="listitem">
<div aria-label="Step 1: Select Template" className="w-12 h-12 rounded-xl bg-[#455381] flex items-center justify-center shadow-lg shadow-[#455381]/30 text-white ring-1 ring-white/10">
<svg aria-hidden="true" className="lucide lucide-layout-template" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="18" x="3" y="3"></rect>
<rect height="7" rx="1" width="9" x="3" y="14"></rect>
<rect height="7" rx="1" width="5" x="16" y="14"></rect>
</svg>
</div>
<span aria-hidden="true" className="text-[10px] font-semibold text-indigo-300 uppercase tracking-wider text-center bg-indigo-500/20 px-1.5 py-0.5 rounded border border-indigo-400/30">
                          Define
                        </span>
</div>

<div aria-hidden="true" className="mt-6 w-6 border-t border-indigo-400 opacity-80"></div>

<div className="flex flex-col items-center gap-3" role="listitem">
<div aria-label="Step 2: Automated Application" className="w-12 h-12 rounded-xl bg-[#455381] flex items-center justify-center shadow-lg shadow-[#455381]/30 text-white ring-1 ring-white/10">
<svg aria-hidden="true" className="lucide lucide-zap" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
<span aria-hidden="true" className="text-[10px] font-semibold text-indigo-300 uppercase tracking-wider text-center bg-indigo-500/20 px-1.5 py-0.5 rounded border border-indigo-400/30">
                          Apply
                        </span>
</div>

<div aria-hidden="true" className="mt-6 w-6 border-t border-indigo-400 opacity-80"></div>

<div className="flex flex-col items-center gap-3" role="listitem">
<div aria-label="Step 3: Real-time Audit" className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/30 text-white animate-pulse ring-1 ring-emerald-400/50">
<svg aria-hidden="true" className="lucide lucide-activity" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
</div>
<span aria-hidden="true" className="text-[10px] font-semibold text-emerald-300 uppercase tracking-wider text-center bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                          Verify
                        </span>
</div>
</div>
<h4 className="text-xs font-bold text-emerald-300 uppercase tracking-widest mb-2">
                      Continuous Compliance
                    </h4>
<p className="leading-relaxed text-sm text-neutral-300 text-center max-w-[220px]">
                      Select templates, apply automatically, and view real-time
                      audit feedback.
                    </p>
</div>
</div>
</div>
<div className="z-10 text-center bg-neutral-800/80 border-white/5 border-t pt-5 pr-5 pb-5 pl-5 relative backdrop-blur-md rounded-b-xl">
<p className="text-base font-semibold text-white/90">
                  "We moved the user experience from blind execution (legacy) to
                  continuous verification (cloud)."
                </p>
</div>
</div>
</section>

<section className="content-card md:p-10 scroll-mt-32 transition-all duration-300 ease-out hover:scale-[1.02] hover:border-[#455381] group hover:z-40 !overflow-visible pt-8 pr-8 pb-8 pl-8 relative" id="ideation">

<div className="flex mb-12 items-center justify-between">
<h2 className="flex items-center gap-3 text-xl font-semibold text-neutral-900 tracking-tight">
<span className="flex items-center justify-center w-7 h-7 rounded-md bg-neutral-100 text-neutral-500 text-sm group-hover:bg-[#455381] group-hover:text-white group-hover:scale-110 transition-all duration-300 font-semibold">
                  03
                </span>
                Ideation &amp; Trade-offs
              </h2>
</div>

<div className="border-neutral-200/60 border-b mb-16 pb-16">
<div className="flex items-center gap-3 mb-4">
<span className="uppercase text-xs font-semibold text-slate-950 tracking-wider bg-amber-300 rounded-full pt-2 pr-4 pb-2 pl-4">
                  Decision 01
                </span>
<h3 className="text-lg font-semibold text-neutral-900">
                  Configuration Strategy
                </h3>
</div>
<p className="leading-relaxed font-medium text-neutral-600 max-w-3xl mb-8">
<span className="font-semibold text-neutral-900">
                  The Conflict:
                </span>
                Cloud-native engineers prefer the granular control of defining
                individual policies (Infrastructure-as-Code), but traditional IT
                Admins are accustomed to applying pre-built "Golden Templates"
                (GPO Baselines). Forcing Admins to rebuild thousands of settings
                from scratch was a major blocker to adoption.
              </p>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

<div className="group/opt relative rounded-xl border border-neutral-200 bg-neutral-50/50 hover:border-red-200 transition-colors">
<div className="absolute top-4 right-4 z-30">
<span className="px-2.5 py-1 bg-white/80 backdrop-blur text-red-600 uppercase tracking-wider rounded-md border border-red-100 text-[10px] font-semibold shadow-sm">
                      Rejected
                    </span>
</div>

<div className="peer group/zoom focus:outline-none cursor-zoom-in flex flex-col overflow-hidden bg-neutral-100/50 w-full h-96 border-neutral-200/60 border-b relative items-center justify-center rounded-t-xl" tabindex="0">
<img alt="Option A Visualization" className="transition-transform duration-700 object-auto opacity-90 w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eea9dc9b-1fbc-46c3-a1fa-51d2fbdde16f_original.GIF"/>
<div className="absolute bottom-3 left-3 z-20 pointer-events-none opacity-100 transition-opacity duration-300 group-focus/zoom:opacity-0">
<span className="bg-black/50 backdrop-blur-md border border-white/10 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
<svg className="lucide lucide-zoom-in" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<line x1="21" x2="16.65" y1="21" y2="16.65"></line>
<line x1="11" x2="11" y1="8" y2="14"></line>
<line x1="8" x2="14" y1="11" y2="11"></line>
</svg>
                        Click to Zoom
                      </span>
</div>
</div>

<div className="absolute top-48 -translate-x-1/2 -translate-y-1/2 w-[200%] h-auto opacity-0 invisible peer-focus:opacity-100 peer-focus:visible transition-all duration-300 ease-out pointer-events-none perspective-1000 z-[9999] left-full ml-4 peer-focus:pointer-events-auto peer-focus:cursor-zoom-out">
<div className="rounded-xl overflow-hidden border-[6px] border-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] bg-white transform transition-transform duration-500 scale-100">
<button aria-label="Close Zoom" className="absolute top-4 right-4 z-50 p-2.5 bg-white/90 backdrop-blur text-neutral-500 hover:text-neutral-900 rounded-full shadow-sm hover:shadow-md transition-all border border-neutral-200 cursor-pointer" type="button">
<svg className="lucide lucide-x" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
<img alt="Zoomed Preview" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eea9dc9b-1fbc-46c3-a1fa-51d2fbdde16f_original.GIF"/>
</div>
</div>
<div className="z-10 bg-neutral-50/50 pt-6 pr-6 pb-6 pl-6 relative backdrop-blur-sm rounded-b-xl">
<h4 className="text-lg font-semibold text-neutral-900 mb-1">
                      Option A: Granular Policy Definitions
                    </h4>
<p className="font-medium text-neutral-600 mb-5">
                      Users define or select individual settings one by one
                      (e.g., "Password Length," "Screen Timeout") via JSON or
                      detailed forms.
                    </p>
<div className="space-y-3">
<div className="flex gap-3 items-start">
<div className="mt-0.5 text-emerald-600 bg-emerald-50 rounded-full p-0.5">
<svg className="lucide lucide-plus" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</div>
<p className="leading-relaxed font-medium text-neutral-600">
<span className="font-semibold text-neutral-900">
                            Pros:
                          </span>
                          Maximum flexibility; follows "Infrastructure as Code"
                          best practices; zero ambiguity.
                        </p>
</div>
<div className="flex gap-3 items-start">
<div className="mt-0.5 text-red-600 bg-red-50 rounded-full p-0.5">
<svg className="lucide lucide-minus" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
</svg>
</div>
<p className="leading-relaxed font-medium text-neutral-600">
<span className="font-semibold text-neutral-900">
                            Cons:
                          </span>
                          High Friction. Migrating an on-prem environment
                          requires manually mapping 5,000+ settings. Extremely
                          steep learning curve for non-developer Admins.
                        </p>
</div>
</div>
</div>
</div>

<div className="group/opt shadow-[#455381]/5 bg-white border-[#455381] border-2 rounded-xl relative shadow-xl">
<div className="absolute top-4 right-4 z-30">
<span className="px-2.5 py-1 bg-[#455381] text-white uppercase tracking-wider rounded-md text-[10px] font-semibold shadow-md">
                      Selected
                    </span>
</div>

<div className="peer group/zoom focus:outline-none cursor-zoom-in h-96 bg-[#455381]/5 w-full border-b border-[#455381]/10 flex flex-col justify-center items-center relative overflow-hidden rounded-t-xl" tabindex="0">
<img alt="Option B Visualization" className="transition-transform duration-700 object-auto w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fe8f4aa6-ef9d-4ef6-a1f6-eea2a6c91309_original.GIF"/>
<div className="absolute bottom-3 left-3 z-20 pointer-events-none opacity-100 transition-opacity duration-300 group-focus/zoom:opacity-0">
<span className="bg-black/50 backdrop-blur-md border border-white/10 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
<svg className="lucide lucide-zoom-in" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<line x1="21" x2="16.65" y1="21" y2="16.65"></line>
<line x1="11" x2="11" y1="8" y2="14"></line>
<line x1="8" x2="14" y1="11" y2="11"></line>
</svg>
                        Click to Zoom
                      </span>
</div>
</div>

<div className="absolute top-48 -translate-x-1/2 -translate-y-1/2 w-[200%] h-auto opacity-0 invisible peer-focus:opacity-100 peer-focus:visible transition-all duration-300 ease-out pointer-events-none perspective-1000 z-[9999] left-0 -ml-4 peer-focus:pointer-events-auto peer-focus:cursor-zoom-out">
<div className="rounded-xl overflow-hidden border-[6px] border-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] bg-white transform transition-transform duration-500 scale-100">
<button aria-label="Close Zoom" className="absolute top-4 right-4 z-50 p-2.5 bg-white/90 backdrop-blur text-neutral-500 hover:text-neutral-900 rounded-full shadow-sm hover:shadow-md transition-all border border-neutral-200 cursor-pointer" type="button">
<svg className="lucide lucide-x" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
<img alt="Zoomed Preview" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fe8f4aa6-ef9d-4ef6-a1f6-eea2a6c91309_original.GIF"/>
</div>
</div>
<div className="z-10 bg-white/80 rounded-b-xl pt-6 pr-6 pb-6 pl-6 relative backdrop-blur-sm">
<h4 className="text-lg font-semibold text-neutral-900 mb-1">
                      Option B: Template Ingestion &amp; Baselines
                    </h4>
<p className="font-medium text-neutral-600 mb-5">
                      Users upload existing GPO templates (ADMX) or select
                      industry-standard "Security Baselines" to apply hundreds
                      of settings in a single action.
                    </p>
<div className="space-y-3">
<div className="flex gap-3 items-start">
<div className="mt-0.5 text-emerald-600 bg-emerald-50 rounded-full p-0.5">
<svg className="lucide lucide-plus" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</div>
<p className="leading-relaxed font-medium text-neutral-600">
<span className="font-semibold text-neutral-900">
                            Pros:
                          </span>
                          Reduces setup time from weeks to minutes; aligns with
                          the Admin's existing mental model of "Golden Images."
                        </p>
</div>
<div className="flex gap-3 gap-x-3 gap-y-3 items-start">
<div className="mt-0.5 text-amber-600 bg-amber-50 rounded-full p-0.5">
<svg className="lucide lucide-minus" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
</svg>
</div>
<p className="leading-relaxed font-medium text-neutral-600">
<span className="font-semibold text-neutral-900">
                            Cons:
                          </span>
                          Hides underlying complexity; requires a robust parser
                          to translate legacy templates into modern cloud rules.
                        </p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 flex gap-4 items-start">
<div className="p-2 bg-[#455381]/10 text-[#455381] rounded-lg shrink-0">
<svg className="lucide lucide-check-circle" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
</div>
<div className="">
<h4 className="font-semibold text-neutral-900 text-sm uppercase tracking-wide mb-1">
                    The Verdict
                  </h4>
<p className="text-neutral-700 leading-relaxed font-medium">
                    We chose Option B (Faceted Search). To mitigate the learning
                    curve, we introduced
                    <span className="text-neutral-900 font-semibold">
                      "Saved Views,"
                    </span>
                    allowing Admins to create shortcuts that feel like folders
                    but retain the power of a search engine.
                  </p>
</div>
</div>
</div>

<div className="">
<div className="flex items-center gap-3 mb-4">
<span className="uppercase text-xs font-semibold text-neutral-800 tracking-wider bg-sky-500 rounded-full pt-2 pr-4 pb-2 pl-4">
                  Decision 02
                </span>
<h3 className="text-lg font-semibold text-neutral-900">
                  The Deployment Model
                </h3>
</div>
<p className="leading-relaxed text-lg font-medium text-neutral-600 max-w-3xl mb-8">
<span className="font-semibold text-neutral-900">
                  The Conflict:
                </span>
                In the legacy tool, "Saving" meant "Deploying" immediately,
                causing anxiety about breaking production environments.
              </p>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

<div className="group/opt relative rounded-xl border border-neutral-200 bg-neutral-50/50 hover:border-red-200 transition-colors">
<div className="absolute top-4 right-4 z-30">
<span className="px-2.5 py-1 bg-white/80 backdrop-blur text-red-600 uppercase tracking-wider rounded-md border border-red-100 text-[10px] font-semibold shadow-sm">
                      Rejected
                    </span>
</div>

<div className="peer group/zoom focus:outline-none cursor-zoom-in flex flex-col overflow-hidden bg-neutral-100/50 w-full h-96 border-neutral-200/60 border-b relative items-center justify-center rounded-t-xl" tabindex="0">
<img alt="Option A Deployment" className="transition-transform duration-700 opacity-90 w-full h-full object-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f70bd435-0c59-4a4f-979a-4b953d062045_1600w.jpg"/>
<div className="absolute bottom-3 left-3 z-20 pointer-events-none opacity-100 transition-opacity duration-300 group-focus/zoom:opacity-0">
<span className="bg-black/50 backdrop-blur-md border border-white/10 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
<svg className="lucide lucide-zoom-in" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<line x1="21" x2="16.65" y1="21" y2="16.65"></line>
<line x1="11" x2="11" y1="8" y2="14"></line>
<line x1="8" x2="14" y1="11" y2="11"></line>
</svg>
                        Click to Zoom
                      </span>
</div>
</div>

<div className="absolute z-[9999] top-48 -translate-x-1/2 -translate-y-1/2 w-[200%] h-auto opacity-0 invisible peer-focus:opacity-100 peer-focus:visible transition-all duration-300 ease-out pointer-events-none perspective-1000 left-full ml-4 peer-focus:pointer-events-auto peer-focus:cursor-zoom-out">
<div className="rounded-xl overflow-hidden border-[6px] border-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] bg-white transform transition-transform duration-500 scale-100">
<button aria-label="Close Zoom" className="absolute top-4 right-4 z-50 p-2.5 bg-white/90 backdrop-blur text-neutral-500 hover:text-neutral-900 rounded-full shadow-sm hover:shadow-md transition-all border border-neutral-200 cursor-pointer" type="button">
<svg className="lucide lucide-x" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
<img alt="Zoomed Preview" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f70bd435-0c59-4a4f-979a-4b953d062045_1600w.jpg" style={{}}/>
</div>
</div>
<div className="p-6 relative z-10 bg-neutral-50/50 backdrop-blur-sm">
<h4 className="text-lg font-semibold text-neutral-900 mb-1">
                      Option A: Grouped by Infrastructure
                    </h4>
<p className="font-medium text-neutral-700 mb-5">
                      Resources are aggregated into collapsible containers based
                      on technical hierarchy (Subscription &gt; Resource Group
                      &gt; Region). Users navigate by drilling down into
                      specific folders to inspect assets.
                    </p>
<div className="space-y-3">
<div className="flex gap-3 items-start">
<div className="mt-0.5 text-emerald-600 bg-emerald-50 rounded-full p-0.5">
<svg className="lucide lucide-plus" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</div>
<p className="leading-relaxed font-medium text-neutral-700">
<span className="font-semibold text-neutral-900">
                            Pros:
                          </span>
                          Contextual Clarity. Perfectly matches the user's
                          mental model of their physical or logical
                          infrastructure layout. Ideal for inventory management.
                        </p>
</div>
<div className="flex gap-3 items-start">
<div className="mt-0.5 text-red-600 bg-red-50 rounded-full p-0.5">
<svg className="" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="4" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<p className="leading-relaxed font-medium text-neutral-700">
<span className="font-semibold text-neutral-900">
                            Cons:
                          </span>
                          "Status Hiding." Critical failures are often buried
                          deep within healthy-looking groups. Identifying a
                          single "Non-Compliant" resource requires expanding
                          multiple folder layers, significantly increasing the
                          time to detect risks.
                        </p>
</div>
</div>
</div>
</div>

<div className="group/opt relative rounded-xl border-2 border-[#455381] bg-white shadow-xl shadow-[#455381]/5">
<div className="absolute top-4 right-4 z-30">
<span className="px-2.5 py-1 bg-[#455381] text-white uppercase tracking-wider rounded-md text-[10px] font-semibold shadow-md">
                      Selected
                    </span>
</div>

<div className="peer group/zoom focus:outline-none cursor-zoom-in flex flex-col overflow-hidden bg-[#455381]/5 w-full h-96 border-[#455381]/10 border-b relative items-center justify-center rounded-t-xl" tabindex="0">
<img alt="Option B Deployment" className="transition-transform duration-700 w-full h-full object-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/73ed420e-0564-47b1-9c81-2b4a950003fe_1600w.jpg"/>
<div className="absolute bottom-3 left-3 z-20 pointer-events-none opacity-100 transition-opacity duration-300 group-focus/zoom:opacity-0">
<span className="bg-black/50 backdrop-blur-md border border-white/10 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
<svg className="lucide lucide-zoom-in" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<line x1="21" x2="16.65" y1="21" y2="16.65"></line>
<line x1="11" x2="11" y1="8" y2="14"></line>
<line x1="8" x2="14" y1="11" y2="11"></line>
</svg>
                        Click to Zoom
                      </span>
</div>
</div>

<div className="absolute z-[9999] top-48 -translate-x-1/2 -translate-y-1/2 w-[200%] h-auto opacity-0 invisible peer-focus:opacity-100 peer-focus:visible transition-all duration-300 ease-out pointer-events-none perspective-1000 left-0 -ml-4 peer-focus:pointer-events-auto peer-focus:cursor-zoom-out">
<div className="rounded-xl overflow-hidden border-[6px] border-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] bg-white transform transition-transform duration-500 scale-100">
<button aria-label="Close Zoom" className="absolute top-4 right-4 z-50 p-2.5 bg-white/90 backdrop-blur text-neutral-500 hover:text-neutral-900 rounded-full shadow-sm hover:shadow-md transition-all border border-neutral-200 cursor-pointer" type="button">
<svg className="lucide lucide-x" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
<img alt="Zoomed Preview" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/73ed420e-0564-47b1-9c81-2b4a950003fe_1600w.jpg"/>
</div>
</div>
<div className="z-10 bg-white/80 pt-6 pr-6 pb-6 pl-6 relative backdrop-blur-sm">
<h4 className="text-lg font-semibold text-neutral-900 mb-1">
                      Option B: Insight-Driven View
                    </h4>
<p className="font-medium text-neutral-600 mb-5">
                      A flattened, scoped list empowered by KPI Dashboards and
                      smart filtering. It ignores folder depth to bubble up
                      "Non-Compliant" items directly to the top level.
                    </p>
<div className="space-y-3">
<div className="flex gap-3 items-start">
<div className="mt-0.5 text-emerald-600 bg-emerald-50 rounded-full p-0.5">
<svg className="lucide lucide-plus" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</div>
<p className="leading-relaxed font-medium text-neutral-600">
<span className="font-semibold text-neutral-900">
                            Pros:
                          </span>
                          Action-Oriented. Shifts the focus from "browsing" to
                          "fixing." Administrators can identify and target risky
                          resources instantly via the dashboard, reducing the
                          "Time-to-Detect" from minutes to seconds.
                        </p>
</div>
<div className="flex gap-3 items-start">
<div className="mt-0.5 text-amber-600 bg-amber-50 rounded-full p-0.5">
<svg className="lucide lucide-minus" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
</svg>
</div>
<p className="leading-relaxed font-medium text-neutral-600">
<span className="font-semibold text-neutral-900">
                            Cons:
                          </span>
                          Loss of Hierarchy. Users lose the immediate visual
                          context of which folder a server belongs to (solved by
                          adding metadata columns).
                        </p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 flex gap-4 items-start">
<div className="p-2 bg-[#455381]/10 text-[#455381] rounded-lg shrink-0">
<svg className="lucide lucide-check-circle" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
</div>
<div className="">
<h4 className="font-semibold text-neutral-900 text-sm uppercase tracking-wide mb-1">
                    The Verdict
                  </h4>
<p className="text-neutral-700 leading-relaxed font-medium">
                    We chose Option B. Given the "Black Box" anxiety discovered
                    in research, we prioritized
                    <span className="font-semibold text-neutral-900">
                      safety over speed
                    </span>
                    . We added a "Validation" step that simulates the policy
                    impact before it touches a real server.
                  </p>
</div>
</div>
</div>
</section>

<section className="content-card md:p-10 scroll-mt-32 transition-all duration-300 ease-out hover:scale-[1.02] hover:border-[#455381] group pt-8 pr-8 pb-8 pl-8" id="solution">
<h2 className="text-xl font-semibold tracking-tight text-neutral-900 mb-6 flex items-center gap-3">
<span className="flex items-center justify-center w-7 h-7 rounded-md bg-neutral-100 text-neutral-500 text-sm group-hover:bg-[#455381] group-hover:text-white group-hover:scale-110 transition-all duration-300 font-semibold">
                04
              </span>
              The Solution
            </h2>
<p className="leading-relaxed font-medium text-neutral-700 max-w-prose mb-8">
              The final design consolidates complex workflows into a unified
              interface. Use the interactive viewer below to explore the
              rationale behind each key view.
            </p>
<div className="mb-12">
<h3 className="flex items-center gap-2 text-lg font-bold text-neutral-900 mb-6">
<svg className="lucide lucide-workflow text-[#455381]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="2" width="8" x="3" y="3"></rect>
<path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
<rect className="" height="8" rx="2" width="8" x="13" y="13"></rect>
</svg>
                Process Flow Diagram
              </h3>
<li className="w-full list-none">
<div className="overflow-hidden bg-neutral-50 w-full border-neutral-200/60 border rounded-xl pt-4 pr-4 pb-4 pl-4">
<div className="overflow-x-auto pb-2 -mb-2 scrollbar-hide">
<div className="min-w-[800px] grid grid-cols-4 gap-4 pb-1">

<div className="flex flex-col hover:shadow-md transition-all group bg-white h-full border-neutral-200 border rounded-lg pt-4 pr-4 pb-4 pl-4 relative shadow-sm">
<div className="flex items-center justify-between mb-3">
<span className="text-[10px] font-bold uppercase tracking-widest text-[#455381] bg-[#455381]/10 px-2 py-0.5 rounded">
                            Step 01
                          </span>
<svg className="text-neutral-300 group-hover:text-[#455381] transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M3 9h18"></path>
<path d="M9 21V9"></path>
</svg>
</div>
<h4 className="font-bold text-neutral-900 mb-2.5">
                          Template Library
                        </h4>
<div className="border-neutral-100 border-t mt-auto pt-2.5">
<p className="text-[9px] uppercase font-bold text-neutral-400 mb-1.5 tracking-wider">
                            Action
                          </p>
<ul className="text-[11px] leading-snug font-medium text-neutral-600 space-y-1.5">
<li className="flex gap-1.5 text-base gap-x-1.5 gap-y-1.5 items-center">
<span className="w-1 h-1 rounded-full bg-[#455381] shrink-0 opacity-60"></span>
                              Browse, Filter
                            </li>
<li className="flex gap-1.5 text-base gap-x-1.5 gap-y-1.5 items-center">
<span className="w-1 h-1 rounded-full bg-[#455381] shrink-0 opacity-60"></span>
                              Built-in GPO
                            </li>
</ul>
</div>
<div className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 text-neutral-300 hidden lg:block">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>

<div className="relative flex flex-col p-4 bg-white border border-neutral-200 rounded-lg shadow-sm hover:shadow-md transition-all group h-full">
<div className="flex items-center justify-between mb-3">
<span className="text-[10px] font-bold uppercase tracking-widest text-[#455381] bg-[#455381]/10 px-2 py-0.5 rounded">
                            Step 02
                          </span>
<svg className="text-neutral-300 group-hover:text-[#455381] transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
<path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
<path d="M12 2v2"></path>
<path d="M12 22v-2"></path>
<path d="m17 17-1.4-1.4"></path>
<path d="m19 12h2"></path>
<path d="m22 7-1.4-1.4"></path>
<path d="m17 7-1.4 1.4"></path>
<path d="m7 7 1.4 1.4"></path>
</svg>
</div>
<h4 className="font-bold text-neutral-900 mb-2.5">
                          Configuration Wizard
                        </h4>
<div className="mt-auto border-t border-neutral-100 pt-2.5">
<p className="text-[9px] uppercase font-bold text-neutral-400 mb-1.5 tracking-wider">
                            Action
                          </p>
<ul className="text-[11px] leading-snug font-medium text-neutral-600 space-y-1.5">
<li className="flex gap-1.5 text-base gap-x-1.5 gap-y-1.5 items-center">
<span className="w-1 h-1 rounded-full bg-[#455381] shrink-0 opacity-60"></span>
                              Original vs. Modified
                            </li>
<li className="flex gap-1.5 text-base gap-x-1.5 gap-y-1.5 items-center">
<span className="w-1 h-1 rounded-full bg-[#455381] shrink-0 opacity-60"></span>
                              Customized value options
                            </li>
</ul>
</div>
<div className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 text-neutral-300 hidden lg:block">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>

<div className="relative flex flex-col p-4 bg-white border border-neutral-200 rounded-lg shadow-sm hover:shadow-md transition-all group h-full">
<div className="flex mb-3 items-center justify-between">
<span className="text-[10px] font-bold uppercase tracking-widest text-[#455381] bg-[#455381]/10 px-2 py-0.5 rounded">
                            Step 03
                          </span>
<svg className="text-neutral-300 group-hover:text-[#455381] transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
<line x1="12" x2="12" y1="22.08" y2="12"></line>
</svg>
</div>
<h4 className="font-bold text-neutral-900 mb-2.5">
                          Assignment
                        </h4>
<div className="mt-auto border-t border-neutral-100 pt-2.5">
<p className="text-[9px] uppercase font-bold text-neutral-400 mb-1.5 tracking-wider">
                            Action
                          </p>
<ul className="text-[11px] font-medium text-neutral-600 space-y-1.5 leading-snug">
<li className="flex gap-1.5 text-base gap-x-1.5 gap-y-1.5 items-center">
<span className="w-1 h-1 rounded-full bg-[#455381] shrink-0 opacity-60"></span>
                              Select Target Scope (RG)
                            </li>
<li className="flex gap-1.5 text-base gap-x-1.5 gap-y-1.5 items-center">
                              Assign Template
                            </li>
</ul>
</div>
<div className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 text-neutral-300 hidden lg:block">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>

<div className="relative flex flex-col p-4 bg-white border border-neutral-200 rounded-lg shadow-sm hover:shadow-md transition-all group h-full">
<div className="flex items-center justify-between mb-3">
<span className="text-[10px] font-bold uppercase tracking-widest text-[#455381] bg-[#455381]/10 px-2 py-0.5 rounded">
                            Step 04
                          </span>
<svg className="text-neutral-300 group-hover:text-[#455381] transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20"></path>
<path d="m2 12 20 0"></path>
<path d="m4.93 4.93 14.14 14.14"></path>
<path d="m19.07 4.93-14.14 14.14"></path>
</svg>
</div>
<h4 className="font-bold text-neutral-900 mb-2.5">
                          Monitor &amp; Remediate
                        </h4>
<div className="mt-auto border-t border-neutral-100 pt-2.5">
<p className="text-[9px] uppercase font-bold text-neutral-400 mb-1.5 tracking-wider">
                            Action
                          </p>
<ul className="text-[11px] font-medium text-neutral-600 space-y-1.5 leading-snug">
<li className="flex gap-1.5 text-base gap-x-1.5 gap-y-1.5 items-center">
<span className="w-1 h-1 rounded-full bg-[#455381] shrink-0 opacity-60"></span>
                              View Compliance Dashboard
                            </li>
<li className="flex gap-1.5 text-base gap-x-1.5 gap-y-1.5 items-center">
<span className="w-1 h-1 rounded-full bg-[#455381] shrink-0 opacity-60"></span>
                              Deep-link to Fix
                            </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</li>
<p className="leading-relaxed font-medium text-neutral-600 max-w-3xl mt-4">
                This diagram illustrates the end-to-end data flow: starting from
                the ingestion of legacy GPO templates, passing through the
                validation engine, and finally synchronizing with the Azure
                Resource Manager for deployment.
              </p>
</div>

<div className="bg-white/40 backdrop-blur-xl rounded-xl border border-white/60 overflow-hidden shadow-sm transition-all duration-300" id="solution-viewer">

<div className="flex flex-wrap bg-neutral-50/50 border-neutral-100 border-b">
<button className="tab-btn md:w-auto transition-all flex gap-2 cursor-default text-sm font-semibold text-[#455381] bg-white w-full border-[#455381] border-b-2 pt-4 pr-6 pb-4 pl-6 gap-x-2 gap-y-2 items-center justify-center" onclick="updateSolution(0)">
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="18" x="3" y="3"></rect>
<rect height="7" rx="1" width="9" x="3" y="14"></rect>
<rect height="7" rx="1" width="5" x="16" y="14"></rect>
</svg>
<span className="">Template Library</span>
</button>
<button className="tab-btn md:w-auto hover:text-neutral-800 hover:bg-white/50 transition-all flex gap-2 cursor-pointer text-sm font-semibold text-neutral-500 w-full border-transparent border-b-2 pt-4 pr-6 pb-4 pl-6 gap-x-2 gap-y-2 items-center justify-center" onclick="updateSolution(1)">
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"></path>
<path d="m14 7 3 3"></path>
<path d="M5 6v4"></path>
<path d="M19 14v4"></path>
<path d="M10 2v2"></path>
<path d="M7 8H3"></path>
<path d="M21 16h-4"></path>
<path d="M11 3H9"></path>
</svg>
<span className="">Configuration Wizard</span>
</button>
<button className="tab-btn md:w-auto hover:text-neutral-800 hover:bg-white/50 transition-all flex gap-2 cursor-pointer text-sm font-semibold text-neutral-500 w-full border-transparent border-b-2 pt-4 pr-6 pb-4 pl-6 gap-x-2 gap-y-2 items-center justify-center" onclick="updateSolution(2)">
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect>
<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
<path d="m9 14 2 2 4-4"></path>
</svg>
<span className="">Assignment</span>
</button>
<button className="tab-btn md:w-auto hover:text-neutral-800 hover:bg-white/50 transition-all flex gap-2 cursor-pointer text-sm font-semibold text-neutral-500 w-full border-transparent border-b-2 pt-4 pr-6 pb-4 pl-6 gap-x-2 gap-y-2 items-center justify-center" onclick="updateSolution(3)">
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
<span>Monitor &amp; Remediate</span>
</button>

</div>

<div className="p-1.5 bg-neutral-100">
<div className="aspect-[16/10] md:aspect-[2/1] overflow-hidden border-black/5 border rounded-lg relative shadow-inner bg-white">
<img alt="Solution Interface" className="transition-all duration-500 ease-out w-full h-full object-cover" id="sol-image" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab1cd31e-0bc0-4210-855f-37451330c75e_original.GIF"/>
</div>
</div>

<div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/20 border-t border-white/40">

<div className="bg-red-50/60 border border-red-100/60 rounded-xl p-6 relative">
<div className="flex items-center gap-2 mb-3">
<div className="w-2 h-2 rounded-full bg-red-400"></div>
<h4 className="font-semibold text-red-500/80 uppercase tracking-widest text-sm">
                      The Pain Point
                    </h4>
</div>
<p className="leading-relaxed transition-all duration-300 text-base font-medium text-neutral-700" id="sol-pain">
                    Administrators struggled with flattened, unstructured policy
                    lists and were forced to exit the workflow to verify version
                    updates. This lack of hierarchy and context led to high
                    cognitive load and update fatigue.
                  </p>
</div>

<div className="bg-[#455381]/5 border-[#455381]/10 border rounded-xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="flex items-center gap-2 mb-3">
<div className="w-2 h-2 rounded-full bg-[#455381]"></div>
<h4 className="text-xs font-semibold text-[#455381]/90 uppercase tracking-widest">
                      Design Solution
                    </h4>
</div>
<p className="leading-relaxed transition-all duration-300 text-base font-medium text-neutral-900" id="sol-desc">
                    The redesigned interface integrates OS-level grouping with
                    hover-triggered change logs. This combination allows users
                    to visualize fleet coverage and assess critical version
                    differences instantly within the same view, eliminating the
                    need for context switching.
                  </p>
</div>
</div>
</div>
</section>

<section className="content-card p-8 md:p-10 scroll-mt-32 transition-all duration-300 ease-out hover:scale-[1.02] hover:border-[#455381] group" id="outcome">
<h2 className="flex items-center gap-3 text-xl font-semibold text-neutral-900 tracking-tight mb-10">
<span className="flex items-center justify-center w-7 h-7 rounded-md bg-neutral-100 text-neutral-500 text-sm group-hover:bg-[#455381] group-hover:text-white group-hover:scale-110 transition-all duration-300 font-semibold">
                05
              </span>
              Impact &amp; Key Learnings
            </h2>
<div className="mb-14 border-b border-neutral-200/60 pb-12">
<h3 className="text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2">
<svg className="lucide lucide-trophy text-[#455381]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
<path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
<path d="M4 22h16"></path>
<path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
<path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
<path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
</svg>
                The Impact
              </h3>
<p className="leading-relaxed font-medium text-neutral-600 max-w-3xl mb-8">
                By shifting from manual maintenance to
                <span className="font-semibold text-neutral-900">
                  automated compliance
                </span>
                , we helped 12+ enterprise clients (including Nike &amp; Home
                Depot) accelerate their cloud migration.
              </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="p-6 bg-neutral-50 rounded-xl border border-neutral-200/60 hover:border-[#455381]/30 transition-colors">
<div className="text-4xl font-bold text-[#455381] tracking-tight mb-2">
                    70% Boost
                  </div>
<div className="font-semibold text-neutral-900 mb-1">
                    Deployment Efficiency
                  </div>
<div className="text-base font-medium text-neutral-600">
                    Consolidated 12+ fragmented browser tabs into a unified
                    'single pane of glass,' slashing operational audit time from
                    minutes to seconds.
                  </div>
</div>
<div className="hover:border-[#455381]/30 transition-colors bg-neutral-50 border-neutral-200/60 border rounded-xl pt-6 pr-6 pb-6 pl-6">
<div className="text-4xl font-bold text-[#455381] tracking-tight mb-2">
                    12+ Major Firms
                  </div>
<div className="font-semibold text-neutral-900 mb-1">
                    Market Pilots
                  </div>
<div className="font-medium text-neutral-600">
                    Secured pilots with industry leaders. The new 'risk-averse'
                    review flow increased user confidence, driving a sustained
                    spike in weekly active usage.
                  </div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 items-stretch">
<div className="flex flex-col gap-10">
<div className="group/learn">
<span className="text-xs font-bold text-[#455381] uppercase tracking-widest mb-2 block">
                    Key Learning 01
                  </span>
<h3 className="text-xl font-bold text-neutral-900 mb-3 tracking-tight group-hover/learn:text-[#455381] transition-colors">
                    Design as a "Safety Net"
                  </h3>
<p className="leading-relaxed font-medium text-neutral-600 mb-4">
                    In enterprise contexts, efficiency means nothing without
                    accuracy. The interface must actively prevent errors—using
                    constraints like toggle switches and 'just-in-time' risk
                    alerts—rather than relying solely on user memory.
                  </p>
</div>
<div className="group/learn">
<span className="text-xs font-bold text-[#455381] uppercase tracking-widest mb-2 block">
                    Key Learning 02
                  </span>
<h3 className="text-xl font-bold text-neutral-900 mb-3 tracking-tight group-hover/learn:text-[#455381] transition-colors">
                    Translating Logic to Language
                  </h3>
<p className="leading-relaxed font-medium text-neutral-600 mb-4">
                    A major breakthrough was realizing that accurate data (e.g.,
                    'false') isn't always useful data. Effective B2B design
                    requires acting as a translator—converting raw backend logic
                    into clear human concepts (e.g., 'Disabled') to reduce
                    cognitive load.
                  </p>
</div>
<div className="group/learn">
<span className="text-xs font-bold text-[#455381] uppercase tracking-widest mb-2 block">
                    Key Learning 03
                  </span>
<h3 className="text-xl font-bold text-neutral-900 mb-3 tracking-tight group-hover/learn:text-[#455381] transition-colors">
                    Contextual Intelligence
                  </h3>
<p className="leading-relaxed font-medium text-neutral-600 mb-4">
                    Users shouldn't have to leave their workflow to verify a
                    decision. Embedding auxiliary data—like the hover-triggered
                    'Update Log'—proved that progressive disclosure is key to
                    maintaining flow in complex systems.
                  </p>
</div>
</div>
<div className="relative min-h-[320px] rounded-2xl overflow-hidden shadow-2xl group/card">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105 filter brightness-[0.7] contrast-[1.1]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79fbc703-0c28-41fd-b02e-6d730184685d_3840w.png" style={{}}/>
<div className="absolute inset-0 bg-[#455381]/40 mix-blend-multiply"></div>
<div className="absolute inset-0 overflow-hidden">
<style>
                    @keyframes aura-diffuse-gradient {
                      0% { background-position: 0% 50%; }
                      50% { background-position: 100% 50%; }
                      100% { background-position: 0% 50%; }
                    }
                  </style>
<div className="absolute -inset-[50%] w-[200%] h-[200%]" style="background: linear-gradient(-45deg, #719292, #719292, #D76660, #719292); 
              background-size: 400% 400%; 
              animation: aura-diffuse-gradient 15s ease infinite; 
              filter: blur(60px);"></div>
<div className="absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0) 60%)'}}></div>
</div>
<div className="absolute bottom-0 left-0 p-8 z-10">
<svg className="text-white/80 mb-4 opacity-80" fill="currentColor" height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M10 11h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 0 1-1v-1a2 2 0 1 0-4 0v1a1 1 0 0 1-2 0v-1a4 4 0 1 1 8 0v2a3 3 0 0 1-3 3z"></path>
<path d="M22 11h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 0 1-1v-1a2 2 0 1 0-4 0v1a1 1 0 0 1-2 0v-1a4 4 0 1 1 8 0v2a3 3 0 0 1-3 3z"></path>
</svg>
<p className="text-xl md:text-2xl font-medium text-white leading-relaxed font-google-sans-flex tracking-tight mb-2">
                    "Successful digital transformation isn't about the
                    technology—it's about the confidence to use it."
                  </p>
<div className="flex items-center gap-3 mt-4">
<div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
<svg className="text-white" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-xs font-bold text-white/80 uppercase tracking-widest">
                      Project Conclusion
                    </span>
</div>
</div>
</div>
</div>
</section>
</article>
</div>
</main>

    </>
  );
}
