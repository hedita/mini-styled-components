import ReactDOM from "react-dom/client";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Input from "./Input";
import Button from "./Button";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button>Update results</Button>
      <Input placeholder="Search by keywords" />
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
