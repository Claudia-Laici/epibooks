import './App.css'
import MyNav from './components/homepage/navbar/MyNav'
import MyFooter from './components/homepage/footer/MyFooter'
import Welcome from './components/homepage/welcome/Welcome'
import AllTheBooks from './components/homepage/allTheBooks/AllTheBooks'
const App = () => {
  return (
    <>
      <MyNav/>
      <Welcome/>
      <AllTheBooks/>
      <MyFooter/>

    </>
  )
}

export default App