/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      const rotateXUtilities = {};
      const rotateYUtilities = {};
      const rotateZUtilities = {};
      const rotateValues = [0, 5, 10, 15, 20, 25, 30, 45, 50, 55, 58, 60, 75];
      
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
  ],
}