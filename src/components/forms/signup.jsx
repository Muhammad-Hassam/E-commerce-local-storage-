import { Button, Form, FormGroup, Label, Input,Container, Row, Col } from 'reactstrap';
import { useForm } from "react-hook-form";
import  auth  from "../../config/firebase";
import { useHistory } from "react-router-dom";


const Signups = (props) => {
  const { register, handleSubmit } = useForm();
  const history=useHistory();


  const onSubmit=({email,password}, event)=>{
    event.preventDefault();

    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            if (auth) {
                history.push('/login')
            }
        })
        .catch(error => alert(error.message))
    
}

  return (
 <div className="form">
   <Container>
     <Row>
       <Col xs="12" sm="12" md="12">
     <h1 className="text-center mt-5 mb-5">Signup Form</h1>
     </Col>
     </Row>
     <Row>
       <Col xs="12" sm="12" md="12">
    <Form onSubmit={handleSubmit(onSubmit)}>
    <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" placeholder="Your name" ref={register} />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <input className="form-control" type="email" name="email"  placeholder="'email" ref={register}/>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <input className="form-control" type="password" name="password"  placeholder="'password" ref={register}/>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
    </Col>
     </Row>
    </Container>
    </div>
  );
}

export default Signups;

