import React from "react";
import './cards.css';
import { Col, Button, Form, FormGroup, Label, Container } from 'reactstrap';
import { useCard} from "../../config/Context";

const Card_form = () => {
  const {register,handleSubmit,onSubmit } = useCard();


    return (
      <>
        <Container className='mt-5 mb-5 famil'>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup row>
          <Label for="shoes_edition" ><b>Edition</b></Label>
          <Col xs='12' sm='12' md='12'>
            <input className="form-control" type="text" name="edition"  placeholder="Enter your shoes edition name" ref={register}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="shoes_company"><b>Brand</b></Label>
          <Col xs='12' sm='12' md='12'>
            <input className="form-control" type="text" name="company"  placeholder="Enter your shoes brand name" ref={register}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="shoes_company"><b>Price</b></Label>
          <Col xs='12' sm='12' md='12'>
            <input className="form-control" type="number" name="price"  placeholder="Enter your shoes price" ref={register}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleFile"><b>Image</b></Label>
          <Col xs='12' sm='12' md='12'>
            <input className="form-control" type="text" name="picture" placeholder="Enter your shoes image URL" ref={register}/>
          </Col>
        </FormGroup>
        <FormGroup row className='pt-3'>
          <Label for="exampleFile"><b>Wear Category</b></Label>
          <Col xs='12' sm='12' md='12'>
         <div>
          <input className="form-check-input " type="radio" name="genderOptions" value="male" id="inlineRadio1" ref={register}/>
          <label className="form-check-label" htmlFor="inlineRadio1">Male's Wear</label>
          </div>
          <input className="form-check-input" type="radio" name="genderOptions" value="female" id="inlineRadio2" ref={register}/>
          <label className="form-check-label" htmlFor="inlineRadio2">Females' Wear</label>
          </Col>
        </FormGroup> 
        <FormGroup check row>
          <Col>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
      </Container>
      </>
    );
  }
  
  export default Card_form;
