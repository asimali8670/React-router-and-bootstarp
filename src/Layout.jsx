import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = () => {
  return (
    <>
      <Container fluid className="p-1">
        <Outlet />
      </Container>
      <Container fluid className="bg-warning text-center text-black">
        <h2>wwww.javarndpvtltd.com</h2>
      </Container>
    </>
  );
};

export default Layout;
