import { useAppSelector } from "@/redux/store";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";

const ThemeLayout = ({ children }: { children: React.ReactNode }) => {
  const theme = useAppSelector((state) => state.config.theme);

  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          mode: theme,
          ...(theme === "dark"
            ? {
                background: {
                  default: "#000000",
                },
              }
            : {}),
        },
        typography: {
          fontFamily: ["Josefin Sans", "sans-serif"].join(),
        },
      })}
    >
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeLayout;
