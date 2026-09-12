import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./pages/homePage/Homepage";
import BookDetails from "./components/shared/bookDetails/BookDetails";
import NotFound from "./components/shared/notFound/NotFound";
import { BooksProvider } from "./contexts/BooksContext";
import { SearchBookProvider } from "./contexts/SearchBookContext.jsx";

const App = () => {
  return (
    <BooksProvider>
      <SearchBookProvider>
        <BrowserRouter>
          <Routes>
            <Route index
             path="/" 
             element={<Homepage />} 
             />
            <Route path="/book/:asin" 
            element={<BookDetails />} 
            />
            <Route path="*" 
            element={<NotFound />} 
            />
          </Routes>
        </BrowserRouter>
      </SearchBookProvider>
    </BooksProvider>
  );
};

export default App;
