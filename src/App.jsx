import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { IntlProvider } from "react-intl";
import { messages } from "./i18n/messages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <ThemeProvider>
        <div>
          <BrowserRouter>
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </main>
            <Footer />
            <ToastContainer />
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </IntlProvider>
  )
}

export default App
