import { useCart } from "../../config/cartContext";
import "./carts.css";
import { useCard } from "../../config/Context";
import { Col, Row, Button,Container} from "reactstrap";

const Carts=()=>{
    const cartdata=localStorage.getItem("carts");
    const cartItems=JSON.parse(cartdata);

    const onDelete=()=>localStorage.removeItem("carts");
    

    return(
        <>
        <Container fluid className="pb-5 mt-2 card-section ">
            <Container>
        <Row>
            <Col xs="12" sm="12" md="12"><h2 className="text-center mt-5 mb-5 ffam">Your Items</h2></Col>
        </Row>
        <Row>
        {cartItems.map((product, index) =>
            <Col xs='4' md='4' sm='12' key={index} className="text-center mt-5 cart-border background pb-3" >
            <h1 className="text-center famil pt-3">{product.company} Shoes</h1>
            <img src={product.picture} alt="" className="width"/>
            <p className="text-center famil">Edition: {product.edition}</p>
            <p className="text-center famil">Wears: {product.genderOptions}</p>
            <p className="text-center famil">Price: {product.price}PKR</p>
            <Button className="famil">Remove to cart</Button>
            </Col>)
        }
        </Row>
        <Row className="text-center" onClick={onDelete}><Button className="m-5">CheckOut</Button></Row>
        </Container>
        </Container>
        </>
    )
}

export default Carts;