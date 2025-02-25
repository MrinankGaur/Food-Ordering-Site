import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  {createGlobalStyle} from "styled-components";
import App from './App.jsx'

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0; 
  }
  body{
    font-family: 'Inter',sans-serif;
    background-color: #323334;
    color:white;
    min-height: 100vh;
  }
`;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <App />
  </StrictMode>,
)
