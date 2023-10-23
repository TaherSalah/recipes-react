import { Route, Routes } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
  return ( 
  <>

 <Navbar/> 
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='About' element={<About/>}></Route>
</Routes>



<Footer/>
  </>
  );
}

export default App;
