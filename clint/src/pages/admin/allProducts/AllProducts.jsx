import { useEffect, useState } from "react";

import {
  deleteProductApiSlice,
  getAllProducts,
} from "../../../features/products/productsApiSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  productSelector,
  setEmtyMessage,
} from "../../../features/products/productsSlice";
import { Link } from "react-router-dom";

export const AllProducts = () => {
  // for edit, delete, view button
  const [dropDown, setdropDown] = useState(false);
  // for product update
  const handleDeleteProduct = (id) => {
    dispatch(deleteProductApiSlice(id));
  };

  // dropdown Handller

  const dropdownHandller = (index) => {
    setdropDown(dropDown === index ? false : index);
  };
  const { Product } = useSelector(productSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(setEmtyMessage());
  }, [dispatch]);
  return (
    <>
      <div className="nk-content">
        <div className="container">
          <div className="nk-content-inner">
            <div className="nk-content-body">
              <div className="nk-block-head">
                <div className="nk-block-head-between flex-wrap gap g-2">
                  <div className="nk-block-head-content">
                    <h2 className="nk-block-title">Products</h2>
                    <nav>
                      <ol className="breadcrumb breadcrumb-arrow mb-0">
                        <li className="breadcrumb-item">
                          <Link to="#">Home</Link>
                        </li>
                        <li className="breadcrumb-item">
                          <Link to="#">ecommerce</Link>
                        </li>
                        <li className="breadcrumb-item " aria-current="page">
                          Products
                        </li>
                      </ol>
                    </nav>
                  </div>
                  <div className="nk-block-head-content">
                    <ul className="d-flex">
                      <li>
                        <Link
                          to="add-product.html"
                          className="btn btn-primary btn-md d-md-none"
                        >
                          <em className="icon ni ni-plus" />
                          <span>Add</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/admin-dashboard/add-products"
                          className="btn btn-primary d-none d-md-inline-flex"
                        >
                          <em className="icon ni ni-plus" />
                          <span>Add Product</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="nk-block">
                <div className="card">
                  <div className=" dataTable-loading no-footer sortable searchable ">
                    <div className="dataTable-top">
                      <div className="dataTable-dropdown">
                        <label>
                          <select className="dataTable-selector">
                            <option value={5}>5</option>
                            <option value={10} selected="">
                              10
                            </option>
                            <option value={15}>15</option>
                            <option value={20}>20</option>
                            <option value={25}>25</option>
                          </select>{" "}
                          Per page
                        </label>
                      </div>
                      <div className="dataTable-search">
                        <input
                          className="dataTable-input"
                          placeholder="Search..."
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="dataTable-container table-responsive">
                      <table
                        className="datatable-init table dataTable-table"
                        data-nk-container="table-responsive"
                      >
                        <thead className="table-light">
                          <tr>
                            <th
                              className="tb-col tb-col-check"
                              data-sortable="false"
                              style={{ width: "4.28954%" }}
                            >
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                />
                              </div>
                            </th>
                            <th
                              className="tb-col"
                              data-sortable=""
                              style={{ width: "32.0822%" }}
                            >
                              <Link to="#" className="dataTable-sorter">
                                <span className="overline-title">products</span>
                              </Link>
                            </th>
                            <th
                              className="tb-col tb-col-md"
                              data-sortable=""
                              style={{ width: "8.93655%" }}
                            >
                              <Link to="#" className="dataTable-sorter">
                                <span className="overline-title">sku</span>
                              </Link>
                            </th>
                            <th
                              className="tb-col"
                              data-sortable=""
                              style={{ width: "11.7962%" }}
                            >
                              <Link to="#" className="dataTable-sorter">
                                <span className="overline-title">qty</span>
                              </Link>
                            </th>
                            <th
                              className="tb-col tb-col-md"
                              data-sortable=""
                              style={{ width: "9.56211%" }}
                            >
                              <Link to="#" className="dataTable-sorter">
                                <span className="overline-title">price</span>
                              </Link>
                            </th>
                            <th
                              className="tb-col tb-col-md"
                              data-sortable=""
                              style={{ width: "13.6729%" }}
                            >
                              <Link to="#" className="dataTable-sorter">
                                <span className="overline-title">rating</span>
                              </Link>
                            </th>
                            <th
                              className="tb-col"
                              data-sortable=""
                              style={{ width: "10.8132%" }}
                            >
                              <Link to="#" className="dataTable-sorter">
                                <span className="overline-title">Status</span>
                              </Link>
                            </th>
                            <th
                              className="tb-col tb-col-end"
                              data-sortable="false"
                              style={{ width: "8.84718%" }}
                            >
                              <span className="overline-title">action</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {Product?.length > 0
                            ? Product.map((item, index) => {
                                return (
                                  <tr key={index}>
                                    <td className="tb-col tb-col-check">
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          defaultValue=""
                                          id="pid1"
                                        />
                                      </div>
                                    </td>
                                    <td className="tb-col">
                                      <div className="media-group">
                                        <div className="media media-md media-middle">
                                          <img src={item.photo} />
                                        </div>
                                        <div className="media-text">
                                          <Link
                                            to="edit-product.html"
                                            className="title"
                                          >
                                            {item.productTitle}
                                          </Link>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="tb-col tb-col-md">
                                      <span>{item.productSku}</span>
                                    </td>
                                    <td className="tb-col">
                                      <span>{item.productQty}</span>
                                    </td>
                                    <td className="tb-col tb-col-md">
                                      <span>${item.productPrice}</span>
                                    </td>
                                    <td className="tb-col tb-col-md">
                                      <ul className="rating">
                                        <li className="rating-label checked">
                                          <em className="icon ni ni-star-fill" />
                                        </li>
                                        <li className="rating-label checked">
                                          <em className="icon ni ni-star-fill" />
                                        </li>
                                        <li className="rating-label checked">
                                          <em className="icon ni ni-star-fill" />
                                        </li>
                                        <li className="rating-label checked">
                                          <em className="icon ni ni-star-fill" />
                                        </li>
                                        <li className="rating-label checked">
                                          <em className="icon ni ni-star-fill" />
                                        </li>
                                      </ul>
                                    </td>
                                    <td className="tb-col">
                                      <span className="badge text-bg-success-soft">
                                        Published
                                      </span>
                                    </td>
                                    <td className="tb-col tb-col-end">
                                      <div className="dropdown">
                                        <button
                                          onClick={() =>
                                            dropdownHandller(index)
                                          }
                                          className="btn btn-sm btn-icon btn-zoom me-n1"
                                          data-bs-toggle="dropdown"
                                        >
                                          <em className="icon ni ni-more-v" />
                                        </button>
                                        {dropDown === index && (
                                          <div className=" dropdown-menu dropdown-menu-sm dropdown-menu-end">
                                            <div className="dropdown-content py-1">
                                              <ul className="link-list link-list-hover-bg-primary link-list-md">
                                                <li>
                                                  <Link
                                                    to={`/admin-dashboard/edit-product/${item.id}`}
                                                  >
                                                    <em className="icon ni ni-edit" />
                                                    <span>Edit</span>
                                                  </Link>
                                                </li>
                                                <li>
                                                  <Link
                                                    to="#"
                                                    onClick={() =>
                                                      handleDeleteProduct(
                                                        item.id
                                                      )
                                                    }
                                                  >
                                                    <em className="icon ni ni-trash" />
                                                    <span>Delete</span>
                                                  </Link>
                                                </li>
                                                <li>
                                                  <Link to="products.html">
                                                    <em className="icon ni ni-eye" />
                                                    <span>View Details</span>
                                                  </Link>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    </td>
                                  </tr>
                                );
                              })
                            : "no poducts Found"}
                        </tbody>
                      </table>
                    </div>
                    <div className="dataTable-bottom">
                      <div className="dataTable-info">
                        Showing 1 to 10 of 16 entries
                      </div>
                      <nav className="dataTable-pagination">
                        <ul className="dataTable-pagination-list">
                          <li className="active">
                            <Link to="#" data-page={1}>
                              1
                            </Link>
                          </li>
                          <li className="">
                            <Link to="#" data-page={2}>
                              2
                            </Link>
                          </li>
                          <li className="pager">
                            <Link to="#" data-page={2}>
                              <em className="icon ni ni-chevron-right" />
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
