import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "'DM Sans', sans-serif",
  },
  palette: {
    primary: {
      main: "#256D85",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "'DM Sans', sans-serif",
          textTransform: "capitalize",
          "&:hover": {
            boxShadow: "#0D3062",
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: "'DM Sans', sans-serif",
        },
      },
    },
  },
});
