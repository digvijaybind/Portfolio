/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./screens/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      // fontFamily: {
      // 	heading:
      // }
      extend: {
        colors: {
          primary: "#FF6A00",
          treeAccent: "#2986FF",
          treeText1: "#151718",
          treeText2: "#777777",
          treeRed: "#FF3C3C",
          treeGreen: "#1EA362",
          treePurple: "#7570FD",
          treeSidebarBg: "#2C2C2C",
          treeHeading: "#272124",
          treelightBlack: "#191919",
          treeRightBarBg: "#222222",
          treeMenu: "#ABABAB",
        },
      },
    },
    plugins: [],
  };
  