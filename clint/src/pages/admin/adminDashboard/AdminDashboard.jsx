import { Col, Container, Row } from "react-bootstrap";
import { Link, Outlet, useLocation,  } from "react-router-dom";

const AdminDashboard = () => {
  const uselocation = useLocation();
  return (
    <>
      <Container>
        <Row >
          <Col xxl={2}>
            <div >
              <ul>
                <li  >
                  <Link to="dashboard" className={uselocation.pathname === "/admin-dashboard/dashboard" ? "active nk-menu-link nk-menu-toggle ": "nk-menu-link "} >
                   
                    <span className="nk-menu-text">Dashboard</span>
                  </Link></li>


                  <ul
                    className="nk-menu-sub"
                    style={{ display: "block", boxSizing: "border-box" }}
                  >
                    <li className={uselocation.pathname === "/admin-dashboard/all-products" ? "active  nk-menu-item has-sub nk-menu-item": " "}>
                      <Link to="all-products" className="nk-menu-link nk-menu-toggle">
                        <span className="nk-menu-text">All Products</span>
                      </Link>
                    </li>
                    <li className={uselocation.pathname === "/admin-dashboard/categories" ? "active  nk-menu-item has-sub nk-menu-item": " "}>
                      <Link to="categories" className="nk-menu-link nk-menu-toggle">
                        <span className="nk-menu-text">Categories</span>
                      </Link>
                    </li>
                    <li className={uselocation.pathname === "/admin-dashboard/add-products" ? "active  nk-menu-item has-sub nk-menu-item": " "}>
                      <Link to="add-products" className="nk-menu-link nk-menu-toggle">
                        <span className="nk-menu-text">Add Product</span>
                      </Link>
                    </li>
                
                    <li className={uselocation.pathname === "/admin-dashboard/add-category" ? "active  nk-menu-item has-sub nk-menu-item": " "}>
                      <Link
                        to="add-category"
                        className="nk-menu-link nk-menu-toggle"
                      >
                        <span className="nk-menu-text">Add Category</span>
                      </Link>
                    </li>
                  
                  </ul>
                
              </ul>
            </div>
          </Col>
          <Col xxl={10}>
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminDashboard;
