import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,*::before,*::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%; 
  }
  
  body {
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background:	#F5F5F5;
  border-radius: 25px;
}

::-webkit-scrollbar-thumb {
  background: #666;
  border-radius: 25px;
}
`;

export default GlobalStyle;
