import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { messages } from "./i18n/messages";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const locale = navigator.language.startsWith("fr") ? "fr" : "en";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IntlProvider locale={locale} messages={messages[locale]}>
      <ThemeProvider>
        <BrowserRouter>
          <App />
          <ToastContainer />
        </BrowserRouter>
      </ThemeProvider>
    </IntlProvider>
  </StrictMode>,
)
