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



        // Theme initialization - always start in light mode
        if (localStorage.theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'light';
        }

        function toggleTheme() {
            if (document.documentElement.classList.contains('dark')) {
                // Switching to light mode - no refresh needed
                document.documentElement.classList.remove('dark');
                localStorage.theme = 'light';
            } else {
                // Switching to dark mode - force refresh
                document.documentElement.classList.add('dark');
                localStorage.theme = 'dark';
                location.reload();
            }
        }

        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            const body = document.body;
            if (menu.classList.contains('translate-x-full')) {
                menu.classList.remove('translate-x-full');
                body.classList.add('overflow-hidden');
            } else {
                menu.classList.add('translate-x-full');
                body.classList.remove('overflow-hidden');
            }
        }
    


        // Configure Tailwind to include our custom 3D transform utilities
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        border: "hsl(var(--border))",
                        input: "hsl(var(--input))",
                        ring: "hsl(var(--ring))",
                        background: "hsl(var(--background))",
                        foreground: "hsl(var(--foreground))",
                    }
                }
            },
            plugins: [
                function({ addUtilities }) {
                    const rotateXUtilities = {};
                    const rotateYUtilities = {};
                    const rotateZUtilities = {};
                    const rotateValues = [0, 5, 10, 15, 20, 30, 45, 60, 75, 90];
                    
                    rotateValues.forEach((value) => {
                        rotateXUtilities[`.rotate-x-${value}`] = {
                            '--tw-rotate-x': `${value}deg`,
                            transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`.replace(/\s+/g, ' ').trim(),
                        };
                        if (value !== 0) {
                            rotateXUtilities[`.-rotate-x-${value}`] = {
                                '--tw-rotate-x': `-${value}deg`,
                                transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`.replace(/\s+/g, ' ').trim(),
                            };
                        }
                    });

                    // Generate rotate-y utilities
                    rotateValues.forEach((value) => {
                        rotateYUtilities[`.rotate-y-${value}`] = {
                            '--tw-rotate-y': `${value}deg`,
                            transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`.replace(/\s+/g, ' ').trim(),
                        };
                        if (value !== 0) {
                            rotateYUtilities[`.-rotate-y-${value}`] = {
                                '--tw-rotate-y': `-${value}deg`,
                                transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`.replace(/\s+/g, ' ').trim(),
                            };
                        }
                    });

                    // Generate rotate-z utilities
                    rotateValues.forEach((value) => {
                        rotateZUtilities[`.rotate-z-${value}`] = {
                            '--tw-rotate-z': `${value}deg`,
                            transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`.replace(/\s+/g, ' ').trim(),
                        };
                        if (value !== 0) {
                            rotateZUtilities[`.-rotate-z-${value}`] = {
                                '--tw-rotate-z': `-${value}deg`,
                                transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`.replace(/\s+/g, ' ').trim(),
                            };
                        }
                    });

                    addUtilities({
                        ...rotateXUtilities,
                        ...rotateYUtilities,
                        ...rotateZUtilities,
                        ".perspective-none": { perspective: "none" },
                        ".perspective-dramatic": { perspective: "100px" },
                        ".perspective-near": { perspective: "300px" },
                        ".perspective-normal": { perspective: "500px" },
                        ".perspective-midrange": { perspective: "800px" },
                        ".perspective-distant": { perspective: "1200px" },
                        ".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
                        ".transform-style-flat": { "transform-style": "flat" },
                    });
                }
            ]
        };
    


        document.addEventListener('DOMContentLoaded', () => {
            if(document.getElementById('particles-js')) {
                particlesJS('particles-js', {
                    particles: {
                        number: { value: 60, density: { enable: true, value_area: 800 } },
                        color: { value: "#ffffff" },
                        shape: { type: "circle" },
                        opacity: { value: 0.5, random: false },
                        size: { value: 2, random: true },
                        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.3, width: 1 },
                        move: { enable: true, speed: 4, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
                        modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
                    },
                    retina_detect: true
                });
            }
        });
    


        document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-link');
            const slider = document.getElementById('nav-slider');
            
            function updateSlider(element) {
                if (!element) {
                    slider.style.opacity = '0';
                    return;
                }
                
                const rect = element.getBoundingClientRect();
                const parentRect = element.parentElement.getBoundingClientRect();
                
                slider.style.opacity = '1';
                slider.style.width = `${rect.width}px`;
                slider.style.left = `${rect.left - parentRect.left}px`;
                
                // Update text colors
                navLinks.forEach(link => {
                    if (link === element) {
                        link.classList.add('dark:text-white', 'text-zinc-900');
                        link.classList.remove('dark:text-zinc-400', 'text-zinc-500');
                    } else {
                        link.classList.remove('dark:text-white', 'text-zinc-900');
                        link.classList.add('dark:text-zinc-400', 'text-zinc-500');
                    }
                });
            }

            const observerOptions = {
                root: null,
                rootMargin: '-50% 0px -50% 0px',
                threshold: 0
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                        if (activeLink) {
                            updateSlider(activeLink);
                        }
                    }
                });
            }, observerOptions);

            sections.forEach(section => observer.observe(section));

            // Handle initial position and resize
            window.addEventListener('resize', () => {
                const activeSection = Array.from(sections).find(section => {
                    const rect = section.getBoundingClientRect();
                    return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
                });
                if (activeSection) {
                    const activeLink = document.querySelector(`.nav-link[href="#${activeSection.id}"]`);
                    updateSlider(activeLink);
                }
            });

            // If at top of page, no slider or highlight first link if hero is visible
            window.addEventListener('scroll', () => {
                if (window.scrollY < 100) {
                    // slider.style.opacity = '0';
                    // Optional: highlight Projects if we're near the top
                }
            });
        });
    


        import { Renderer, Program, Mesh, Color, Triangle } from 'https://unpkg.com/ogl';

        const VERT = `#version 300 es
        in vec2 position;
        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }`;

        const FRAG = `#version 300 es
        precision highp float;
        uniform float uTime;
        uniform float uAmplitude;
        uniform vec3 uColorStops[3];
        uniform vec2 uResolution;
        uniform float uBlend;
        out vec4 fragColor;

        vec3 permute(vec3 x) {
            return mod(((x * 34.0) + 1.0) * x, 289.0);
        }

        float snoise(vec2 v){
            const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
            vec2 i  = floor(v + dot(v, C.yy));
            vec2 x0 = v - i + dot(i, C.xx);
            vec2 i1;
            i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
            vec4 x12 = x0.xyxy + C.xxzz;
            x12.xy -= i1;
            i = mod(i, 289.0);
            vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
            vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
            m = m * m;
            m = m * m;
            vec3 x = 2.0 * fract(p * C.www) - 1.0;
            vec3 h = abs(x) - 0.5;
            vec3 ox = floor(x + 0.5);
            vec3 a0 = x - ox;
            m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
            vec3 g;
            g.x  = a0.x  * x0.x  + h.x  * x0.y;
            g.yz = a0.yz * x12.xz + h.yz * x12.yw;
            return 130.0 * dot(m, g);
        }

        struct ColorStop {
            vec3 color;
            float position;
        };

        #define COLOR_RAMP(colors, factor, finalColor) { \
            int index = 0; \
            for (int i = 0; i < 2; i++) { \
                ColorStop currentColor = colors[i]; \
                bool isInBetween = currentColor.position <= factor; \
                index = int(mix(float(index), float(i), float(isInBetween))); \
            } \
            ColorStop currentColor = colors[index]; \
            ColorStop nextColor = colors[index + 1]; \
            float range = nextColor.position - currentColor.position; \
            float lerpFactor = (factor - currentColor.position) / range; \
            finalColor = mix(currentColor.color, nextColor.color, lerpFactor); \
        }

        void main() {
            vec2 uv = gl_FragCoord.xy / uResolution;
            ColorStop colors[3];
            colors[0] = ColorStop(uColorStops[0], 0.0);
            colors[1] = ColorStop(uColorStops[1], 0.5);
            colors[2] = ColorStop(uColorStops[2], 1.0);
            vec3 rampColor;
            COLOR_RAMP(colors, uv.x, rampColor);
            float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
            height = exp(height);
            height = (uv.y * 2.0 - height + 0.2);
            float intensity = 0.6 * height;
            float midPoint = 0.20;
            float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);
            vec3 auroraColor = intensity * rampColor;
            fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
        }
        `;

        const CONFIG = {
            colorStops: ['#5227FF', '#7cff67', '#5227FF'],
            amplitude: 1.0,
            blend: 0.5,
            speed: 1.0
        };

        const ctn = document.getElementById('aurora-container');
        if (ctn) {
            const renderer = new Renderer({ alpha: true, premultipliedAlpha: true, antialias: true });
            const gl = renderer.gl;
            gl.clearColor(0, 0, 0, 0);
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
            gl.canvas.style.backgroundColor = 'transparent';
            gl.canvas.style.width = '100%';
            gl.canvas.style.height = '100%';
            ctn.appendChild(gl.canvas);

            const geometry = new Triangle(gl);

            const colorStopsArray = CONFIG.colorStops.map(hex => {
                const c = new Color(hex);
                return [c.r, c.g, c.b];
            });

            const program = new Program(gl, {
                vertex: VERT,
                fragment: FRAG,
                uniforms: {
                    uTime: { value: 0 },
                    uAmplitude: { value: CONFIG.amplitude },
                    uColorStops: { value: colorStopsArray },
                    uResolution: { value: [ctn.offsetWidth, ctn.offsetHeight] },
                    uBlend: { value: CONFIG.blend }
                }
            });

            const mesh = new Mesh(gl, { geometry, program });

            function resize() {
                if (!ctn) return;
                const width = ctn.offsetWidth;
                const height = ctn.offsetHeight;
                renderer.setSize(width, height);
                program.uniforms.uResolution.value = [width, height];
            }

            window.addEventListener('resize', resize);
            resize();

            let time = 0;
            requestAnimationFrame(function update(t) {
                requestAnimationFrame(update);
                time += 0.01 * CONFIG.speed;
                program.uniforms.uTime.value = time;
                renderer.render({ scene: mesh });
            });
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
      <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-geist" rel="stylesheet"/><style id="all-fonts-style-font-geist">.font-geist { font-family: 'Geist', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-roboto" rel="stylesheet"/><style id="all-fonts-style-font-roboto">.font-roboto { font-family: 'Roboto', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-montserrat" rel="stylesheet"/><style id="all-fonts-style-font-montserrat">.font-montserrat { font-family: 'Montserrat', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-poppins" rel="stylesheet"/><style id="all-fonts-style-font-poppins">.font-poppins { font-family: 'Poppins', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&amp;display=swap" id="all-fonts-link-font-playfair" rel="stylesheet"/><style id="all-fonts-style-font-playfair">.font-playfair { font-family: 'Playfair Display', serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;500;600;700&amp;display=swap" id="all-fonts-link-font-instrument-serif" rel="stylesheet"/><style id="all-fonts-style-font-instrument-serif">.font-instrument-serif { font-family: 'Instrument Serif', serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&amp;display=swap" id="all-fonts-link-font-merriweather" rel="stylesheet"/><style id="all-fonts-style-font-merriweather">.font-merriweather { font-family: 'Merriweather', serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-bricolage" rel="stylesheet"/><style id="all-fonts-style-font-bricolage">.font-bricolage { font-family: 'Bricolage Grotesque', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&amp;display=swap" id="all-fonts-link-font-jakarta" rel="stylesheet"/><style id="all-fonts-style-font-jakarta">.font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&amp;display=swap" id="all-fonts-link-font-manrope" rel="stylesheet"/><style id="all-fonts-style-font-manrope">.font-manrope { font-family: 'Manrope', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-space-grotesk" rel="stylesheet"/><style id="all-fonts-style-font-space-grotesk">.font-space-grotesk { font-family: 'Space Grotesk', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800&amp;display=swap" id="all-fonts-link-font-work-sans" rel="stylesheet"/><style id="all-fonts-style-font-work-sans">.font-work-sans { font-family: 'Work Sans', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&amp;display=swap" id="all-fonts-link-font-pt-serif" rel="stylesheet"/><style id="all-fonts-style-font-pt-serif">.font-pt-serif { font-family: 'PT Serif', serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-geist-mono" rel="stylesheet"/><style id="all-fonts-style-font-geist-mono">.font-geist-mono { font-family: 'Geist Mono', monospace !important; }</style><link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&amp;display=swap" id="all-fonts-link-font-space-mono" rel="stylesheet"/><style id="all-fonts-style-font-space-mono">.font-space-mono { font-family: 'Space Mono', monospace !important; }</style><link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-quicksand" rel="stylesheet"/><style id="all-fonts-style-font-quicksand">.font-quicksand { font-family: 'Quicksand', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&amp;display=swap" id="all-fonts-link-font-nunito" rel="stylesheet"/><style id="all-fonts-style-font-nunito">.font-nunito { font-family: 'Nunito', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400..800&amp;display=swap" id="all-fonts-link-font-newsreader" rel="stylesheet"/><style id="all-fonts-style-font-newsreader">.font-newsreader { font-family: 'Newsreader', serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@400;500;600;700&amp;display=swap" id="all-fonts-link-font-google-sans-flex" rel="stylesheet"/><style id="all-fonts-style-font-google-sans-flex">.font-google-sans-flex { font-family: 'Google Sans Flex', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-oswald" rel="stylesheet"/><style id="all-fonts-style-font-oswald">.font-oswald { font-family: 'Oswald', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-dm-sans" rel="stylesheet"/><style id="all-fonts-style-font-dm-sans">.font-dm-sans { font-family: 'DM Sans', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-cormorant" rel="stylesheet"/><style id="all-fonts-style-font-cormorant">.font-cormorant { font-family: 'Cormorant Garamond', serif !important; }</style>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Shafin | Interface Designer</title>
<link href="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c4577a00-fb58-4059-bcc9-7b63bfb2351d_800w.png" rel="icon" type="image/png"/>


<link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&amp;family=Playfair+Display:ital,wght@0,400;0,500;1,400&amp;family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>

<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>


<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&amp;display=swap" id="all-fonts-link-font-playfair" rel="stylesheet"/><style id="all-fonts-style-font-playfair">.font-playfair { font-family: 'Playfair Display', serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;500;600;700&amp;display=swap" id="all-fonts-link-font-instrument-serif" rel="stylesheet"/><style id="all-fonts-style-font-instrument-serif">.font-instrument-serif { font-family: 'Instrument Serif', serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-bricolage" rel="stylesheet"/><style id="all-fonts-style-font-bricolage">.font-bricolage { font-family: 'Bricolage Grotesque', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&amp;display=swap" id="all-fonts-link-font-jakarta" rel="stylesheet"/><style id="all-fonts-style-font-jakarta">.font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-space-grotesk" rel="stylesheet"/><style id="all-fonts-style-font-space-grotesk">.font-space-grotesk { font-family: 'Space Grotesk', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800&amp;display=swap" id="all-fonts-link-font-work-sans" rel="stylesheet"/><style id="all-fonts-style-font-work-sans">.font-work-sans { font-family: 'Work Sans', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&amp;display=swap" id="all-fonts-link-font-pt-serif" rel="stylesheet"/><style id="all-fonts-style-font-pt-serif">.font-pt-serif { font-family: 'PT Serif', serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-geist-mono" rel="stylesheet"/><style id="all-fonts-style-font-geist-mono">.font-geist-mono { font-family: 'Geist Mono', monospace !important; }</style><link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&amp;display=swap" id="all-fonts-link-font-space-mono" rel="stylesheet"/><style id="all-fonts-style-font-space-mono">.font-space-mono { font-family: 'Space Mono', monospace !important; }</style><link href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@400;500;600;700&amp;display=swap" id="all-fonts-link-font-google-sans-flex" rel="stylesheet"/><style id="all-fonts-style-font-google-sans-flex">.font-google-sans-flex { font-family: 'Google Sans Flex', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-dm-sans" rel="stylesheet"/><style id="all-fonts-style-font-dm-sans">.font-dm-sans { font-family: 'DM Sans', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-cormorant" rel="stylesheet"/><style id="all-fonts-style-font-cormorant">.font-cormorant { font-family: 'Cormorant Garamond', serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-geist" rel="stylesheet"/><style id="all-fonts-style-font-geist">.font-geist { font-family: 'Geist', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&amp;display=swap" id="all-fonts-link-font-merriweather" rel="stylesheet"/><style id="all-fonts-style-font-merriweather">.font-merriweather { font-family: 'Merriweather', serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&amp;display=swap" id="all-fonts-link-font-manrope" rel="stylesheet"/><style id="all-fonts-style-font-manrope">.font-manrope { font-family: 'Manrope', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-quicksand" rel="stylesheet"/><style id="all-fonts-style-font-quicksand">.font-quicksand { font-family: 'Quicksand', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400..800&amp;display=swap" id="all-fonts-link-font-newsreader" rel="stylesheet"/><style id="all-fonts-style-font-newsreader">.font-newsreader { font-family: 'Newsreader', serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-oswald" rel="stylesheet"/><style id="all-fonts-style-font-oswald">.font-oswald { font-family: 'Oswald', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-poppins" rel="stylesheet"/><style id="all-fonts-style-font-poppins">.font-poppins { font-family: 'Poppins', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&amp;display=swap" id="all-fonts-link-font-inter" rel="stylesheet"/><style id="all-fonts-style-font-inter">.font-inter { font-family: 'Inter', sans-serif !important; }</style>

<div className="fixed top-0 w-full h-screen -z-10 hidden dark:block" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute inset-0 -z-10" id="particles-js"><canvas className="particles-js-canvas-el" height="845" style={{width: '100%', height: '100%'}} width="1361"></canvas></div>
</div>

<div className="fixed top-0 left-0 w-full h-screen z-[-10] opacity-0 dark:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden" id="aurora-container"><canvas height="940" style={{width: '1251px', height: '940px', backgroundColor: 'transparent'}} width="1251"></canvas><canvas height="805" style={{width: '1065px', height: '805px', backgroundColor: 'transparent'}} width="1065"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="805" style={{width: '1545px', height: '805px', backgroundColor: 'transparent'}} width="1545"></canvas><canvas height="769" style={{width: '1238px', height: '769px', backgroundColor: 'transparent'}} width="1238"></canvas><canvas height="769" style={{width: '1238px', height: '769px', backgroundColor: 'transparent'}} width="1238"></canvas><canvas height="769" style={{width: '1238px', height: '769px', backgroundColor: 'transparent'}} width="1238"></canvas><canvas height="769" style={{width: '1238px', height: '769px', backgroundColor: 'transparent'}} width="1238"></canvas><canvas height="769" style={{width: '1238px', height: '769px', backgroundColor: 'transparent'}} width="1238"></canvas><canvas height="769" style={{width: '1238px', height: '769px', backgroundColor: 'transparent'}} width="1238"></canvas></div>
<div className="fixed top-0 left-0 w-full h-full z-[-9] pointer-events-none hidden dark:block bg-black/20"></div>

<div className="fixed inset-0 z-[60] dark:bg-[#0A0A0A] bg-white transition-transform duration-300 translate-x-full flex flex-col pt-32 px-8 sm:hidden" id="mobile-menu">
<button className="absolute top-8 right-8 p-2 text-zinc-500 hover:text-black dark:hover:text-white" onclick="toggleMenu()">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 18 12"></path></svg>
</button>
<nav className="nav-links flex flex-col gap-8 text-2xl font-medium text-zinc-900 dark:text-white">
<a href="#projects" onclick="toggleMenu()">Projects</a>
<a href="#how-i-build" onclick="toggleMenu()">How I Build</a>
<a href="#expertise" onclick="toggleMenu()">I've Got Your Back</a>
<a href="#contact" onclick="toggleMenu()">Got a Project?</a>
</nav>
</div>

<header className="fixed z-50 flex px-[10px] sm:px-4 top-6 right-0 left-0 justify-center">
<div className="relative flex w-full sm:w-auto sm:inline-flex justify-between sm:justify-start gap-2 sm:gap-4 dark:bg-zinc-800/80 bg-white/90 border border-zinc-200 dark:border-white/5 rounded-full p-1.5 shadow-xl backdrop-blur-md items-center max-w-[95vw] md:max-w-full overflow-x-auto no-scrollbar transition-colors duration-300">

<a className="flex-shrink-0 hover:opacity-70 transition-opacity px-2" href="#">
<span className="text-zinc-900 dark:text-white font-semibold text-lg" style={{fontFamily: '\'Geist\', sans-serif'}}>S.</span>
</a>

<div className="h-6 w-px bg-zinc-200 dark:bg-white/10 hidden sm:block"></div>

<div className="absolute h-[calc(100%-12px)] top-1.5 left-1.5 bg-zinc-100 dark:bg-zinc-700/50 border border-zinc-200 dark:border-white/5 rounded-full transition-all duration-300 ease-in-out -z-10 opacity-0 hidden sm:block" id="nav-slider"></div>
<a className="nav-link flex-shrink-0 hidden sm:flex gap-1.5 items-center transition-colors text-xs font-medium rounded-full pt-1.5 pr-4 pb-1.5 pl-4" href="#projects">
<svg className="" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
                Projects
            </a>
<a className="nav-link dark:hover:text-white hover:text-zinc-900 transition-colors cursor-pointer whitespace-nowrap hidden sm:block text-xs pr-2 pl-2" href="#how-i-build">Process</a>
<a className="nav-link dark:hover:text-white hover:text-zinc-900 transition-colors cursor-pointer whitespace-nowrap hidden sm:block text-xs pr-2 pl-2" href="#expertise">Skills</a>
<a className="nav-link dark:hover:text-white hover:text-zinc-900 transition-colors cursor-pointer whitespace-nowrap hidden sm:block text-xs pr-2 pl-2" href="#contact">Contact</a>
<button aria-label="Toggle Theme" className="group flex flex-shrink-0 ml-auto sm:ml-0 dark:hover:bg-white/10 hover:bg-zinc-100 transition-colors w-8 h-8 rounded-full items-center justify-center" onclick="toggleTheme()">
<svg className="hidden dark:block text-zinc-400 group-hover:text-yellow-400 transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<svg className="block dark:hidden text-zinc-500 group-hover:text-zinc-900 transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
</button>
<button className="sm:hidden text-zinc-500 dark:text-zinc-400 dark:hover:text-white hover:text-zinc-900 px-2 transition-colors" onclick="toggleMenu()">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
<a className="hover:bg-yellow-500 transition-colors whitespace-nowrap text-xs font-medium text-stone-50 bg-amber-500/90 rounded-full ml-1 pt-1.5 pr-4 pb-1.5 pl-4" href="#contact">Start project</a>
</div>
</header>
<main className="flex-grow">

<section className="flex flex-col min-h-auto md:min-h-[90vh] overflow-hidden pt-28 pb-20 md:pt-32 md:pb-32 relative justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-indigo-100/50 via-purple-100/30 to-rose-100/50 dark:from-indigo-900/10 dark:via-purple-900/10 dark:to-rose-900/10 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
<div className="w-full max-w-5xl mx-auto px-6">

<div className="inline-flex dark:bg-zinc-800/50 dark:border-white/10 dark:text-zinc-300 text-xs font-semibold text-zinc-600 bg-white/50 backdrop-blur-sm border-zinc-200 border rounded-full mb-10 py-1.5 px-4 gap-x-2 items-center shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-500"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
            Available for new projects
        </div>

<h1 className="leading-tight dark:text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-zinc-900 tracking-tight mb-12"><span className="inline-block origin-bottom-right hover:rotate-12 transition-transform duration-300">🏕️</span> Hi, I'm Shafin <span className="inline-block align-middle">
<img alt="Profile" className="h-[1em] object-top w-auto object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c4577a00-fb58-4059-bcc9-7b63bfb2351d_800w.png"/>
</span> a Web Designer, Enthusiast &amp; a CS Student <span className="inline-block animate-pulse">✨</span> <span className="dark:text-zinc-500 selection:bg-zinc-200 dark:selection:bg-zinc-800 selection:text-zinc-400 text-zinc-400">
    Crafting clean, delightful user experiences
    <span className="inline-block hover:-translate-y-1 transition-transform cursor-default">🌱</span>
    Helping brands increase their value
    <span className="inline-block hover:rotate-12 transition-transform cursor-default">🎉</span>
</span></h1>

<div className="flex flex-col sm:flex-row items-start gap-4">
<a className="group relative overflow-hidden dark:bg-white dark:text-black transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 hover:shadow-xl w-full sm:w-auto text-sm font-semibold text-white bg-zinc-900 rounded-full px-8 py-4 shadow-lg" href="#projects">
<span className="relative z-10 flex items-center gap-2">
                    View Selected Work
                    <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
<a className="w-full sm:w-auto px-8 py-4 rounded-full border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 text-zinc-900 dark:text-white font-semibold text-sm transition-all hover:bg-white dark:hover:bg-zinc-800 hover:shadow-md text-center" href="#contact">
                Get in Touch
            </a>
</div>
</div>
</section>

<div className="relative">

<div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden hidden dark:block">
<div className="absolute top-[10%] right-[-10%] w-[800px] h-[800px] bg-indigo-500/20 blur-[120px] rounded-full"></div>
<div className="absolute bottom-[10%] left-[-10%] w-[800px] h-[800px] bg-orange-500/20 blur-[120px] rounded-full"></div>
<div className="absolute top-[40%] left-[10%] w-[600px] h-[600px] bg-purple-500/20 blur-[120px] rounded-full"></div>
<div className="absolute top-[70%] right-[5%] w-[700px] h-[700px] bg-blue-500/20 blur-[120px] rounded-full"></div>
</div>

<section className="border-y dark:bg-black/60 dark:border-white/5 transition-colors bg-zinc-50/50 border-zinc-200">
<div className="grid grid-cols-2 md:grid-cols-4 max-w-5xl mr-auto ml-auto pt-10 pr-6 pb-10 pl-6 gap-x-8 gap-y-8">
<div className=""><div className="dark:text-white text-3xl font-medium text-zinc-900 tracking-tight mb-1">2+</div><div className="text-xs text-zinc-500 dark:text-zinc-500 uppercase tracking-widest font-semibold">Years Experience</div></div>
<div className=""><div className="dark:text-white text-3xl font-medium text-zinc-900 tracking-tight mb-1">20+</div><div className="dark:text-zinc-500 uppercase text-xs font-semibold text-zinc-500 tracking-widest" style={{}}>Projects</div></div>
<div className=""><div className="dark:text-white text-3xl font-medium text-zinc-900 tracking-tight mb-1">4</div><div className="dark:text-zinc-500 uppercase text-xs font-semibold text-zinc-500 tracking-widest" style={{}}>Hackathons Won</div></div>
<div className=""><div className="text-3xl font-medium tracking-tight mb-1 dark:text-white text-zinc-900">100%</div><div className="dark:text-zinc-500 uppercase text-xs font-semibold text-zinc-500 tracking-widest" style={{}}>Sucess rate</div></div>
</div>
</section>

<section className="dark:bg-black/60 pt-16 pb-16 md:pt-24 md:pb-24" id="projects">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter mb-12 md:mb-20 dark:text-white text-zinc-900">My Projects</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 md:gap-y-24 items-start">

<div className="flex flex-col gap-16 md:gap-24 md:pt-20">

<div className="group cursor-pointer">
<div className="p-3 dark:bg-zinc-900 rounded-[2rem] shadow-sm border dark:border-white/10 transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl bg-white border-zinc-200">
<div className="aspect-[1.1/1] w-full bg-[#EFEDE6] rounded-[1.5rem] relative overflow-hidden flex flex-col items-center justify-center p-8">
<div className="relative w-48 h-32 md:w-64 md:h-40 transform -rotate-6 preserve-3d transition-transform duration-700 group-hover:-rotate-3 group-hover:scale-105">
<div className="absolute -top-12 -right-4 w-12 h-8 border shadow-sm rotate-12 z-20 flex items-center justify-center bg-white border-zinc-200"><div className="w-0 h-0 border-l-[6px] border-l-transparent border-t-[8px] border-r-[6px] border-r-transparent border-t-zinc-200"></div></div>
<div className="absolute -top-6 left-10 w-12 h-8 border shadow-sm -rotate-12 z-20 flex items-center justify-center bg-white border-zinc-200"><div className="w-0 h-0 border-l-[6px] border-l-transparent border-t-[8px] border-r-[6px] border-r-transparent border-t-zinc-200"></div></div>
<div className="absolute inset-0 border-2 rounded-lg transform rotate-x-12 origin-bottom shadow-xl flex flex-col overflow-hidden bg-white border-zinc-800">
<div className="h-full w-full bg-gradient-to-br from-indigo-500 via-purple-500 opacity-80 to-orange-400"></div>
</div>
<div className="absolute -bottom-10 left-[-10%] w-[120%] h-12 border-2 rounded-lg transform skew-x-12 rotate-x-60 origin-top shadow-xl flex items-center justify-center bg-white border-zinc-800"><div className="w-16 h-8 border rounded mt-1 border-zinc-300"></div></div>
</div>
<h4 className="mt-8 md:mt-12 text-center font-bold text-xl md:text-2xl leading-tight max-w-[90%] md:max-w-[80%] z-10 text-zinc-900">We stimulate your business growth!</h4>
</div>
</div>
<div className="mt-6 pl-2">
<div className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
<h3 className="text-2xl font-semibold dark:text-white tracking-tight text-zinc-900">Stimulate</h3>
<svg className="group-hover:text-zinc-900 dark:group-hover:text-white transition-colors text-zinc-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<p className="text-zinc-500 dark:text-zinc-400 mt-1 text-base font-medium">Branding, Web design, Illustrations</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="p-3 dark:bg-zinc-900 rounded-[2rem] shadow-sm border dark:border-white/10 transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl bg-white border-zinc-200">
<div className="aspect-[4/3] overflow-hidden flex flex-col bg-[#F5F5F7] w-full border-white/50 rounded-[1.5rem] border-t border-l pt-6 pl-6 md:pt-8 md:pl-8 relative">
<div className="overflow-hidden bg-white w-full h-full rounded-tl-xl pt-6 pr-6 pb-6 pl-6 relative shadow-[0_0_40px_-10px_rgba(0,0,0,0.1)]">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-2 font-bold text-lg text-zinc-900"><div className="w-6 h-6 rounded flex items-center justify-center text-[10px] bg-zinc-900 text-white">R</div>Reward Point</div>
<div className="hidden sm:flex gap-4 text-[10px] font-medium text-zinc-400"><span className="">About</span><span className="">Features</span><span>Contacts</span><span className="px-2 py-0.5 rounded bg-black text-white">Log in</span></div>
</div>
<h4 className="leading-none text-2xl md:text-3xl font-extrabold text-zinc-900 tracking-tight mb-2">Your passport to cashback rewards</h4>
<p className="text-xs text-zinc-500 mb-6">Earn $ every time you make a purchase from our...</p>
<div className="absolute bottom-[-20px] right-[-20px] w-32 h-32 rounded-full blur-2xl opacity-20 bg-purple-600"></div>
<div className="transform bg-gradient-to-tr from-purple-800 to-indigo-600 w-16 h-16 rounded-xl absolute bottom-4 left-4 shadow-lg rotate-12"></div>
<div className="absolute bottom-10 left-24 w-12 h-12 border rounded-full flex items-center justify-center shadow-lg bg-white border-orange-200"><div className="w-8 h-8 rounded-full border border-orange-400"></div></div>
</div>
</div>
</div>
<div className="mt-6 pl-2">
<div className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
<h3 className="text-2xl font-semibold dark:text-white tracking-tight text-zinc-900">Reward Point</h3>
<svg className="group-hover:text-zinc-900 dark:group-hover:text-white transition-colors text-zinc-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<p className="text-zinc-500 dark:text-zinc-400 mt-1 text-base font-medium">Web design, development</p>
</div>
</div>
</div>

<div className="flex flex-col gap-16 md:gap-24">

<div className="group cursor-pointer">
<div className="p-3 dark:bg-zinc-900 rounded-[2rem] shadow-sm border dark:border-white/10 transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl bg-white border-zinc-200">
<div className="aspect-[16/10] w-full bg-[#03221e] rounded-[1.5rem] relative overflow-hidden flex flex-col p-8 md:p-12">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-[#03221e] to-[#011411]"></div>
<div className="relative z-10 flex gap-4 w-[120%] transform -translate-x-4">
<div className="w-32 h-48 md:w-48 md:h-64 rounded-lg shadow-2xl p-3 flex flex-col gap-2 transform rotate-[-2deg] opacity-90 hover:scale-105 transition-transform bg-zinc-100">
<div className="h-2 w-12 rounded bg-zinc-300"></div>
<div className="h-20 w-full rounded mt-2 bg-zinc-200"></div>
<div className="space-y-1"><div className="h-1.5 w-full rounded bg-zinc-200"></div><div className="h-1.5 w-3/4 rounded bg-zinc-200"></div></div>
</div>
<div className="w-32 h-56 md:w-40 md:h-72 rounded-2xl shadow-2xl p-4 flex flex-col gap-3 transform translate-y-4 hover:scale-105 transition-transform z-20 bg-white">
<div className="flex justify-between items-center"><div className="w-8 h-1 rounded bg-zinc-200"></div><div className="w-4 h-4 rounded-full bg-zinc-100"></div></div>
<div className="h-24 md:h-32 rounded-xl border p-2 bg-zinc-50 border-zinc-100">
<div className="w-full h-full bg-gradient-to-b rounded flex items-end pb-2 justify-center gap-1 from-emerald-50 to-white">
<div className="w-1 h-4 rounded-t bg-emerald-200"></div><div className="w-1 h-8 rounded-t bg-emerald-300"></div><div className="w-1 h-6 rounded-t bg-emerald-200"></div><div className="w-1 h-10 rounded-t bg-emerald-400"></div>
</div>
</div>
<div className="h-2 w-16 rounded bg-zinc-200"></div>
<div className="h-6 md:h-8 w-full rounded-lg shadow-lg text-[6px] flex items-center justify-center bg-emerald-900 text-white">Claim now</div>
</div>
<div className="w-32 h-44 md:w-48 md:h-60 bg-[#FBF8F1] rounded-lg shadow-2xl p-3 transform rotate-[2deg] translate-y-8 opacity-90 hover:scale-105 transition-transform hidden sm:block">
<div className="h-2 w-16 rounded mb-4 bg-orange-100"></div>
<div className="space-y-2">
<div className="flex justify-between"><div className="w-4 h-4 rounded-full bg-yellow-100"></div><div className="w-8 h-2 rounded bg-zinc-100"></div></div>
<div className="flex justify-between"><div className="w-4 h-4 rounded-full bg-green-100"></div><div className="w-8 h-2 rounded bg-zinc-100"></div></div>
<div className="flex justify-between"><div className="w-4 h-4 rounded-full bg-blue-100"></div><div className="w-8 h-2 rounded bg-zinc-100"></div></div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-6 pl-2">
<div className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
<h3 className="text-2xl font-semibold dark:text-white tracking-tight text-zinc-900">Ruby</h3>
<svg className="group-hover:text-zinc-900 dark:group-hover:text-white transition-colors text-zinc-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<p className="text-zinc-500 dark:text-zinc-400 mt-1 text-base font-medium">Branding, Web design, Development</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="p-3 dark:bg-zinc-900 rounded-[2rem] shadow-sm border dark:border-white/10 transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl bg-white border-zinc-200">
<div className="aspect-square w-full bg-[#FF4405] rounded-[1.5rem] relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 opacity-100" style={{backgroundImage: 'radial-gradient(#3B82F6 1.5px, transparent 1.5px)', backgroundSize: '8px 8px', maskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)'}}></div>
<div className="relative z-10 flex items-center gap-3 transform group-hover:scale-110 transition-transform duration-500">
<div className="w-12 h-12 rounded-xl transform rotate-45 flex items-center justify-center bg-white"><div className="w-0 h-0 border-l-[10px] border-l-transparent border-b-[16px] border-b-[#FF4405] border-r-[10px] border-r-transparent transform -rotate-45 mb-1"></div></div>
<span className="text-5xl font-semibold text-white tracking-tight">caldera</span>
</div>
<div className="bg-gradient-to-tr to-transparent from-blue-600/20 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
<div className="mt-6 pl-2">
<div className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
<h3 className="text-2xl font-semibold dark:text-white tracking-tight text-zinc-900">Caldera</h3>
<svg className="group-hover:text-zinc-900 dark:group-hover:text-white transition-colors text-zinc-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<p className="text-zinc-500 dark:text-zinc-400 mt-1 text-base font-medium">Web design, development</p>
</div>
</div>
</div>
</div>
</div></section>

<section className="dark:bg-black/60 overflow-hidden pt-24 pb-24 md:pt-32 md:pb-32 relative" id="how-i-build">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl lg:text-6xl dark:text-white font-medium text-zinc-900 tracking-tighter mb-16 md:mb-20">How I Build</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

<div className="group">
<div className="w-12 h-12 mb-6 transform group-hover:scale-110 transition-transform duration-500">
<svg className="dark:text-orange-400 text-yellow-500 w-[47px] h-[47px]" data-icon-replaced="true" strokeWidth="2" style={{width: '47px', height: '47px'}} viewbox="0 0 100 100">
<defs>
<lineargradient id="grad1" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: 'currentColor', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#fca5a5', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>

<path className="" d="M50 50 L50 10 M50 50 L50 90 M50 50 L90 50 M50 50 L10 50 M50 50 L78 22 M50 50 L22 78 M50 50 L78 78 M50 50 L22 22 M50 50 L65 15 M50 50 L35 85 M50 50 L85 35 M50 50 L15 65 M50 50 L65 85 M50 50 L35 15 M50 50 L85 65 M50 50 L15 35" stroke="url(#grad1)" strokeLinecap="round" strokeWidth="4"></path>
</svg>
</div>
<h3 className="dark:text-zinc-100 text-2xl font-semibold text-zinc-900 font-bricolage mb-3">Improve</h3>
<p className="leading-7 dark:text-zinc-400 text-base text-zinc-600">Continuous improvement. Don't settle — every iteration makes the work sharper.</p>
</div>

<div className="group">
<div className="w-12 h-12 mb-6 transform group-hover:scale-110 transition-transform duration-500">
<svg className="dark:text-orange-400 w-[47px] h-[47px]" data-icon-replaced="true" strokeWidth="2" style={{width: '47px', height: '47px', color: 'rgb(234, 179, 8)'}} viewbox="0 0 100 100">
<path className="" d="M50 0 C50 0 60 40 100 50 C60 60 50 100 50 100 C50 100 40 60 0 50 C40 40 50 0 50 0 Z" fill="url(#grad1)"></path>
</svg>
</div>
<h3 className="dark:text-zinc-100 text-2xl font-semibold text-zinc-900 font-bricolage mb-3">Touch</h3>
<p className="leading-7 dark:text-zinc-400 text-base text-zinc-600">Great design balances beauty and function, with empathy for how people think, feel, and behave.</p>
</div>

<div className="group">
<div className="transform group-hover:scale-110 transition-transform duration-500 w-12 h-12 mb-6">
<svg className="w-[46px] h-[46px]" data-icon-replaced="true" strokeWidth="2" style={{width: '46px', height: '46px', color: 'rgb(248, 250, 252)'}} viewbox="0 0 100 100">
<defs>
<lineargradient id="sphereGrad" x1="20%" x2="100%" y1="20%" y2="100%">
<stop className="stop-color-orange-300" offset="0%" style={{stopColor: '#fdba74'}}></stop>
<stop className="stop-color-orange-500" offset="50%" style={{stopColor: '#f97316'}}></stop>
<stop className="stop-color-red-600" offset="100%" style={{stopColor: '#dc2626'}}></stop>
</lineargradient>
</defs>
<circle className="" cx="50" cy="50" fill="url(#sphereGrad)" r="40"></circle>
</svg>
</div>
<h3 className="dark:text-zinc-100 text-2xl font-semibold text-zinc-900 font-bricolage mb-3">Details</h3>
<p className="leading-7 dark:text-zinc-400 text-base text-zinc-600">Details signal craftsmanship — spacing, typography, micro-copy, and sizing shape a product's identity.</p>
</div>

<div className="group">
<div className="w-12 h-12 mb-6 transform group-hover:scale-110 transition-transform duration-500">
<svg className="dark:text-orange-400 w-[47px] h-[47px]" data-icon-replaced="true" strokeWidth="2" style={{width: '47px', height: '47px', color: 'rgb(234, 179, 8)'}} viewbox="0 0 100 100">
<path className="" d="M50 10 L60 40 L90 30 L70 55 L95 80 L60 70 L50 100 L40 70 L5 80 L30 55 L10 30 L40 40 Z" fill="url(#grad1)"></path>
</svg>
</div>
<h3 className="dark:text-zinc-100 text-2xl font-semibold text-zinc-900 font-bricolage mb-3">Surprise!</h3>
<p className="leading-7 dark:text-zinc-400 text-base text-zinc-600">Micro-interactions and playful touches create delightful, memorable experiences.</p>
</div>
</div>
</div>
</section>

<section className="dark:bg-black/60 pt-24 pb-24 md:pt-32 md:pb-32 overflow-hidden" id="expertise">
<div className="max-w-5xl mx-auto px-6">
<div className="mb-16 md:mb-24">
<h2 className="text-4xl md:text-5xl lg:text-6xl dark:text-white font-medium text-zinc-900 tracking-tight mb-6">I've got your back with...</h2>
<p className="text-xl dark:text-zinc-400 font-light max-w-lg leading-relaxed text-zinc-600">Digital aesthetics that engage and emotionally connect with your users</p>
</div>

<div className="relative h-[280px] w-full max-w-2xl mx-auto mb-16 md:mb-28 group scale-[0.6] sm:scale-75 md:scale-100 origin-center">
<div className="absolute left-1/2 top-0 w-44 h-56 rounded-xl border dark:border-white/10 bg-gradient-to-br dark:from-zinc-900 dark:to-zinc-950 shadow-xl transform -translate-x-[200%] rotate-[-12deg] transition-all duration-700 ease-out group-hover:-translate-x-[220%] group-hover:rotate-[-16deg] flex items-center justify-center overflow-hidden border-zinc-200 from-zinc-50 to-zinc-100">
<div className="w-full p-4 space-y-2 opacity-50">
<div className="h-2 w-1/2 dark:bg-white/20 rounded-full bg-zinc-300"></div>
<div className="h-2 w-full dark:bg-white/10 rounded-full bg-zinc-200"></div>
<div className="h-2 w-3/4 dark:bg-white/10 rounded-full bg-zinc-200"></div>
</div>
</div>
<div className="absolute left-1/2 top-0 w-44 h-56 rounded-xl border dark:border-white/10 dark:bg-[#0A0A0A] shadow-xl transform -translate-x-[130%] rotate-[-6deg] transition-all duration-700 ease-out group-hover:-translate-x-[140%] group-hover:rotate-[-8deg] flex flex-col items-center justify-center z-10 border-zinc-200 bg-white">
<div className="w-12 h-12 rounded-full border dark:bg-yellow-500/10 dark:border-yellow-500/20 flex items-center justify-center mb-3 border-yellow-100 bg-yellow-50">
<svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="h-1.5 w-16 dark:bg-white/10 rounded-full bg-zinc-200"></div>
</div>
<div className="absolute left-1/2 top-0 w-44 h-56 rounded-xl border dark:border-white/10 dark:bg-white shadow-xl transform -translate-x-[60%] rotate-[0deg] transition-all duration-700 ease-out group-hover:scale-105 z-20 flex items-center justify-center border-zinc-200 bg-zinc-900">
<div className="dark:text-black font-serif text-3xl italic text-white">Aa</div>
</div>
<div className="absolute left-1/2 top-0 w-44 h-56 rounded-xl border dark:border-white/10 bg-[#E0F2FE] dark:bg-[#0c2d48] shadow-xl transform translate-x-[10%] rotate-[6deg] transition-all duration-700 ease-out group-hover:translate-x-[20%] group-hover:rotate-[8deg] flex items-center justify-center z-10 overflow-hidden border-zinc-200">
<svg className="w-10 h-10 text-blue-500/50 dark:text-blue-400/50" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="9" x2="9" y1="21" y2="9"></line></svg>
</div>
<div className="absolute left-1/2 top-0 w-44 h-56 rounded-xl border dark:border-white/10 bg-gradient-to-b dark:from-emerald-950/30 dark:to-black shadow-xl transform translate-x-[80%] rotate-[12deg] transition-all duration-700 ease-out group-hover:translate-x-[100%] group-hover:rotate-[16deg] flex items-center justify-center border-zinc-200 from-emerald-50 to-white">
<div className="grid grid-cols-2 gap-2 p-4">
<div className="w-6 h-6 rounded dark:bg-emerald-500/20 bg-emerald-200/50"></div>
<div className="w-6 h-6 rounded dark:bg-emerald-500/20 bg-emerald-200/50"></div>
<div className="w-6 h-6 rounded dark:bg-emerald-500/20 bg-emerald-200/50"></div>
<div className="w-6 h-6 rounded dark:bg-emerald-500/20 bg-emerald-200/50"></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 lg:gap-x-24 dark:text-zinc-200 text-lg text-zinc-900 font-medium">
<div className="flex flex-col">
<div className="py-4 border-b border-dashed dark:border-zinc-800 flex items-center justify-between group cursor-default border-zinc-200"><span className="">Product Design</span><span className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400">→</span></div>
<div className="py-4 border-b border-dashed dark:border-zinc-800 flex items-center justify-between group cursor-default border-zinc-200"><span>Websites / Apps</span><span className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400">→</span></div>
<div className="py-4 border-b border-dashed dark:border-zinc-800 md:border-b-0 flex items-center justify-between group cursor-default border-zinc-200"><span>Design Systems</span><span className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400">→</span></div>
</div>
<div className="flex flex-col">
<div className="py-4 border-b border-dashed dark:border-zinc-800 flex items-center justify-between group cursor-default border-zinc-200"><span>Animation</span><span className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400">→</span></div>
<div className="py-4 border-b border-dashed dark:border-zinc-800 flex items-center justify-between group cursor-default border-zinc-200"><span>Midjourney</span><span className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400">→</span></div>
<div className="py-4 border-b border-dashed dark:border-zinc-800 md:border-b-0 flex items-center justify-between group cursor-default border-zinc-200"><span className="">Visual Identity</span><span className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400">→</span></div>
</div>
<div className="flex flex-col">
<div className="py-4 border-b border-dashed dark:border-zinc-800 flex items-center justify-between group cursor-default border-zinc-200"><span>Framer</span><span className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400">→</span></div>
<div className="py-4 border-b border-dashed dark:border-zinc-800 flex items-center justify-between group cursor-default border-zinc-200"><span>Marketing</span><span className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400">→</span></div>
<div className="py-4 md:border-b-0 flex items-center justify-between group cursor-default"><span>Iconography</span><span className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400">→</span></div>
</div>
</div>
</div></section>

<section className="dark:bg-black/60 sm:py-32 pt-24 pb-24 relative" id="contact">
<div className="max-w-3xl mx-auto px-6 text-center">

<div aria-hidden="true" className="flex justify-center mb-6">
<svg className="text-rose-300 dark:text-rose-300/80 -rotate-6 opacity-90" fill="none" height="100" viewbox="0 0 60 120" width="60" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M32 110C32 110 35 70 35 60C35 40 12 45 18 60C24 75 52 40 52 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<h2 className="sm:text-7xl dark:text-white text-5xl font-bold text-zinc-900 tracking-tighter font-geist mb-6">
    Got a project?
  </h2>
<p className="dark:text-zinc-400 sm:text-xl text-lg font-normal text-zinc-500 mb-12">
    Discover how we could work together :)
  </p>
<div className="flex justify-center">
<a className="group relative flex items-center justify-center w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-white font-medium text-lg transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-zinc-900/20 dark:hover:shadow-white/20" href="mailto:hello@alex.design">
<span className="z-10 text-lg font-poppins relative">Get in touch</span>
<div className="bg-amber-500 rounded-full absolute top-0 right-0 bottom-0 left-0"></div>
</a>
</div>
</div>
</section>
</div>
</main>

<footer className="border-t dark:bg-[#050505] py-12 dark:border-white/5 transition-colors bg-zinc-50 border-zinc-200">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-sm text-zinc-500 dark:text-zinc-500">© 2026 Shafin. All rights reserved.</span>
</div>
<div className="flex items-center gap-6">
<a className="transition-colors dark:text-zinc-500 dark:hover:text-white text-zinc-400 hover:text-black" href="https://x.com/shahariashafin" rel="noopener noreferrer" target="_blank"><svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="transition-colors dark:text-zinc-500 dark:hover:text-white text-zinc-400 hover:text-black" href="https://github.com/beingshafin" rel="noopener noreferrer" target="_blank"><svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
<a className="transition-colors dark:text-zinc-500 dark:hover:text-white text-zinc-400 hover:text-black" href="https://shafin.me/" rel="noopener noreferrer" target="_blank"><svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></a>
</div>
</div>
</footer>






    </>
  );
}
