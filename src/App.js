import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Headlines from "./components/Headlines/Headlines";
import Sport from "./components/Sport/Sport";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return ( 
  <>

 <Navbar/> 
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='About' element={<About/>}></Route>
  <Route path='headlines' element={<Headlines/>}></Route>
  <Route path='sport' element={<Sport/>}></Route>
</Routes>



<Footer/>
  </>
  );
}

export default App;
