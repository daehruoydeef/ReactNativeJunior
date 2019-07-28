
const colors = {
  primary: "#4960de",
  success: "#2aebbf",
  info: "#00ecff",
  custom: "#f8a4d8",
  warning: "#ffee59",
  lPrimary: "#dfedff",
  lSuccess: "#d2f4ed",
  lInfo: "#d6f4f7",
  lCustom: "#fbe6ff",
  lWarning: "#f8f5d5",
  white60: "#a1a1a7",
  white70: "#b9b8be",
  white80: "#d0d0d3",
  white90: "#e8e7e9",
  white100: "#fff",
  dark60: "#73727c",
  dark70: "#525255",
  dark80: "#3a3a3d",
  dark90: "#282828",
  dark100: "#151425",
  whiteBackground: "#fff",
  darkBackground: "#222",
  purple: "#918dfd",
  darkPurple: "#191847",
  gray: "#AAAAAA",
};

const defaults = {
  button: {
    borderRadius: 10,
    width: "80%",
    height: 50,
    justifyContent: 'center',
    alignSelf: "center",
    margin: 10,
  },
  buttonTitle: {
    fontSize: 20,
    textAlign: "center"
  },
  header: {
    fontSize: 35,
    fontWeight: "bold",
  }
}

const light = {
  b60: { color: colors.white60 },
  b70: { color: colors.white70 },
  b80: { color: colors.white80 },
  b90: { color: colors.white90 },
  b100: { color: colors.white100 },
  textColor: { color: colors.dark100 },
  iconColor: { color: colors.dark100 },
  buttonColor: {backgroundColor: colors.primary},
  // setting the defaults
  button: defaults.button,
  header: defaults.header,
  title: defaults.buttonTitle,
  textNormal: {
    paddingTop: 5,
    paddingBottom: 10,
  },
  barStyle: {
    backgroundColor: colors.whiteBackground,
    width: "100%",
    alignSelf: "center",
    shadowOpacity: 0,
    alignItems: "center",
    alignSelf: "center",
    paddingLeft: "9%",
    paddingRight: "9%",
  },
}

const button = {
  backgroundColor: "red"
}

const header = {
  fontSize: 30
}

const dark = {
  b60: { color: colors.dark60 },
  b70: { color: colors.dark70 },
  b80: { color: colors.dark80 },
  b90: { color: colors.dark90 },
  b100: { color: colors.dark100 },
  textColor: { color: colors.white100 },
  iconColor: { color: colors.white100 },
  barStyle: {
    backgroundColor: colors.dark90,
    width: "100%",
    alignSelf: "center",
    shadowOpacity: 0,
    alignItems: "center",
    alignSelf: "center",
    paddingLeft: "9%",
    paddingRight: "9%",
  },
}

export { colors, light, dark, button, header };
