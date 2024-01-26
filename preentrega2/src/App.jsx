import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import PreFooter from "./components/PreFooter";
import ItemListContainer from "./components/ItemListContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from "./components/itemDetailContainer";




const App = () =>{
  return(
    <BrowserRouter> 
    <div>
      <NavBar/>
      <Routes>
      <Route path={"/"} element={ <ItemListContainer />}  />
      <Route path={"/category/:id"} element={ <ItemListContainer />}  />
      <Route path={"/item/:id"} element={ <ItemDetailContainer />}  />
      </Routes>
      <PreFooter/>
      <br />
      <Footer />
    </div>
    </BrowserRouter>
  )
  
}

export default App;