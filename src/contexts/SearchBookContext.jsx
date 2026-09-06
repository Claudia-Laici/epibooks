import { createContext, useContext, useState } from "react"
import { BooksContext } from "./BooksContext"

// eslint-disable-next-line react-refresh/only-export-components
export const SearchBookContext = createContext()

export const SearchBookProvider = ({ children }) => {
  const { booksData } = useContext(BooksContext)

  const [inputData, setInputData] = useState("")
  const [searchData, setSearchData] = useState("")

  const onChangeInput = (e) => {
    setInputData(e.target.value)

    if (e.target.value === "") {
      setSearchData("")
    }
  }

  const onSearch = (e) => {
    e.preventDefault()
    console.log("Input:", inputData)
    setSearchData(inputData)
  }

  const filteredBooks = booksData.filter((book) =>
    book.title
      .toLowerCase()
      .includes(searchData.trim().toLowerCase())
  )
  console.log("Risultati:", filteredBooks)

  return (
    <SearchBookContext.Provider
      value={{
        inputData,
        setInputData,
        filteredBooks,
        onSearch,
        onChangeInput,
      }}
    >
      {children}
    </SearchBookContext.Provider>
  )
}

export default SearchBookProvider