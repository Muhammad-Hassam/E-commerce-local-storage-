import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Container, Row ,Col} from "reactstrap";

const Contact=()=>{
   return(
       <>
       <Header/>
       <Container>
           <Row>
               <Col xs="12" sm="12" md="12" style={{fontFamily: "monospace"}}><h2 className="text-center mt-5">Contact Us</h2></Col>
           </Row>
           <Row>
           <Col xs="12" sm="12" md="12">
           <Form className="pt-5">
      <FormGroup>
      <Label for="name">Name</Label>
        <Input type="name" name="email" id="name" placeholder="Enter Your Name" />
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Enter Your Email" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Enter Your Password" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
    </Col>
    </Row>
       </Container>
       <Footer/>

       </>
   )
}
export default Contact;