import { Container, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = ()=> {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Data is submitted!");
    }



    return(
        <>

<Container fluid className="bg-info text-center p-4 border-2 text-white">
<h1>Welcome to my Home page!</h1>
</Container>

<br />
<br />
<hr size="3"/>

<Container fluid className="text-center p-4 bg-light" >
    <Form>
        <label> 
        Name:
        <input type="text" placeholder="Enter you name" />
<br /> <br />

        Email:
        <input type="text"  placeholder="Enter you email"/>
<br /> <br />
        Paswrd:
        <input type="text" placeholder="Enter you password"/>
        </label>

        <br /><br />

        <Button onClick={handleSubmit}>Submit</Button>
    </Form>
</Container>

        </>
    )
}

export default Home;