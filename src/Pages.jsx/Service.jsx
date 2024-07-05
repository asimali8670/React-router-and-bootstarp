import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const Service = ()=> {
    return(
        <>

<div className="bg-image-service">
<Container fluid className="text-center text-white p-4">
<h1>Our Services!</h1>
</Container>

<hr size="3"/>

<Container className="text-white" >
<ul>
    <li>Consultation</li>
    <li>Development</li>
    <li>Support</li>
    <li>Website building</li>
    <li>ROB</li>
    <li>Project Handling</li>
    <li>Unit testing</li>
</ul>
</Container>
</div>


        

        </>
    )
}

export default Service;