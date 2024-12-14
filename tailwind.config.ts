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
      gray1: "#CBCBCB",
      gray2: "#716E6E",
      green1: "#51A28B",
    },
  },
};
