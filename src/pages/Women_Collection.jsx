import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import {Container, Row ,Col , Button} from "reactstrap";

const Women=()=>{
   return(
       <>
       <Header/>
       <Container>
           <Row>
               <Col xs="12" sm="12" md="12" style={{fontFamily: "monospace"}}><h2 className="text-center">Women's Collection</h2></Col>
           </Row>
           <Row>

           </Row>
       </Container>
       <Footer/>
       </>
   )
}
export default Women;