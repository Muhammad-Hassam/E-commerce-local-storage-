import "./cards.css";
import { useCard } from "../../config/Context";
import { Col, Row, Button,Container} from "reactstrap";
import { useCart } from "../../config/cartContext"
import auth from "../../config/firebase";
import { useHistory } from "react-router-dom";

const Cards=()=>{
    
    const {card_arr}=useCard();
   
    const history=useHistory();
  const {addCart}=useCart();
  const dataget=localStorage.getItem("Usecard");
  const dataItems=JSON.parse(dataget);
  

  const authentication=()=>{
    if(auth==="true"){
      history.push("/login");
      }
      else{
      history.push("/cartitems"); 
      }
   } 
  

    return(
        <>
        <Container fluid className="mb-5 pb-5 mt-2 card-section">
            <Container>
        <Row>
            <Col xs="12" sm="12" md="12"><h2 className="text-center mt-5 mb-5">Choose Your Shoes</h2></Col>
        </Row>
        <Row>
        {dataItems.map((product, index) =>
            <Col xs='4' md='4' sm='12' key={index} className="text-center mt-5 cart-border background pb-3" >
            <h1 className="text-center famil pt-3">{product.company} Shoes</h1>
            <img src={product.picture} alt="" className="width"/>
            <p className="text-center famil">Edition: {product.edition}</p>
            <p className="text-center famil">Wears: {product.genderOptions}</p>
            <p className="text-center famil">Price: {product.price}PKR</p>
            <Button onClick={()=>addCart(product)} className="famil">Add to cart</Button>
            </Col>)
        }
        </Row>
        </Container>
        </Container>
        </>
    )
}
export default Cards;