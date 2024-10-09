import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-poppins)',
        'title-lg': ` 1.75rem 120% 700`,
      },
      fontSize: {},
      colors: {
        'orange-base': '#F24D0D',
        'orange-dark': '#C43C08',
        'blue-light': '#D7EFF9',
        'blue-base': '#5EC5FD',
        'blue-dark': '#009CF0',
        white: '#FFFFFF',
        background: '#FBF4F4',
        shape: '#F5EAEA',
        'gray-100': '#ADADAD',
        'gray-200': '#949494',
        'gray-300': '#666666',
        'gray-400': '#3D3D3D',
        'gray-500': '#1D1D1D',
        danger: '#DC3545',
        success: '#28A745',
      },
    },
  },
  plugins: [],
}
export default config
