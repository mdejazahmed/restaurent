import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {

  const Layout=()=>(
    <div className="mainContainer">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
  
  const Router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/menu",
          element:<Menu/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
      ]
  
    }
  ])
  
    return <RouterProvider router={Router} />;
}

export default App;
