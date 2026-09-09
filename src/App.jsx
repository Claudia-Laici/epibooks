import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./pages/homePage/Homepage";
import BookDetails from "./components/shared/bookDetails/BookDetails";
import NotFound from "./components/shared/notFound/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
        index
        path='/'
        element={<Homepage />}
        />
          <Route
        path='/book/:asin'
        element={<BookDetails />}
        />
          <Route
        path='*'
        element={<NotFound />}
        />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
