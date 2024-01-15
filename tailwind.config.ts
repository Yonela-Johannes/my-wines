import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'

  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'be_vietnam': ["Be Vietnam", "sans-serif"],
        'sans': ['Open Sans', 'sans-serif'],
        'blinker': ['Blinker', 'sans-serif',
        ]
      },
      colors: {
        "primary": "rgb(72,1,3)",
        "header": 'rgb(119,11,14)',
        "light_grey": '#F4F4F4',
        "dark_grey": '#C0C0C0',
        "correct": '#22D604',
        "correct_dark": '#19A902'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    // ...
    require('flowbite/plugin'),
  ],
}
export default config
