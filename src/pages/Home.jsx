import Header from "../components/header/header";
import Slider from "../components/slider/slider";
import Footer from "../components/footer/footer";
import { CardProvider } from "../config/Context";
import Cards from "../components/cards/cards";


const Home=()=>{
   const dataget=localStorage.getItem("Usecard");
  const dataItems=JSON.parse(dataget);
   return(
       <>
       <Header/>
       <Slider/>
    <CardProvider>
       <Cards />
    </CardProvider>
       <Footer/>
       </>
   )
}
export default Home;