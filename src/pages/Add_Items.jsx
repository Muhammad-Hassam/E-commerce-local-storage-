import Header from "../components/header/header";
import Card_form from "../components/cards/cards_form";
import Footer from "../components/footer/footer";
import { CardProvider } from "../config/Context";
// import Cards from "../components/cards/cards";

const Add_items=()=>{
   return(
      
       <>
    <Header />
    <CardProvider>
    <Card_form />
    </CardProvider>
    <Footer />
    </>
   );
}
export default Add_items;