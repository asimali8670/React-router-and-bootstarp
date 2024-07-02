import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages.jsx/Home.jsx";
import About from "./Pages.jsx/About.jsx";
import Service from "./Pages.jsx/Service.jsx";
import Navbar from "./Navbar.jsx";
import Nopage from "./Nopage.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return(
    <>

    <BrowserRouter>
    <Navbar />

  <Routes>
<Route path="/" element={<Layout/>}>

<Route index element={< Home/>} />
<Route path="/home" element={< Home/>} />
<Route path="/about" element={< About/>} />
<Route path="/service" element={< Service/>} />
<Route path="*" element={< Nopage />} />
</Route>
    </Routes>
    </BrowserRouter>

  
   
</>

  )
}



export default App;