import { createMuiTheme } from "@material-ui/core/styles";

export default function theme() {
  return createMuiTheme({
    palette: {
      primary: {
        main: "#B21E35",
        dark: "#641220",
        light: "#E01E37",
        contrastText: "#fff",
      },
      secondary: {
        main: "#FFDA3D",
        dark: "#FDB833",
        light: "#FFF75E",
        contrastText: "#fff",
      },
    },
  });
}
