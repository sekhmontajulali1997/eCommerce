import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCategory, getCategoryApiSlice } from "../../../features/category/categoryApiSlice";
import { categorySelector } from "../../../features/category/categorySlice";

const Categories = () => {
  const { category } = useSelector(categorySelector);
  const dispatch = useDispatch();
  // for action section
  const [actionToggle, setactionToggle] = useState(false);

  // handle action Toggle
  const handleActionToggle = (index) => {
    setactionToggle(actionToggle === index ? false : index);
  };

  // delete category

  const handleDeleteCtegory = (id)=>{
   
    dispatch(deleteCategory(id))

  }

  useEffect(() => {
    dispatch(getCategoryApiSlice());
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
                    <h2 className="nk-block-title">Categories</h2>
                    <nav>
                      <ol className="breadcrumb breadcrumb-arrow mb-0">
                        <li className="breadcrumb-item">
                          <Link to="#">Home</Link>
                        </li>
                        <li className="breadcrumb-item">
                          <Link to="#">ecommerce</Link>
                        </li>
                        <li className="breadcrumb-item " aria-current="page">
                          Categories
                        </li>
                      </ol>
                    </nav>
                  </div>
                  <div className="nk-block-head-content">
                    <ul className="d-flex">
                      <li>
                        <Link
                          to="add-category.html"
                          className="btn btn-primary btn-md d-md-none"
                        >
                          <em className="icon ni ni-plus" />
                          <span>Add</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/admin-dashboard/add-category"
                          className="btn btn-primary d-none d-md-inline-flex"
                        >
                          <em className="icon ni ni-plus" />
                          <span>Add Category</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="nk-block">
                <div className="card data-table-card">
                  <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
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
                              style={{ width: "65.2368%" }}
                            >
                              <Link to="#" className="dataTable-sorter">
                                <span className="overline-title">Category</span>
                              </Link>
                            </th>
                            <th
                              className="tb-col tb-col-md"
                              data-sortable=""
                              style={{ width: "9.91957%" }}
                            >
                              <Link to="#" className="dataTable-sorter">
                                <span className="overline-title">type</span>
                              </Link>
                            </th>
                            <th
                              className="tb-col tb-col-sm"
                              data-sortable=""
                              style={{ width: "10.8132%" }}
                            >
                              <Link to="#" className="dataTable-sorter">
                                <span className="overline-title">items</span>
                              </Link>
                            </th>
                            <th
                              className="tb-col tb-col-end"
                              data-sortable="false"
                              style={{ width: "9.74084%" }}
                            >
                              <span className="overline-title">action</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {category?.length > 0
                            ? category.map((item, index) => {
                                return (
                                  <tr key={index}>
                                    <td className="tb-col tb-col-check">
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          defaultValue=""
                                        />
                                      </div>
                                    </td>
                                    <td className="tb-col">
                                      <div className="media-group">
                                        <div className="media media-middle">
                                          <img
                                            src={item.photo}
                                            alt="product"
                                          />
                                        </div>
                                        <div className="media-text">
                                          <Link
                                            to="edit-category.html"
                                            className="title"
                                          >
                                            {item.name}
                                          </Link>
                                          <div className="text smaller d-none d-sm-block">
                                            Decurate your home with our wide
                                            selection
                                          </div>
                                          <div className="d-sm-none">
                                            <span>125</span>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="tb-col tb-col-md">
                                      <span className="badge text-bg-primary-soft">
                                        Main
                                      </span>
                                    </td>
                                    <td className="tb-col tb-col-sm">
                                      <span>125</span>
                                    </td>
                                    <td className="tb-col tb-col-end">
                                      <div className="dropdown">
                                        <button
                                          onClick={() =>
                                            handleActionToggle(index)
                                          }
                                          className="btn btn-sm btn-icon btn-zoom me-n1"
                                          data-bs-toggle="dropdown"
                                        >
                                          <em className="icon ni ni-more-v" />
                                        </button>

                                        {actionToggle === index && (
                                          <>
                                            <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                                              <div className="dropdown-content py-1">
                                                <ul className="link-list link-list-hover-bg-primary link-list-md">
                                                  <li>
                                                    <Link
                                                      to={`/admin-dashboard/edit-category/${item.id}`}
                                                    >
                                                      <em className="icon ni ni-edit" />
                                                      <span>Edit</span>
                                                    </Link>
                                                  </li>
                                                  <li>
                                                    <Link to="#" onClick={()=> handleDeleteCtegory(item.id)}>
                                                      <em className="icon ni ni-trash" />
                                                      <span>Delete</span>
                                                    </Link>
                                                  </li>
                                                  <li>
                                                    <Link to="categories.html">
                                                      <em className="icon ni ni-eye" />
                                                      <span>View Category</span>
                                                    </Link>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                          </>
                                        )}
                                      </div>
                                    </td>
                                  </tr>
                                );
                              })
                            : "no categary Found"}
                        </tbody>
                      </table>
                    </div>
                    <div className="dataTable-bottom">
                      <div className="dataTable-info">
                        Showing 1 to 10 of 15 entries
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

export default Categories;
