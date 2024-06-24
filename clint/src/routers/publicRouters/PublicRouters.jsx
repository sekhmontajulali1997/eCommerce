
import Layouts from "../../components/layouts/Layouts"
import About from "../../pages/publicPages/aboutUs/About"
import Contact from "../../pages/publicPages/contactUs/Contact"
import Home from "../../pages/publicPages/home/Home"
import Shop from "../../pages/publicPages/shop/Shop"

const PublicRouters = [ 
    {
    element: <Layouts/>,
    children: [
        {
            path: "/",
            element: <Home/>,
      
        },
    
        {
            path: "/about",
            element: <About/>,
      
        },
        {
            path: "/contact",
            element: <Contact/>,
      
        },
        {
            path: "/shop",
            element: <Shop/>,
      
        },
    
    ]
}



]

// export PublicRouters

export default PublicRouters