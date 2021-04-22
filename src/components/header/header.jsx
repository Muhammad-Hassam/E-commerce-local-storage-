import React from 'react';
import { Container, Row, Col, Button} from 'reactstrap';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Link,useHistory } from "react-router-dom";
import "./header.css";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../config/cartContext";
import auth from "../../config/firebase";



const Header = (props) => {
  const{cart}=useCart();
  const history=useHistory();
  const authentication=()=>{
    if(auth==='true'){
      history.push("/additems")
    }
    else{
      history.push("/login")
    }
  }
  const cartdata=localStorage.getItem("carts");
  const cartItems=JSON.parse(cartdata);

  return (
    <Container fluid={true}>
      <Row>
        <Col xs="12" md="12" sm="12">
        <div>
        <p className="txt-wht black font-fam"><span><Link to="signup" className="txt-wht">Sign up</Link></span> | <span><Link to="login" className="txt-wht">Login</Link></span> | RSS feeds | Archive News</p>
        </div>
        </Col>
      </Row>
      <Row>
        <Col xs="12" md="12" sm="12">
        <div>
        <h1 class="logo">FoOtWeaR</h1>
        </div>
        </Col>
      </Row>
      <Row >
        <Col xs="12" md="12" sm="12">
  <Navbar expand="lg fam dark">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav navbar-light">
    <Nav className="mr-auto">
      <Link to="/" className="nav_padding clr">Home</Link>
      <Link to="/about"  className="nav_padding clr">About Us</Link>
      <Link to="/men"  className="nav_padding clr">Men's Collection</Link>
      <Link to="/women"  className="nav_padding clr">Women's Collection</Link>
      <Link to="/contact"  className="nav_padding clr">Contact Us</Link>
    </Nav>
    <Form inline className='mr-2'>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-dark ">Search</Button>
    </Form>
    <Form inline className="mr-1">
      <Button variant="outline-dark" onClick={authentication} className='text-white'>Add Items</Button>
    </Form>
    <Form inline className="mr-1">
    <FaShoppingCart /><span>{cartItems.length}</span>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </Col>
      </Row>
      <Row>
<Col xs="12" md="12" sm="12">
<p className="sale">25% off (Almost) Everything! Use Code: Summer Sale</p>
</Col>
</Row>
    </Container>
  );
}

export default Header;