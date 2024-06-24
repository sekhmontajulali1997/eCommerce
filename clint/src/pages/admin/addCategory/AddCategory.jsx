import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import useForm from "../../../../hooks/useFormHooks/useForm";
import { createCategory } from "../../../features/category/categoryApiSlice";
import { setCategoryEmtyMessage } from "../../../features/category/categorySlice";
//import { useState } from "react";


const AddCategory = () => {
 // const [productImg, setproductImg] = useState(null)

  const { input, formReset , handleInputChange} = useForm({
    name: "",
    photo: null
    
  });


  // for photo using use state
  // const handleInputFile = (e) =>{

  //   const filedata = e.target.files[0]
  //   setproductImg(filedata.name)


  // }
 


  //console.log(productImg);

  const dispatch = useDispatch();
  // handleInputSubmit
  const handleInputSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', input.name);
    formData.append('photo', input.photo);
    

dispatch(createCategory(formData))
    dispatch(setCategoryEmtyMessage());
    formReset();
  };
  return (
    <>
      <div className="nk-content">
        <div className="container">
          <div className="nk-content-inner">
            <div className="nk-content-body">
              <div className="nk-block-head">
                <div className="nk-block-head-between flex-wrap gap g-2">
                  <div className="nk-block-head-content">
                    <h2 className="nk-block-title">Add Category</h2>
                    <nav>
                      <ol className="breadcrumb breadcrumb-arrow mb-0">
                        <li className="breadcrumb-item">
                          <Link to="#">Home</Link>
                        </li>
                        <li className="breadcrumb-item">
                          <Link to="#">ecommerce</Link>
                        </li>
                        <li className="breadcrumb-item " aria-current="page">
                          Add Category
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
                          to="/admin-dashboard/categories"
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
                                        value={input.name}
                                        onChange={handleInputChange}
                                        type="text"
                                        className="form-control"
                                        placeholder="Category name"
                                      />
                                    </div>
                                  </div>
                                </div>
                                {/* <div className="col-lg-12">
                            <div className="form-group">
                              <label className="form-label">
                                Parent Category
                              </label>
                              <div className="form-control-wrap">
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
                                          value=""
                                          data-custom-properties="[object Object]"
                                        >
                                          Select an option
                                        </option>
                                      </select>
                                      <div className="choices__list choices__list--single">
                                        <div
                                          className="choices__item choices__placeholder choices__item--selectable"
                                          data-item=""
                                          data-id={1}
                                          data-value=""
                                          data-custom-properties="[object Object]"
                                          aria-selected="true"
                                          data-deletable=""
                                        >
                                          Select an option
                                          <button
                                            type="button"
                                            className="choices__button"
                                            aria-label="Remove item: ''"
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
                                          id="choices--g84u-item-choice-1"
                                          className="choices__item choices__item--choice is-selected choices__placeholder choices__item--selectable is-highlighted"
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
                                          id="choices--g84u-item-choice-2"
                                          className="choices__item choices__item--choice choices__item--selectable"
                                          role="option"
                                          data-choice=""
                                          data-id={2}
                                          data-value={1}
                                          data-select-text="Press to select"
                                          data-choice-selectable=""
                                        >
                                          Toothbrush
                                        </div>
                                        <div
                                          id="choices--g84u-item-choice-3"
                                          className="choices__item choices__item--choice choices__item--selectable"
                                          role="option"
                                          data-choice=""
                                          data-id={3}
                                          data-value={2}
                                          data-select-text="Press to select"
                                          data-choice-selectable=""
                                        >
                                          Cameras
                                        </div>
                                        <div
                                          id="choices--g84u-item-choice-4"
                                          className="choices__item choices__item--choice choices__item--selectable"
                                          role="option"
                                          data-choice=""
                                          data-id={4}
                                          data-value={3}
                                          data-select-text="Press to select"
                                          data-choice-selectable=""
                                        >
                                          Speakers
                                        </div>
                                        <div
                                          id="choices--g84u-item-choice-5"
                                          className="choices__item choices__item--choice choices__item--selectable"
                                          role="option"
                                          data-choice=""
                                          data-id={5}
                                          data-value={4}
                                          data-select-text="Press to select"
                                          data-choice-selectable=""
                                        >
                                          Watches
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="form-label">
                                Meta Tag Title
                              </label>
                              <div className="form-control-wrap">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Meta tag title"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="form-label">
                                Meta Tag Keywords
                              </label>
                              <div className="form-control-wrap">
                                <div className="form-control-wrap">
                                  <div
                                    className="choices"
                                    data-type="text"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <div className="choices__inner false">
                                      <input
                                        className="js-tags choices__input"
                                        defaultValue=""
                                        type="text"
                                        placeholder="Meta tags"
                                        hidden=""
                                        tabIndex={-1}
                                        data-choice="active"
                                      />
                                      <div className="choices__list choices__list--multiple" />
                                      <input
                                        type="search"
                                        name="search_terms"
                                        className="choices__input choices__input--cloned"
                                        autoComplete="off"
                                        autoCapitalize="off"
                                        spellCheck="false"
                                        role="textbox"
                                        aria-autocomplete="list"
                                        aria-label="null"
                                      />
                                    </div>
                                    <div
                                      className="choices__list choices__list--dropdown"
                                      aria-expanded="false"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <label className="form-label">Description</label>
                              <div className="form-control-wrap">
                                <div className="ql-toolbar ql-snow">
                                  <span className="ql-formats">
                                    <button type="button" className="ql-bold">
                                      <svg viewBox="0 0 18 18">
                                        {" "}
                                        <path
                                          className="ql-stroke"
                                          d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"
                                        />{" "}
                                        <path
                                          className="ql-stroke"
                                          d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"
                                        />{" "}
                                      </svg>
                                    </button>
                                    <button type="button" className="ql-italic">
                                      <svg viewBox="0 0 18 18">
                                        {" "}
                                        <line
                                          className="ql-stroke"
                                          x1={7}
                                          x2={13}
                                          y1={4}
                                          y2={4}
                                        />{" "}
                                        <line
                                          className="ql-stroke"
                                          x1={5}
                                          x2={11}
                                          y1={14}
                                          y2={14}
                                        />{" "}
                                        <line
                                          className="ql-stroke"
                                          x1={8}
                                          x2={10}
                                          y1={14}
                                          y2={4}
                                        />{" "}
                                      </svg>
                                    </button>
                                    <button
                                      type="button"
                                      className="ql-underline"
                                    >
                                      <svg viewBox="0 0 18 18">
                                        {" "}
                                        <path
                                          className="ql-stroke"
                                          d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"
                                        />{" "}
                                        <rect
                                          className="ql-fill"
                                          height={1}
                                          rx="0.5"
                                          ry="0.5"
                                          width={12}
                                          x={3}
                                          y={15}
                                        />{" "}
                                      </svg>
                                    </button>
                                  </span>
                                  <span className="ql-formats">
                                    <button
                                      type="button"
                                      className="ql-blockquote"
                                    >
                                      <svg viewBox="0 0 18 18">
                                        {" "}
                                        <rect
                                          className="ql-fill ql-stroke"
                                          height={3}
                                          width={3}
                                          x={4}
                                          y={5}
                                        />{" "}
                                        <rect
                                          className="ql-fill ql-stroke"
                                          height={3}
                                          width={3}
                                          x={11}
                                          y={5}
                                        />{" "}
                                        <path
                                          className="ql-even ql-fill ql-stroke"
                                          d="M7,8c0,4.031-3,5-3,5"
                                        />{" "}
                                        <path
                                          className="ql-even ql-fill ql-stroke"
                                          d="M14,8c0,4.031-3,5-3,5"
                                        />{" "}
                                      </svg>
                                    </button>
                                    <button
                                      type="button"
                                      className="ql-list"
                                      value="bullet"
                                    >
                                      <svg viewBox="0 0 18 18">
                                        {" "}
                                        <line
                                          className="ql-stroke"
                                          x1={6}
                                          x2={15}
                                          y1={4}
                                          y2={4}
                                        />{" "}
                                        <line
                                          className="ql-stroke"
                                          x1={6}
                                          x2={15}
                                          y1={9}
                                          y2={9}
                                        />{" "}
                                        <line
                                          className="ql-stroke"
                                          x1={6}
                                          x2={15}
                                          y1={14}
                                          y2={14}
                                        />{" "}
                                        <line
                                          className="ql-stroke"
                                          x1={3}
                                          x2={3}
                                          y1={4}
                                          y2={4}
                                        />{" "}
                                        <line
                                          className="ql-stroke"
                                          x1={3}
                                          x2={3}
                                          y1={9}
                                          y2={9}
                                        />{" "}
                                        <line
                                          className="ql-stroke"
                                          x1={3}
                                          x2={3}
                                          y1={14}
                                          y2={14}
                                        />{" "}
                                      </svg>
                                    </button>
                                  </span>
                                  <span className="ql-formats">
                                    <button
                                      type="button"
                                      className="ql-header"
                                      value={1}
                                    >
                                      <svg viewBox="0 0 18 18">
                                        {" "}
                                        <path
                                          className="ql-fill"
                                          d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z"
                                        />{" "}
                                      </svg>
                                    </button>
                                    <button
                                      type="button"
                                      className="ql-header"
                                      value={2}
                                    >
                                      <svg viewBox="0 0 18 18">
                                        {" "}
                                        <path
                                          className="ql-fill"
                                          d="M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"
                                        />{" "}
                                      </svg>
                                    </button>
                                    <span className="ql-header ql-picker">
                                      <span
                                        className="ql-picker-label"
                                        tabIndex={0}
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="ql-picker-options-0"
                                      >
                                        <svg viewBox="0 0 18 18">
                                          {" "}
                                          <polygon
                                            className="ql-stroke"
                                            points="7 11 9 13 11 11 7 11"
                                          />{" "}
                                          <polygon
                                            className="ql-stroke"
                                            points="7 7 9 5 11 7 7 7"
                                          />{" "}
                                        </svg>
                                      </span>
                                      <span
                                        className="ql-picker-options"
                                        aria-hidden="true"
                                        tabIndex={-1}
                                        id="ql-picker-options-0"
                                      >
                                        <span
                                          tabIndex={0}
                                          role="button"
                                          className="ql-picker-item"
                                          data-value={3}
                                        />
                                        <span
                                          tabIndex={0}
                                          role="button"
                                          className="ql-picker-item"
                                          data-value={4}
                                        />
                                        <span
                                          tabIndex={0}
                                          role="button"
                                          className="ql-picker-item"
                                          data-value={5}
                                        />
                                        <span
                                          tabIndex={0}
                                          role="button"
                                          className="ql-picker-item"
                                          data-value={6}
                                        />
                                        <span
                                          tabIndex={0}
                                          role="button"
                                          className="ql-picker-item ql-selected"
                                        />
                                      </span>
                                    </span>
                                    <select
                                      className="ql-header"
                                      style={{ display: "none" }}
                                    >
                                      <option value={3} />
                                      <option value={4} />
                                      <option value={5} />
                                      <option value={6} />
                                      <option selected="selected" />
                                    </select>
                                  </span>
                                  <span className="ql-formats">
                                    <span className="ql-align ql-picker ql-icon-picker">
                                      <span
                                        className="ql-picker-label"
                                        tabIndex={0}
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="ql-picker-options-1"
                                      >
                                        <svg viewBox="0 0 18 18">
                                          {" "}
                                          <line
                                            className="ql-stroke"
                                            x1={3}
                                            x2={15}
                                            y1={9}
                                            y2={9}
                                          />{" "}
                                          <line
                                            className="ql-stroke"
                                            x1={3}
                                            x2={13}
                                            y1={14}
                                            y2={14}
                                          />{" "}
                                          <line
                                            className="ql-stroke"
                                            x1={3}
                                            x2={9}
                                            y1={4}
                                            y2={4}
                                          />{" "}
                                        </svg>
                                      </span>
                                      <span
                                        className="ql-picker-options"
                                        aria-hidden="true"
                                        tabIndex={-1}
                                        id="ql-picker-options-1"
                                      >
                                        <span
                                          tabIndex={0}
                                          role="button"
                                          className="ql-picker-item ql-selected"
                                        >
                                          <svg viewBox="0 0 18 18">
                                            {" "}
                                            <line
                                              className="ql-stroke"
                                              x1={3}
                                              x2={15}
                                              y1={9}
                                              y2={9}
                                            />{" "}
                                            <line
                                              className="ql-stroke"
                                              x1={3}
                                              x2={13}
                                              y1={14}
                                              y2={14}
                                            />{" "}
                                            <line
                                              className="ql-stroke"
                                              x1={3}
                                              x2={9}
                                              y1={4}
                                              y2={4}
                                            />{" "}
                                          </svg>
                                        </span>
                                        <span
                                          tabIndex={0}
                                          role="button"
                                          className="ql-picker-item"
                                          data-value="center"
                                        >
                                          <svg viewBox="0 0 18 18">
                                            {" "}
                                            <line
                                              className="ql-stroke"
                                              x1={15}
                                              x2={3}
                                              y1={9}
                                              y2={9}
                                            />{" "}
                                            <line
                                              className="ql-stroke"
                                              x1={14}
                                              x2={4}
                                              y1={14}
                                              y2={14}
                                            />{" "}
                                            <line
                                              className="ql-stroke"
                                              x1={12}
                                              x2={6}
                                              y1={4}
                                              y2={4}
                                            />{" "}
                                          </svg>
                                        </span>
                                        <span
                                          tabIndex={0}
                                          role="button"
                                          className="ql-picker-item"
                                          data-value="right"
                                        >
                                          <svg viewBox="0 0 18 18">
                                            {" "}
                                            <line
                                              className="ql-stroke"
                                              x1={15}
                                              x2={3}
                                              y1={9}
                                              y2={9}
                                            />{" "}
                                            <line
                                              className="ql-stroke"
                                              x1={15}
                                              x2={5}
                                              y1={14}
                                              y2={14}
                                            />{" "}
                                            <line
                                              className="ql-stroke"
                                              x1={15}
                                              x2={9}
                                              y1={4}
                                              y2={4}
                                            />{" "}
                                          </svg>
                                        </span>
                                        <span
                                          tabIndex={0}
                                          role="button"
                                          className="ql-picker-item"
                                          data-value="justify"
                                        >
                                          <svg viewBox="0 0 18 18">
                                            {" "}
                                            <line
                                              className="ql-stroke"
                                              x1={15}
                                              x2={3}
                                              y1={9}
                                              y2={9}
                                            />{" "}
                                            <line
                                              className="ql-stroke"
                                              x1={15}
                                              x2={3}
                                              y1={14}
                                              y2={14}
                                            />{" "}
                                            <line
                                              className="ql-stroke"
                                              x1={15}
                                              x2={3}
                                              y1={4}
                                              y2={4}
                                            />{" "}
                                          </svg>
                                        </span>
                                      </span>
                                    </span>
                                    <select
                                      className="ql-align"
                                      style={{ display: "none" }}
                                    >
                                      <option selected="selected" />
                                      <option value="center" />
                                      <option value="right" />
                                      <option value="justify" />
                                    </select>
                                  </span>
                                  <span className="ql-formats">
                                    <button type="button" className="ql-clean">
                                      <svg className="" viewBox="0 0 18 18">
                                        {" "}
                                        <line
                                          className="ql-stroke"
                                          x1={5}
                                          x2={13}
                                          y1={3}
                                          y2={3}
                                        />{" "}
                                        <line
                                          className="ql-stroke"
                                          x1={6}
                                          x2="9.35"
                                          y1={12}
                                          y2={3}
                                        />{" "}
                                        <line
                                          className="ql-stroke"
                                          x1={11}
                                          x2={15}
                                          y1={11}
                                          y2={15}
                                        />{" "}
                                        <line
                                          className="ql-stroke"
                                          x1={15}
                                          x2={11}
                                          y1={11}
                                          y2={15}
                                        />{" "}
                                        <rect
                                          className="ql-fill"
                                          height={1}
                                          rx="0.5"
                                          ry="0.5"
                                          width={7}
                                          x={2}
                                          y={14}
                                        />{" "}
                                      </svg>
                                    </button>
                                  </span>
                                </div>
                                <div
                                  className="js-quill ql-container ql-snow"
                                  data-toolbar="minimal"
                                  data-placeholder="Write category description here..."
                                >
                                  <div
                                    className="ql-editor ql-blank"
                                    data-gramm="false"
                                    contentEditable="true"
                                    data-placeholder="Write category description here..."
                                  >
                                    <p>
                                      <br />
                                    </p>
                                  </div>
                                  <div
                                    className="ql-clipboard"
                                    contentEditable="true"
                                    tabIndex={-1}
                                  />
                                  <div className="ql-tooltip ql-hidden">
                                    <Link
                                      className="ql-preview"
                                      rel="noopener noreferrer"
                                      target="_blank"
                                      to="about:blank"
                                    />
                                    <input
                                      type="text"
                                      data-formula="e=mc^2"
                                      data-link="https://quilljs.com"
                                      data-video="Embed URL"
                                    />
                                    <Link className="ql-action" />
                                    <Link className="ql-remove" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> */}
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
                                create Category
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
                                        src="../images/avatar/avatar-placeholder.jpg"
                                        alt="avatar"
                                      />
                                    </div>
                                    <div className="pt-3">
                                      <input
                                      onChange={handleInputChange}
                                      
                                        className="upload-image"
                                        name="photo"
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
                                          value=""
                                          data-custom-properties="[object Object]"
                                        >
                                          Select an option
                                        </option>
                                      </select>
                                      <div className="choices__list choices__list--single">
                                        <div
                                          className="choices__item choices__placeholder choices__item--selectable"
                                          data-item=""
                                          data-id={1}
                                          data-value=""
                                          data-custom-properties="[object Object]"
                                          aria-selected="true"
                                          data-deletable=""
                                        >
                                          Select an option
                                          <button
                                            type="button"
                                            className="choices__button"
                                            aria-label="Remove item: ''"
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
                                          id="choices--k8m7-item-choice-1"
                                          className="choices__item choices__item--choice is-selected choices__placeholder choices__item--selectable is-highlighted"
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
                                          id="choices--k8m7-item-choice-2"
                                          className="choices__item choices__item--choice choices__item--selectable"
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
                                          id="choices--k8m7-item-choice-3"
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
                                          id="choices--k8m7-item-choice-4"
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
                                          id="choices--k8m7-item-choice-5"
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

export default AddCategory;
