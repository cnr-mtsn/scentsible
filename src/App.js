import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import ComingSoon from "./pages/ComingSoon";
import About from "./pages/About";
import "./index.css";
const theme = {
  colors: {
    white: "#ffffff",
    grey: "#EDEBE6",
    black: "#0E1111",
    green: "#5AB692",
  },
};
const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Handwriting';
  src: local('Themysion'), url(./fonts/Themysion.otf) format('otf');
}
  body  {
    margin: 0;
    background: ${theme.colors.white};
    font-family: "Open Sans", "Helvetica", "Arial";

  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path='/'>
            <ComingSoon />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
