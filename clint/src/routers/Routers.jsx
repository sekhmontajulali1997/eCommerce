import { createBrowserRouter } from "react-router-dom";
import PublicRouters from "./publicRouters/PublicRouters";
import PrivateRouter from "./privateRouters/PrivateRouter.jsx";


const Routers = createBrowserRouter([...PublicRouters,...PrivateRouter]);

// export router

export default Routers;
