import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
 

const Nopage = ()=> {
    return(
        <>
        <Container fluid className="bg-danger text-center p-4">
        <h1>Error - 404 : No page found!</h1>

        </Container>
        </>
    )
}


export default Nopage;