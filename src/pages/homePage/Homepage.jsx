import MyNav from "../../components/shared/navbar/MyNav";
import MyFooter from "../../components/shared/footer/MyFooter"
import Welcome from "../../components/homePage/welcome/Welcome"
import AllTheBooks from "../../components/homepage/allTheBooks/AllTheBooks";
const Homepage = () => {
  return (
    <>
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </>
  );
};

export default Homepage;
