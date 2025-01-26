// module.exports = {
//   content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
//   theme: {
//     extend: {
//       colors: {
//         customGray: '#202020',
//       },
//       backdropBlur: {
//         sm: '4px',
//         DEFAULT: '8px',
//         lg: '12px',
//       },
//       backdropOpacity: {
//         70: '0.7',
//       },
//       animation: {
//         scroll: 'scroll 10s linear infinite',
//       },
//       keyframes: {
//         scroll: {
//           '0%': { transform: 'translateX(100%)' },
//           '100%': { transform: 'translateX(-100%)' },
//         },
//       },
//       fontFamily: {
//         outfit: ['Outfit', 'sans-serif'], // Add this line to include the Outfit font
//       },
//     },
//   },
//   plugins: [],
// };



module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customGray: '#202020',
      },
      backdropBlur: {
        sm: '4px',
        DEFAULT: '8px',
        lg: '12px',
      },
      backdropOpacity: {
        70: '0.7',
      },
      animation: {
        scroll: 'scroll 10s linear infinite',
        scrollText: 'scrollText 10s linear infinite', // Added scrollText animation
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        scrollText: {
          '0%': { transform: 'translateX(0)' }, // Added scrollText keyframes
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'], // Added Outfit font family
      },
    },
  },
  plugins: [],
};
