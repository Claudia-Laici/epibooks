import "./App.css";
import MyNav from "./components/homepage/navbar/MyNav";
import MyFooter from "./components/homepage/footer/MyFooter";
import Welcome from "./components/homepage/welcome/Welcome";
import AllTheBooks from "./components/homepage/allTheBooks/AllTheBooks";
import { BooksProvider } from "./contexts/BooksContext";
import { SearchBookProvider } from "./contexts/SearchBookContext";
const App = () => {
 
  return (
    <BooksProvider>
      <SearchBookProvider>
        <MyNav />
        <Welcome />
        <AllTheBooks />
         <MyFooter />
      </SearchBookProvider>
    </BooksProvider>
  );
};

export default App;
