import { useEffect } from "react"

import {useDispatch, useSelector} from "react-redux"
import { getCategoryApiSlice } from "../../../features/category/categoryApiSlice"
import { categorySelector } from "../../../features/category/categorySlice"
import { getAllProducts } from "../../../features/products/productsApiSlice"
import { productSelector } from "../../../features/products/productsSlice"

const Shop = () => {

    // category selector
    const {category} = useSelector(categorySelector)
    // product selector
    const {Product}= useSelector(productSelector)
    // dispatch 
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(getCategoryApiSlice())
        dispatch(getAllProducts())
    }, [dispatch])
  return (
    <><div className="shop-wrap py-120">
    <div className="container">
      <div className="row g-4">
        <div className="col-xl-3 col-lg-4 sidebar-col">
          <div className="shop-sidebar">
            <div className="sidebar-box">
              <h3 className="sidebar-title">By Brands</h3>
              <ul className="brand-filter" id="brandFilter">
              {category?.length > 0  ? category.map((cItem) => {
                    return(
                        <li key={cItem.id}>

              
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="brand1"
                          />
                          <label className="form-check-label" htmlFor="brand1">
                            <span className="name">{cItem.name}</span>
                            <span>(90)</span>
                          </label>
                        </div>
                      </li>
                    )
                }) : "no category found"}
             
              </ul>
            </div>
            <div className="sidebar-box">
              <h3 className="sidebar-title">By Price</h3>
              <div className="price-filter-wrap">
                <div className="input-wrap">
                  <div className="input-group">
                    <span className="input-txt">$</span>
                    <input type="number" id="maxNumber" />
                  </div>
                  <div className="input-group">
                    <span className="input-txt">$</span>
                    <input type="number" id="minNumber" />
                  </div>
                </div>
                <div
                  id="priceFilter"
                  className="price-filter noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr"
                >
                  <div className="noUi-base">
                    <div className="noUi-connects">
                      <div
                        className="noUi-connect"
                        style={{
                          transform: "translate(8.16327%, 0px) scale(0.510204, 1)"
                        }}
                      />
                    </div>
                    <div
                      className="noUi-origin"
                      style={{
                        transform: "translate(-91.8367%, 0px)",
                        zIndex: 5
                      }}
                    >
                      <div
                        className="noUi-handle noUi-handle-lower"
                        data-handle={0}
                        tabIndex={0}
                        role="slider"
                        aria-orientation="horizontal"
                        aria-valuemin={20.0}
                        aria-valuemax={600.0}
                        aria-valuenow={100.0}
                        aria-valuetext={100.0}
                      >
                        <div className="noUi-touch-area" />
                      </div>
                    </div>
                    <div
                      className="noUi-origin"
                      style={{
                        transform: "translate(-40.8163%, 0px)",
                        zIndex: 4
                      }}
                    >
                      <div
                        className="noUi-handle noUi-handle-upper"
                        data-handle={1}
                        tabIndex={0}
                        role="slider"
                        aria-orientation="horizontal"
                        aria-valuemin={100.0}
                        aria-valuemax={1000.0}
                        aria-valuenow={600.0}
                        aria-valuetext={600.0}
                      >
                        <div className="noUi-touch-area" />
                      </div>
                    </div>
                  </div>
                </div>
                <button id="filterPrice" className="def-btn">
                  Filter now
                </button>
              </div>
            </div>
            <div className="sidebar-box">
              <h3 className="sidebar-title">Color</h3>
              <ul className="brand-filter color-filter" id="colorFilter">
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="Black"
                    />
                    <label className="form-check-label" htmlFor="Black">
                      Black
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="Pink"
                    />
                    <label className="form-check-label" htmlFor="Pink">
                      Pink
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="White"
                    />
                    <label className="form-check-label" htmlFor="White">
                      White
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="Blue"
                    />
                    <label className="form-check-label" htmlFor="Blue">
                      Blue
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="Orange"
                    />
                    <label className="form-check-label" htmlFor="Orange">
                      Orange
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            <div className="sidebar-box">
              <div className="title-wrap">
                <h3 className="sidebar-title">New Arrival</h3>
                <div className="new-arrival-nav">
                  <button
                    type="button"
                    className="slick-prev slick-arrow"
                    style={{}}
                  >
                    <i className="fa-solid fa-angle-up" />
                  </button>
                  <button
                    type="button"
                    className="slick-next slick-arrow"
                    style={{}}
                  >
                    <i className="fa-solid fa-angle-down" />
                  </button>
                </div>
              </div>
              <ul className="new-arrival-slider slick-initialized slick-slider slick-vertical">
                <div
                  className="slick-list draggable"
                  style={{ height: "383.511px" }}
                >
                  <div
                    className="slick-track"
                    style={{
                      opacity: 1,
                      height: 1407,
                      transform: "translate3d(0px, -767px, 0px)",
                      transition: "transform 2000ms ease 0s"
                    }}
                  >
                    <li
                      className="slick-slide slick-cloned"
                      data-slick-index={-3}
                      id=""
                      aria-hidden="true"
                      style={{ width: 300 }}
                      tabIndex={-1}
                    >
                      <div className="part-img">
                        <a href="shop-details.html" tabIndex={-1}>
                          <img
                            src="assets/images/feat-product-2.png"
                            alt="Image"
                          />
                        </a>
                      </div>
                      <div className="part-txt">
                        <a
                          href="shop-details.html"
                          className="title"
                          tabIndex={-1}
                        >
                          Diamond wedding ring
                        </a>
                        <p className="price">
                          $195.00 <span>229.99</span>
                        </p>
                      </div>
                    </li>
                    <li
                      className="slick-slide slick-cloned"
                      data-slick-index={-2}
                      id=""
                      aria-hidden="true"
                      style={{ width: 300 }}
                      tabIndex={-1}
                    >
                      <div className="part-img">
                        <a href="shop-details.html" tabIndex={-1}>
                          <img
                            src="assets/images/feat-product-3.png"
                            alt="Image"
                          />
                        </a>
                      </div>
                      <div className="part-txt">
                        <a
                          href="shop-details.html"
                          className="title"
                          tabIndex={-1}
                        >
                          Diamond wedding ring
                        </a>
                        <p className="price">
                          $195.00 <span>229.99</span>
                        </p>
                      </div>
                    </li>
                    <li
                      className="slick-slide slick-cloned"
                      data-slick-index={-1}
                      id=""
                      aria-hidden="true"
                      style={{ width: 300 }}
                      tabIndex={-1}
                    >
                      <div className="part-img">
                        <a href="shop-details.html" tabIndex={-1}>
                          <img
                            src="assets/images/feat-product-4.png"
                            alt="Image"
                          />
                        </a>
                      </div>
                      <div className="part-txt">
                        <a
                          href="shop-details.html"
                          className="title"
                          tabIndex={-1}
                        >
                          Diamond wedding ring
                        </a>
                        <p className="price">
                          $195.00 <span>229.99</span>
                        </p>
                      </div>
                    </li>
                    <li
                      className="slick-slide"
                      data-slick-index={0}
                      aria-hidden="true"
                      style={{ width: 300 }}
                      tabIndex={-1}
                    >
                      <div className="part-img">
                        <a href="shop-details.html" tabIndex={-1}>
                          <img
                            src="assets/images/feat-product-1.png"
                            alt="Image"
                          />
                        </a>
                      </div>
                      <div className="part-txt">
                        <a
                          href="shop-details.html"
                          className="title"
                          tabIndex={-1}
                        >
                          Diamond wedding ring
                        </a>
                        <p className="price">
                          $195.00 <span>229.99</span>
                        </p>
                      </div>
                    </li>
                    <li
                      className="slick-slide"
                      data-slick-index={1}
                      aria-hidden="true"
                      style={{ width: 300 }}
                      tabIndex={-1}
                    >
                      <div className="part-img">
                        <a href="shop-details.html" tabIndex={-1}>
                          <img
                            src="assets/images/feat-product-2.png"
                            alt="Image"
                          />
                        </a>
                      </div>
                      <div className="part-txt">
                        <a
                          href="shop-details.html"
                          className="title"
                          tabIndex={-1}
                        >
                          Diamond wedding ring
                        </a>
                        <p className="price">
                          $195.00 <span>229.99</span>
                        </p>
                      </div>
                    </li>
                    <li
                      className="slick-slide"
                      data-slick-index={2}
                      aria-hidden="true"
                      style={{ width: 300 }}
                      tabIndex={0}
                    >
                      <div className="part-img">
                        <a href="shop-details.html" tabIndex={0}>
                          <img
                            src="assets/images/feat-product-3.png"
                            alt="Image"
                          />
                        </a>
                      </div>
                      <div className="part-txt">
                        <a
                          href="shop-details.html"
                          className="title"
                          tabIndex={0}
                        >
                          Diamond wedding ring
                        </a>
                        <p className="price">
                          $195.00 <span>229.99</span>
                        </p>
                      </div>
                    </li>
                    <li
                      className="slick-slide slick-current slick-active"
                      data-slick-index={3}
                      aria-hidden="false"
                      style={{ width: 300 }}
                      tabIndex={0}
                    >
                      <div className="part-img">
                        <a href="shop-details.html" tabIndex={0}>
                          <img
                            src="assets/images/feat-product-4.png"
                            alt="Image"
                          />
                        </a>
                      </div>
                      <div className="part-txt">
                        <a
                          href="shop-details.html"
                          className="title"
                          tabIndex={0}
                        >
                          Diamond wedding ring
                        </a>
                        <p className="price">
                          $195.00 <span>229.99</span>
                        </p>
                      </div>
                    </li>
                    <li
                      className="slick-slide slick-cloned slick-active"
                      data-slick-index={4}
                      id=""
                      aria-hidden="false"
                      style={{ width: 300 }}
                      tabIndex={-1}
                    >
                      <div className="part-img">
                        <a href="shop-details.html" tabIndex={0}>
                          <img
                            src="assets/images/feat-product-1.png"
                            alt="Image"
                          />
                        </a>
                      </div>
                      <div className="part-txt">
                        <a
                          href="shop-details.html"
                          className="title"
                          tabIndex={0}
                        >
                          Diamond wedding ring
                        </a>
                        <p className="price">
                          $195.00 <span>229.99</span>
                        </p>
                      </div>
                    </li>
                    <li
                      className="slick-slide slick-cloned slick-active"
                      data-slick-index={5}
                      id=""
                      aria-hidden="false"
                      style={{ width: 300 }}
                      tabIndex={-1}
                    >
                      <div className="part-img">
                        <a href="shop-details.html" tabIndex={-1}>
                          <img
                            src="assets/images/feat-product-2.png"
                            alt="Image"
                          />
                        </a>
                      </div>
                      <div className="part-txt">
                        <a
                          href="shop-details.html"
                          className="title"
                          tabIndex={-1}
                        >
                          Diamond wedding ring
                        </a>
                        <p className="price">
                          $195.00 <span>229.99</span>
                        </p>
                      </div>
                    </li>
                    <li
                      className="slick-slide slick-cloned"
                      data-slick-index={6}
                      id=""
                      aria-hidden="true"
                      style={{ width: 300 }}
                      tabIndex={-1}
                    >
                      <div className="part-img">
                        <a href="shop-details.html" tabIndex={-1}>
                          <img
                            src="assets/images/feat-product-3.png"
                            alt="Image"
                          />
                        </a>
                      </div>
                      <div className="part-txt">
                        <a
                          href="shop-details.html"
                          className="title"
                          tabIndex={-1}
                        >
                          Diamond wedding ring
                        </a>
                        <p className="price">
                          $195.00 <span>229.99</span>
                        </p>
                      </div>
                    </li>
                    <li
                      className="slick-slide slick-cloned"
                      data-slick-index={7}
                      id=""
                      aria-hidden="true"
                      style={{ width: 300 }}
                      tabIndex={-1}
                    >
                      <div className="part-img">
                        <a href="shop-details.html" tabIndex={-1}>
                          <img
                            src="assets/images/feat-product-4.png"
                            alt="Image"
                          />
                        </a>
                      </div>
                      <div className="part-txt">
                        <a
                          href="shop-details.html"
                          className="title"
                          tabIndex={-1}
                        >
                          Diamond wedding ring
                        </a>
                        <p className="price">
                          $195.00 <span>229.99</span>
                        </p>
                      </div>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
            <div className="sidebar-new-arrival">
              <div className="part-img">
                <a href="shop-details.html">
                  <img src="assets/images/new-arrival-4.jpg" alt="Image" />
                </a>
              </div>
              <div className="part-txt">
                <p>Season Sale!</p>
                <h3>New Arrivals</h3>
                <a href="shop-details.html">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-lg-8">
          <div className="shop-top-bar">
            <div className="row align-items-center">
              <div className="col-md-3 d-md-block d-none">
                <h3 id="shopViewType">Shop Grid</h3>
              </div>
              <div className="col-md-9">
                <div className="top-bar-right">
                  <select
                    name="sorting"
                    className="select"
                    style={{ display: "none" }}
                  >
                    <option value={0}>Default Sorting</option>
                    <option value={1}>Price (Low to heigh)</option>
                    <option value={2}>Price (Heigh to low)</option>
                    <option value={3}>Best match</option>
                    <option value={4}>Relevance</option>
                  </select>
                  <div className="nice-select select" tabIndex={0}>
                    <span className="current">Default Sorting</span>
                    <ul className="list">
                      <li data-value={0} className="option selected">
                        Default Sorting
                      </li>
                      <li data-value={1} className="option">
                        Price (Low to heigh)
                      </li>
                      <li data-value={2} className="option">
                        Price (Heigh to low)
                      </li>
                      <li data-value={3} className="option">
                        Best match
                      </li>
                      <li data-value={4} className="option">
                        Relevance
                      </li>
                    </ul>
                  </div>
                  <div className="show-wrap">
                    <span>Show:</span>
                    <select
                      name="show"
                      className="select"
                      style={{ display: "none" }}
                    >
                      <option value={1}>12</option>
                      <option value={2}>16</option>
                      <option value={3}>20</option>
                      <option value={4}>24</option>
                    </select>
                    <div className="nice-select select" tabIndex={0}>
                      <span className="current">12</span>
                      <ul className="list">
                        <li data-value={1} className="option selected">
                          12
                        </li>
                        <li data-value={2} className="option">
                          16
                        </li>
                        <li data-value={3} className="option">
                          20
                        </li>
                        <li data-value={4} className="option">
                          24
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="view-wrap">
                    <button className="active" id="gridView">
                      <i className="flaticon-apps" />
                    </button>
                    <button id="listView">
                      <i className="flaticon-menu" />
                    </button>
                  </div>
                  <div className="top-pagination">
                    <input
                      type="number"
                      name="current"
                      id="currentPage"
                      defaultValue={1}
                      min={1}
                    />
                    <span>of 3</span>
                    <button>
                      <i className="fa-solid fa-right-long" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-lg-4 g-3">
            {Product?.length > 0 ? Product.map((pItem) =>{
                return(
                    <div className="product-col col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-6" key={pItem.id}>
                    <div className="single-product-card">
                      <div className="part-img">
                        <a href="shop-details.html">
                          <img src={pItem.photo} alt="Product" />
                        </a>
                        <div className="cart-option cart-option-bottom">
                          <ul>
                            <li>
                              <a role="button" className="add-to-cart">
                                <i className="fa-light fa-cart-shopping" />
                              </a>
                            </li>
                            <li>
                              <a role="button" className="add-to-wish">
                                <i className="fa-light fa-heart" />
                              </a>
                            </li>
                            <li>
                              <a role="button" className="quick-view">
                                <i className="fa-light fa-image" />
                              </a>
                            </li>
                            <li>
                              <a href="shop-details.html" className="view-product">
                                <i className="fa-light fa-eye" />
                              </a>
                            </li>
                          </ul>                    
                        </div>
                      </div>
                      <div className="part-txt">
                        <h4 className="product-name">
                          <a href="shop-details.html">{pItem.productTitle}</a>
                        </h4>
                        <p className="dscr">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Ducimus aliquid laborum aperiam dolores. Dignissimos at harum
                          corporis qui illo nam fugit recusandae ratione odit neque
                          officia, accusamus ab, assumenda odio.
                        </p>
                        <p className="price">
                          <span>${pItem.productPrice}</span>${pItem.productDiscountPrice}
                        </p>
                        <div className="star">
                          <i className="fa-solid fa-star-sharp rated" />
                          <i className="fa-solid fa-star-sharp rated" />
                          <i className="fa-solid fa-star-sharp rated" />
                          <i className="fa-solid fa-star-sharp rated" />
                          <i className="fa-solid fa-star-sharp" />
                        </div>
                        <button className="add-to-cart-btn">Add to Cart</button>
                      </div>
                    </div>
                  </div>

                )

            }):"No Product Found"}

        
           
     
          </div>
          <div className="bottom-pagination d-flex justify-content-center">
            <ul>
              <li>
                <button>
                  <i className="fa-regular fa-angle-left" />
                </button>
              </li>
              <li>
                <button className="active">1</button>
              </li>
              <li>
                <button>2</button>
              </li>
              <li>
                <button>
                  <i className="fa-regular fa-angle-right" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Shop