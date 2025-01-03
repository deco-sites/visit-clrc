import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: {
      center: true,
    },
    colors: {
      white: "#FFFFFF",
      white2: "#FAFAFA",
      white3: "#D9D9D9",
      black: "#000000",
      black2: "#2D2D2D",
      gray1: "#CBCBCB",
      gray2: "#716E6E",
      gray3: "#4B4545",
      gray4: "#EFEFEF",
      green1: "#51A28B",
      green2: "#57BEA2",
      green3: "#5FA995",
      red1: "#CE6F6F",
    },
  },
};
