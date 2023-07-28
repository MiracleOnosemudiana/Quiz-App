import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QuestionProvider } from './context/questionContext'
import { AuthenticationProvider } from './context/authContext.jsx'
import { BrowserRouter } from 'react-router-dom';
import { ToggleProvider } from './context/toggleContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthenticationProvider>
        <QuestionProvider>
          <ToggleProvider>
            <App />
          </ToggleProvider>
        </QuestionProvider>
      </AuthenticationProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
