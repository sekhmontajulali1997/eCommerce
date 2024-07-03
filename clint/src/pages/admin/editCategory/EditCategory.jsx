/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { getSingleCategory } from "../../../features/products/productsApiSlice";
import { Link, useNavigate, useParams } from "react-router-dom";

import {
  getSingleCategory,
  updateCategory,
} from "../../../features/category/categoryApiSlice";
import { categorySelector } from "../../../features/category/categorySlice";
import useForm from "../../../hooks/useFormHooks/useForm";

const EditCategory = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { category } = useSelector(categorySelector);
  

  /**
 * this code not using useForm Hook
 *  // const [update, setupdate] = useState();
   // const handleInputChange = (e) => {
  //   setupdate(() => ({
  //     ...update,
  //     [e.target.name]: e.target.value,
  //   }));
  // };
 */

  const { input, handleInputChange, setInput } = useForm({
    name: "",
  });

  // handleInputSubmit

  const dispatch = useDispatch();

  const handleInputSubmit = (e) => {
    e.preventDefault();

    dispatch(updateCategory(input));
    navigate("/admin-dashboard/categories");
  };

  /**
 *  this  code without geting single category  calling api
  // useEffect(() => {
  //   // Set form input values with fetched category data
  //   if (id) {
  //     const getSingleCategory = Product.filter((p) => p.id === id);
  //     setInput(getSingleCategory[0]);
  //     dispatch(setEmtyMessage());
  //   }
  // }, []);

 */

  useEffect(() => {
    dispatch(getSingleCategory({ id }));
    if (id) {
      const getSingleCategory = category.filter((p) => p.id === id);

      setInput(getSingleCategory[0]);
    }
  }, []);

  return (
    <>
      <div className="nk-content">
        <div className="container">
          <div className="nk-content-inner">
            <div className="nk-content-body">
              <div className="nk-block-head">
                <div className="nk-block-head-between flex-wrap gap g-2">
                  <div className="nk-block-head-content">
                    <h2 className="nk-block-title">Edit Category</h2>
                    <nav>
                      <ol className="breadcrumb breadcrumb-arrow mb-0">
                        <li className="breadcrumb-item">
                          <Link to="#">Home</Link>
                        </li>
                        <li className="breadcrumb-item">
                          <Link to="#">ecommerce</Link>
                        </li>
                        <li className="breadcrumb-item" aria-current="page">
                          Edit Category
                        </li>
                      </ol>
                    </nav>
                  </div>
                  <div className="nk-block-head-content">
                    <ul className="d-flex">
                      <li>
                        <Link
                          to="categories.html"
                          className="btn btn-primary btn-md d-md-none"
                        >
                          <em className="icon ni ni-eye" />
                          <span>View</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="categories.html"
                          className="btn btn-primary d-none d-md-inline-flex"
                        >
                          <em className="icon ni ni-eye" />
                          <span>View Category</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="nk-block">
                <form action="#">
                  <div className="row g-gs">
                    <div className="col-xxl-9">
                      <div className="gap gy-4">
                        <div className="gap-col">
                          <div className="card card-gutter-md">
                            <div className="card-body">
                              <div className="row g-gs">
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label className="form-label">
                                      Category Name
                                    </label>
                                    <div className="form-control-wrap">
                                      <input
                                        name="name"
                                        value={input && input.name}
                                        onChange={handleInputChange}
                                        type="text"
                                        className="form-control"
                                        placeholder="Category name"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="gap-col">
                          <ul className="d-flex align-items-center gap g-3">
                            <li>
                              <button
                                onClick={handleInputSubmit}
                                type="submit"
                                className="btn btn-primary"
                              >
                                update Category
                              </button>
                            </li>
                            <li>
                              <Link
                                to="/admin-dashboard/categories"
                                className="btn border-0"
                              >
                                Cancel
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3">
                      <div className="card card-gutter-md">
                        <div className="card-body">
                          <div className="row g-gs">
                            <div className="col-12">
                              <div className="form-group">
                                <label className="form-label">Thumbnail</label>
                                <div className="form-control-wrap">
                                  <div className="image-upload-wrap d-flex flex-column align-items-center">
                                    <div className="media media-huge border">
                                      <img
                                        id="image-result"
                                        className="w-100 h-100"
                                        src="../images/product/Link.jpg"
                                        alt="avatar"
                                      />
                                    </div>
                                    <div className="pt-3">
                                      <input
                                        className="upload-image"
                                        data-target="image-result"
                                        id="change-avatar"
                                        type="file"
                                        max={1}
                                        hidden
                                      />
                                      <label
                                        htmlFor="change-avatar"
                                        className="btn btn-md btn-primary"
                                      >
                                        Change
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-note mt-3">
                                  Set the category thumbnail image. Only *.png,
                                  *.jpg and *.jpeg image files are accepted.
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <label className="form-label">Status</label>
                                <div className="form-control-wrap">
                                  <div
                                    className="choices"
                                    data-type="select-one"
                                    tabIndex={0}
                                    role="combobox"
                                    aria-autocomplete="list"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <div className="choices__inner">
                                      <select
                                        className="js-select choices__input"
                                        data-search="true"
                                        data-sort="false"
                                        hidden=""
                                        tabIndex={-1}
                                        data-choice="active"
                                      >
                                        <option
                                          value={1}
                                          data-custom-properties="[object Object]"
                                        >
                                          Published
                                        </option>
                                      </select>
                                      <div className="choices__list choices__list--single">
                                        <div
                                          className="choices__item choices__item--selectable"
                                          data-item=""
                                          data-id={1}
                                          data-value={1}
                                          data-custom-properties="[object Object]"
                                          aria-selected="true"
                                          data-deletable=""
                                        >
                                          Published
                                          <button
                                            type="button"
                                            className="choices__button"
                                            aria-label="Remove item: '1'"
                                            data-button=""
                                          >
                                            Remove item
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="choices__list choices__list--dropdown"
                                      aria-expanded="false"
                                    >
                                      <input
                                        type="search"
                                        name="search_terms"
                                        className="choices__input choices__input--cloned"
                                        autoComplete="off"
                                        autoCapitalize="off"
                                        spellCheck="false"
                                        role="textbox"
                                        aria-autocomplete="list"
                                        aria-label="Select an option"
                                        placeholder="Search"
                                      />
                                      <div
                                        className="choices__list"
                                        role="listbox"
                                      >
                                        <div
                                          id="choices--vw66-item-choice-1"
                                          className="choices__item choices__item--choice choices__placeholder choices__item--selectable is-highlighted"
                                          role="option"
                                          data-choice=""
                                          data-id={1}
                                          data-value=""
                                          data-select-text="Press to select"
                                          data-choice-selectable=""
                                          aria-selected="true"
                                        >
                                          Select an option
                                        </div>
                                        <div
                                          id="choices--vw66-item-choice-2"
                                          className="choices__item choices__item--choice is-selected choices__item--selectable"
                                          role="option"
                                          data-choice=""
                                          data-id={2}
                                          data-value={1}
                                          data-select-text="Press to select"
                                          data-choice-selectable=""
                                        >
                                          Published
                                        </div>
                                        <div
                                          id="choices--vw66-item-choice-3"
                                          className="choices__item choices__item--choice choices__item--selectable"
                                          role="option"
                                          data-choice=""
                                          data-id={3}
                                          data-value={2}
                                          data-select-text="Press to select"
                                          data-choice-selectable=""
                                        >
                                          Draft
                                        </div>
                                        <div
                                          id="choices--vw66-item-choice-4"
                                          className="choices__item choices__item--choice choices__item--selectable"
                                          role="option"
                                          data-choice=""
                                          data-id={4}
                                          data-value={3}
                                          data-select-text="Press to select"
                                          data-choice-selectable=""
                                        >
                                          Scheduled
                                        </div>
                                        <div
                                          id="choices--vw66-item-choice-5"
                                          className="choices__item choices__item--choice choices__item--selectable"
                                          role="option"
                                          data-choice=""
                                          data-id={5}
                                          data-value={4}
                                          data-select-text="Press to select"
                                          data-choice-selectable=""
                                        >
                                          Inactive
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCategory;
