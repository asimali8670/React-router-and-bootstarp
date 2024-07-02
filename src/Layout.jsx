import { Link, Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';




const Layout = () => {
    return(
        <>
       <Container fluid className="p-1">
{/* 
        <hr size="4" color="red"/>
        <hr size="4" color="red"/> */}

        <Outlet/>

        {/* <hr size="4" color="red"/>
        <hr size="4" color="red"/> */}


        <h2>wwww.mycompany.com</h2>


       </Container>


        </>
    )
}

export default Layout;