/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        russianViolet: "#12083f",
        lavender50: "#f2f2ff",
        orange: "#ff7700",
        lightGray: "#D3D3D3",
        green: '#12B76A',
        deepPurple: "#7b57ff",
        red: '#F04438',

        hoverBtn: "#4816EB",


        indigo: {
          '100': '#E8E7FF',
          '200': '#D3D2FF',
          '300': '#B3AEFF',
          '400': '#8D80FF',
          '800': '#3C12C5',
          'electric': '#4f1fff',
          'tropical': '#b3aeff',
        },

        neutrals: {
          '50': '#F7F7F7',
          '200': '#DFDFDF',
          '400': '#ADADAD',
          '500': '#999',
          '600': '#888',
          '700': '#7B7B7B',
          '800': '#3C12C5',
          '950': '#363636',

        }
      },
      fontFamily: {
        Inter: "Inter",
      },

      fontSize: {
        h1: "24px",
        h2: "20px",
        h3: "18px",
      },

      screens: {
        'xs': '450px',
        'mdlg': '900px',
        '0xl': '1310px',
      }
    },
  },
  plugins: [

  ],
};
