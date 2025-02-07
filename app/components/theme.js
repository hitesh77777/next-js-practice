export const getBaseColors = () => {
  const theme = "light";
  return {
    primary: theme === "dark" ? "#057FFF" : "#FFFFFF",
    secondary: theme === "dark" ? "#08D6FE" : "#000000",
    accent: theme === "dark" ? "#032CFF" : "#F0F0F0",
    logoGradient: {
      end: theme === "dark" ? "#08D6FE" : "#FF5733",
    },
    mainFontBlack: "#212121",
    secondFontBlack: "#424242",
    textColor: "#212121",
    thirdFontBlack: "#616161",
    lightWhite: "#FAFAFA",
    start: "#212121",
    red: "#E94235",
    clearRed: "#F75555",
    green: "#34A853",
    white: "#FFFFFF",
    grey: "#F5F5F5",
    border: "#E0E0E0",
    placeholder: "#616161",
    borderColor: "#EEEEEE",
    lightSky: "#E6F2FF",
    greenColor: "#10C10C",
    tagGreen: "#34B27D",
    tagRed: "#EB4335",
    mediumseagreen: "#12D18E",
    orange: "#FF981F",
    yellow: "#F4C430",
  };
};
