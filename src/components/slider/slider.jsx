import React from 'react';
import "./slider.css";
import { Container, Row, Col, Card, CardImg,  CardBody, CardTitle, Button } from 'reactstrap';
import { UncontrolledCarousel } from 'reactstrap';
import img_bg_1 from "../../images/img_bg_1.jpg";
import img_bg_2 from "../../images/img_bg_2.jpg";
import img_bg_3 from "../../images/img_bg_3.jpg";
import men from "../../images/men.jpg";
import women from "../../images/women.jpg";



const Slider = () => {
  const items = [
    {
      src: img_bg_1,
      altText: 'Slide 1',
      caption: 'With Best Price',
      header: 'Best Foot-Wears',
      key: '1',
      className: "slide"
    },
    {
      src: img_bg_2,
      altText: 'Slide 2',
      caption: 'Slide 2',
      header: 'Slide 2 Header',
      key: '2'
    },
    {
      src: img_bg_3,
      altText: 'Slide 3',
      caption: 'Slide 3',
      header: 'Slide 3 Header',
      key: '3'
    }
  ];
  return(
    <div>
    <Container fluid={true}>
<Row>
<Col xs="12" md="12" sm="12">
<UncontrolledCarousel items={items} className="slider"/>
</Col>
</Row>
</Container>
<Container>
<Row>
<Col xs="12" md="12" sm="12">
<p className="text-center fontfam slider-btm pt-5 pb-3">It started with a simple idea: Create quality, well-designed products that I wanted myself.</p>
</Col>
</Row>
<Row>
<Col xs="6" md="6" sm="12">
      <Card>
        <CardImg top width="100%" src={men} alt="Card image cap" />
        <CardBody className="text-center">
          <CardTitle className="text-center fontfam shop-font">Men's Collection Shop</CardTitle>
          <Button className="mt-2">Check Here</Button>
        </CardBody>
      </Card>
</Col>
<Col xs="6" md="6" sm="12">
      <Card>
        <CardImg top width="100%" src={women} alt="Card image cap" />
        <CardBody className="text-center">
          <CardTitle className="text-center fontfam shop-font" >Women's Collection Shop</CardTitle>
          <Button className="mt-2">Check Here</Button>
        </CardBody>
      </Card>
</Col>
</Row>
</Container>
</div>
  );
};

export default Slider;