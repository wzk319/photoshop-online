import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --text: #E3E3E3;
        --panel: #535353;
        --border: #383838;
        --menu-border: #3d3e3e;
        --hover-bg: #454545;
        --hover-border: #666666;
        --selected: #383838;
        --context-hover: #6b6b6b;
        --disabled: #878787;
    }
  
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Ubuntu', sans-serif;
      font-size: 10px;
    }
  
    button {
      background: none;
      border: none;
      outline: none;
    }
  `;

function GlobalStyles() {
  return <GlobalStyle />;
}

export default GlobalStyles;
