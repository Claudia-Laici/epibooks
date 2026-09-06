import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [booksData, setBooksData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getBooks = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("https://epibooks.onrender.com");
      const data = await response.json();

      const uniqueBooks = data.filter(
        (book, index, self) =>
          index === self.findIndex((b) => b.asin === book.asin)
      );

      setBooksData(uniqueBooks);
    } catch (error) {
      console.log(error);
      setError("Errore nel caricamento dei libri");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getBooks();
  }, []);

  return (
    <BooksContext.Provider
      value={{
        booksData,
        setBooksData,
        isLoading,
        setIsLoading,
        error,
        setError,
        getBooks,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};