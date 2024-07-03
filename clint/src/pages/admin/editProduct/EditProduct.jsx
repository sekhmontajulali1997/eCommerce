import { useEffect,  } from "react";
import { useDispatch, useSelector } from "react-redux";
import {

  getSingleProducts,
  updateProductApiSlice,
} from "../../../features/products/productsApiSlice";
//import { setEmtyMessage } from "../../../features/products/productsSlice";
import {
  productSelector,
 // setEmtyMessage,
} from "../../../features/products/productsSlice";
import { Link, useNavigate, useParams } from "react-router-dom";

import { getCategoryApiSlice } from "../../../features/category/categoryApiSlice";
import { categorySelector } from "../../../features/category/categorySlice";
import useForm from "../../../hooks/useFormHooks/useForm";
import { useState } from "react";

const EditProduct = () => {
  const [ProductImg, setProductImg] = useState(null);
 const dispatch = useDispatch();
  const {id}  = useParams();
  

  const navigator = useNavigate();

  //const [editProduct, setEditProduct] = useState()
  const { singleProduct } = useSelector(productSelector);


  const { category } = useSelector(categorySelector);
//get category
const [categorys, setcategorys] = useState(singleProduct?.categoryIDs|| []);

// handleInputcategory
const handleInputcategory = (e) =>{

  const {value, checked} = e.target;
  if (checked) {
    setcategorys((prevCategories)=>([...prevCategories, value]))
   
  }else{
    setcategorys( categorys.filter((item) => item !== value));
  }

}
//get category end 
  const { input,setInput, handleInputChange } = useForm({
    productTitle: "",
    productPrice: "",
    productDiscountPrice: "",
    photo: "",
    productSku: "",
    productQty: "",
    productDescription: "",
    categoryIDs: [],
  });

  const handleUploadPhoto = (e) => {
    setProductImg(e.target.files[0]);
  };

  // handleInputUpdateProduct

  const handleInputUpdateProduct = (e) => {
    e.preventDefault();

    dispatch(updateProductApiSlice({...input, categoryIDs : categorys, photo: ProductImg}));
    navigator("/admin-dashboard/all-products");
  };
  useEffect(() => {
    if (singleProduct?.categoryIDs) {
      setcategorys(singleProduct.categoryIDs);
    }
  }, [singleProduct]);

  useEffect(() => {
    dispatch(getCategoryApiSlice());
  
  },[dispatch]);


    
useEffect(()=>{
  
  dispatch(getSingleProducts(id))
 
},[dispatch,id]); 

useEffect(() => {
  if (singleProduct && singleProduct.id === id) {
 
  setInput(singleProduct);
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [singleProduct, id]);
 
// useEffect(() => {
//   if (singleProduct?.categoryIDs) {
//     setcategorys(singleProduct.categoryIDs);
//   }
// }, [singleProduct]);
  return (
    <>
      <div className="nk-content">
        <div className="container">
          <div className="nk-content-inner">
            <div className="nk-content-body">
              <div className="nk-block-head">
                <div className="nk-block-head-between flex-wrap gap g-2">
                  <div className="nk-block-head-content">
                    <h2 className="nk-block-title">Edit Product</h2>
                    <nav>
                      <ol className="breadcrumb breadcrumb-arrow mb-0">
                        <li className="breadcrumb-item">
                          <Link to="#">Home</Link>
                        </li>
                        <li className="breadcrumb-item">
                          <Link to="#">ecommerce</Link>
                        </li>
                        <li className="breadcrumb-item" aria-current="page">
                          Edit Product
                        </li>
                      </ol>
                    </nav>
                  </div>
                  <div className="nk-block-head-content">
                    <ul className="d-flex">
                      <li>
                        <Link
                          to="products.html"
                          className="btn btn-primary btn-md d-md-none"
                        >
                          <em className="icon ni ni-eye" />
                          <span>View</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/admin-dashboard/all-products"
                          className="btn btn-primary d-none d-md-inline-flex"
                        >
                          <em className="icon ni ni-eye" />
                          <span>View Products</span>
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
                                    <label
                                      htmlFor="productname"
                                      className="form-label"
                                    >
                                      Product Tittle
                                    </label>
                                    <div className="form-control-wrap">
                                      <input
                                        type="text"
                                        name="productTitle"
                                        value={input.productTitle}
                                        onChange={handleInputChange}
                                        className="form-control"
                                        id="productname"
                                        placeholder="Product Tittle"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label
                                      htmlFor="baseprice"
                                      className="form-label"
                                    >
                                      Price
                                    </label>
                                    <div className="form-control-wrap">
                                      <input
                                        type="text"
                                        name="productPrice"
                                        value={input.productPrice}
                                        onChange={handleInputChange}
                                        className="form-control"
                                        id="baseprice"
                                        placeholder="Product price"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label
                                      htmlFor="discount-price"
                                      className="form-label"
                                    >
                                      Discount Price
                                    </label>
                                    <div className="form-control-wrap">
                                      <input
                                        name="productDiscountPrice"
                                        value={
                                          input.productDiscountPrice
                                        }
                                        onChange={handleInputChange}
                                        type="text"
                                        className="form-control"
                                        id="discount-price"
                                        placeholder="Discount price"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label htmlFor="sku" className="form-label">
                                      SKU
                                    </label>
                                    <div className="form-control-wrap">
                                      <input
                                        name="productSku"
                                        value={input.productSku}
                                        onChange={handleInputChange}
                                        type="text"
                                        className="form-control"
                                        id="sku"
                                        placeholder="SKU number"
                                      />
                                    </div>
                                  </div>
                                </div>
                                {/* <div className="col-lg-6">
                            <div className="form-group">
                              <label htmlFor="barcode" className="form-label">
                                Barcode
                              </label>
                              <div className="form-control-wrap">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="barcode"
                                  placeholder="Barcode number"
                                />
                              </div>
                            </div>
                          </div> */}
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label className="form-label">
                                      Quantity
                                    </label>
                                    <div className="row g-gs">
                                      <div className="form-control-wrap">
                                        <input
                                          name="productQty"
                                          value={input.productQty}
                                          onChange={handleInputChange}
                                          type="text"
                                          className="form-control"
                                          placeholder="On shelf"
                                        />
                                      </div>

                                      {/* <div className="col-lg-6">
                                  <div className="form-control-wrap">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="In warehouse"
                                    />
                                  </div>
                                </div> */}
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label className="form-label">
                                      Description
                                    </label>
                                    <div>
                                      <textarea
                                        name="productDescription"
                                        value={
                                          input.productDescription
                                        }
                                        onChange={handleInputChange}
                                        className="form-control"
                                        id=""
                                      ></textarea>
                                    </div>
                                  </div>
                                </div>
                                {/* <div className="col-lg-12">
                            <div className="form-group">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                  id="addProductshippingCheckbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="addProductshippingCheckbox"
                                >
                                  This is Link physical product
                                </label>
                              </div>
                              <div className="smaller">
                                Set if the product is Link physical or digital
                                item. Physical products may require shipping.
                              </div>
                            </div>
                          </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="gap-col">
                          <div className="card card-gutter-md">
                            <div className="card-body">
                              <div className="form-group">
                                <label className="form-label">
                                  Upload Media
                                </label>
                                <div className="form-control-wrap">
                                  <div
                                    className="js-upload dropzone dz-clickable"
                                    id="dropzoneFile1"
                                    data-message-icon="img"
                                  >
                                    <div
                                      className="dz-message"
                                      data-dz-message=""
                                    >
                                      <div className="dz-message-icon">
                                        <em className="icon icon-lg ni ni-img" />
                                      </div>
                                      <span className="dz-message-text">
                                        Drop files here or click to upload.
                                      </span>
                                      <div className="dz-message-btn mt-2">
                                        <button className="btn btn-md btn-primary">
                                          Upload
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-note mt-3">
                                  Set the product media gallery.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="gap-col">
                          <ul className="d-flex align-items-center gap g-3">
                            <li>
                              <button
                                onClick={handleInputUpdateProduct}
                                type="submit"
                                className="btn btn-primary"
                              >
                                Update Product
                              </button>
                            </li>
                            <li>
                              <Link
                                to="/admin-dashboard/all-products"
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
                                        src={
                                          ProductImg ? URL.createObjectURL(
                                            ProductImg
                                          ) : input.photo
                                        }
                                        alt="avatar"
                                      />
                                    </div>
                                    <div className="pt-3">
                                      <input
                                        className="upload-image"
                                        onChange={handleUploadPhoto}
                                        data-target="image-result"
                                        id="change-avatar"
                                        name="photo"
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
                                  Set the product thumbnail image. Only *.png,
                                  *.jpg and *.jpeg image files are accepted.
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <label className="form-label mb-4">
                                Categories
                              </label>
                              <div className="form-group h-75 overflow-scroll ">
                                <div className="form-control-wrap ">
                                  {category?.length > 0
                                    ? category?.map((item, index) => {
                                        return (
                                          <div
                                            className="form-check"
                                            key={index}
                                          >
                                            <input
                                              className="form-check-input "
                                              type="checkbox"
                                              name="categoryIDs"
                                              value={item.id}
                                              onChange={handleInputcategory}
                                              checked={categorys.includes(item.id)}
                                            />
                                            <label
                                              style={{ marginLeft: "10px" }}
                                            >
                                              {item.name}
                                            </label>
                                          </div>
                                        );
                                      })
                                    : "no Category Found"}
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <label className="form-label">Tags</label>
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
                                        placeholder="Add tags to Link product"
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
                                          id="choices--ees1-item-choice-1"
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
                                          id="choices--ees1-item-choice-2"
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
                                          id="choices--ees1-item-choice-3"
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
                                          id="choices--ees1-item-choice-4"
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
                                          id="choices--ees1-item-choice-5"
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

export default EditProduct;
