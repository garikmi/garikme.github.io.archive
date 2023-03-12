/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      'sunglo': '#E06C75',
      'fountain-blue': '#56B6C2',
      'cornflower-blue': '#61AFEF',
      'olivine': '#98C379',
      'whiskey': '#D19A66',
      'harvest-gold': '#E5C07B',
      'lavender': '#B57EDC',
      'shuttle-gray': '#5F6672',
      'cadet-blue': '#A9B2C3',
      'ghost': '#C6CCD7',
      'bunker': '#0D1117',
      'woodsmoke': '#181A1F',
      'shark': '#21252B',
      'dodger-blue': '#1085FF',
      'rob-roy': '#E9D16C',
      'alencia': '#D74E42',
    },
    fontFamily: {
      monospace: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
    },
    extend: {},
  },
  plugins: [],
}
