import React from "react";
import Page from "./components/Page.tsx";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";

const App = () => {
  return (
    <CssVarsProvider>
      <Page />
    </CssVarsProvider>
  );
};

export default App;
