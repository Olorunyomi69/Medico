// import Home from "./pages/Home"
import { Outlet } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer";
import Cta from "./components/Cta"
const App = () => {
  return (
<div className="overflow-x-hidden">
<Header/>
<Outlet/>
<Cta/>
<Footer/>
</div>

  )
}

export default App