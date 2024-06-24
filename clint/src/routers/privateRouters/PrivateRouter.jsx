import Layouts from "../../components/layouts/Layouts";
import AddCategory from "../../pages/admin/addCategory/AddCategory";
import AddProducts from "../../pages/admin/addProducts/AddProducts";
import AdminDashboard from "../../pages/admin/adminDashboard/AdminDashboard";
import Dashboard from "../../pages/admin/adminDashboard/Dashboard";
import AllCustomers from "../../pages/admin/allCustomers/AllCustomers";
import AllOrder from "../../pages/admin/allOrder/AllOrder";
import { AllProducts } from "../../pages/admin/allProducts/AllProducts";
import Categories from "../../pages/admin/categories/Categories";
import EditCategory from "../../pages/admin/editCategory/EditCategory";
import EditProduct from "../../pages/admin/editProduct/EditProduct";
import CustomerDashboard from "../../pages/customers/customerDashboard/CustomerDashboard";

const PrivateRouter = [
  {
    element: <Layouts />,
    children: [
      {
        path: "admin-dashboard",
        element: <AdminDashboard />,
        
        children: [
      
          {
            path: "dashboard",
            element: <Dashboard/>,
          },
          {
            path: "all-products",
            element: <AllProducts/>,
          },
          {
            path: "add-products",
            element: <AddProducts/>,
          },
          {
            path: "all-orders",
            element: <AllOrder/>,
          },
          {
            path: "categories",
            element: <Categories/>
          },
          {
            path: "all-customers",
            element: <AllCustomers/>
          },
          {
            path: "edit-product/:id",
            element: <EditProduct/>
          },
          {
            path: "add-category",
            element: <AddCategory/>
          },
          {
            path: "edit-category/:id",
            element: <EditCategory/>
          },
        ],


      },
      {
        path: "/customer-dashboard",
        element: <CustomerDashboard />,
      },
   
    ],
  },
];

// export PrivateRouter

export default PrivateRouter;
