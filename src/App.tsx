import React from "react";
import Page from "./components/Page";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import store from "./store";
import palette from "./theme/palette";

const App = () => {
  const theme = createTheme(palette);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Page />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
