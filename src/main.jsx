import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BooksProvider } from "./contexts/BooksContext";
import { SearchBookProvider } from "./contexts/SearchBookContext.jsx"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BooksProvider>
      <SearchBookProvider>
         <App />
      </SearchBookProvider>
    </BooksProvider>
  </StrictMode>,
)
