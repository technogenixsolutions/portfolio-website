/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#262f37',
        'sec-clr': '#ff6d00',
        'landing_pg_clr': '#293241',
        'white-clr': '#ffffff',
        'black': '#000000',
      },
      fontFamily: {
        'primary-font': ['Gothic A1', 'sans-serif'],
        'second-font': ['Cabin Condensed', 'sans-serif'],
      },
      // fontSize: {
      //   'fs-12': '12px',
      //   'fs-14': '14px',
      //   'fs-15': '15px',
      //   'fs-16': '16px',
      //   'fs-18': '18px',
      //   'fs-20': '20px',
      //   'fs-21': '21px',
      //   'fs-24': '24px',
      //   'fs-25': '25px',
      //   'fs-26': '26px',
      //   'fs-28': '28px',
      //   'fs-30': '30px',
      //   'fs-36': '36px',
      //   'fs-40': '40px',
      //   'fs-46': '46px',
      //   'fs-48': '48px',
      //   'fs-56': '56px',
      //   'fs-60': '60px',
      //   'fs-72': '72px',
      // },
      // fontWeight: {
      //   'fw-300': '300',
      //   'fw-400': '400',
      //   'fw-500': '500',
      //   'fw-600': '600',
      //   'fw-700': '700',
      // },
      // lineHeight: {
      //   'lh-1': '1',
      //   'lh-1_2': '1.2',
      //   'lh-24': '24px',
      //   'lh-26': '26px',
      //   'lh-30': '30px',
      //   'lh-52': '52px',
      //   'lh-54': '54px',
      //   'lh-72': '72px',
      // }
    },
  },
  plugins: [],
}
