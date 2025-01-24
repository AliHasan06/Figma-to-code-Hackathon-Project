module.exports = {
  experimental: {
    appDir: true, // Enables the App Router
  },
  mode: 'jit',
  content: [
    './app/**/*.{ts,tsx,js,jsx}', // Scan all files in the app directory
    './components/**/*.{ts,tsx,js,jsx}', // Include the components directory if it's outside app/
  ],
  safelist: [
    {
      pattern:
        /(bg|border|text)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(100|200|300|400|500|600|700|800|900)/,
    },
  ],
  darkMode: 'class', // Enable dark mode using the 'class' strategy
  theme: {
    extend: {
      colors: {
        primary: '#E7E6EF',
        secondary: '#E5E0FC',
        tertiary: '#9295AA',
        sky_blue: '#F9F8FE',
        dark_sky_blue: '#F4F4FC', // Retained one definition
        lightGreen: '#19D16F',
        lightGray2: '#FAFAFB',
        lightGray: '#F0EFF2',
        darkGray: '#E7E7EF',
        lightYellow: '#BEBFC2',
        lightYellow2: '#FFECE2',
        lightPink: '#FFE7F9',
        lightPink2: '#F2F0FF',
        purple: '#7E33E0',
        pink: '#FB2E86',
        navy: '#151875',
        blue: '#2F1AC4',
        cyan: '#05E6B7',
        hex: '#F6F7FB',
        hex2: '#F5F6F8',
        shade: '#EEEFFB',
        shade1: '#FFF6FB',
        shade2: '#F6F5FF',
        shade3: '#FBFBFF',
        black_rgba: 'rgba(26, 11, 91, 0.3)',
        black_rgb: 'rgba(21, 24, 117, 0.3)',
        light_gray: '#ACABC3',
        light_gray1: '#B7BACB',
        medium_gray: '#72718F',
        extragray: '#9DA0AE',
        extralight: '#8A8FB9',
        extrashade: '#E7E4F8',
        light_purple: '#603EFF',
        light_pink: '#FFDBF1',
        pink_light: '#FF75B0',
        yellow: '#FFCC2E',
        light_yellow: '#FFF6DA',
        dark_cyan: '#37DAF3',
        light_navy: '#2B3CAB',
        grey_light: '#A9ACC6',
        pink_random: '#F9F8FE',
      },
      fontFamily: {
        lato: ['Lato'], // Font families
        josefin: ['Josefin Sans'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')], // Tailwind CSS forms plugin
};
