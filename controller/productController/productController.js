import expressAsyncHandler from "express-async-handler";
import { PrismaClient } from "@prisma/client";
import slugify from "slugify";
import {
  fileDelete,
  fileUpload,
  getPublicIdFromUrl,
} from "../../utiles/Cloudenary.js";

const prisma = new PrismaClient();
// create All authControllers
/**
 * @description : this is a Product get controller
 * @route : /api/v1/auth/Product
 * @method: get
 * @access: public
 */

export const getProduct = expressAsyncHandler(async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 16;

  if (page <= 0) {
    page = 1;
  }
  if (limit <= 0 || limit > 100) {
    limit = 16;
  }
  const skip = (page - 1) * limit;

  const Product = await prisma.Product.findMany({
    skip: skip,
    take: limit,
  });
  const totalProducts = await prisma.product.count();

  const totalPages = Math.ceil(totalProducts / limit);

  //const Product = await prisma.Product.findMany({});
  res.status(200).json({
    Product,
    totalProducts,
    totalPages,
    message: " here is your all Product",
  });
});
/**
 * @description : this is a Product get controller
 * @route : /api/v1/auth/Product
 * @method: get
 * @access: public
 */

export const getSingleProduct = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const singleProduct = await prisma.product.findUnique({
    where: {
      id,
    },
  });
  res
    .status(200)
    .json({ singleProduct, message: " here is your single Product" });
});

/**
 * @description : this is a Product create controller
 * @route : /api/v1/auth/Product
 * @method: post
 * @access: public
 */

export const createProduct = expressAsyncHandler(async (req, res) => {
  const {
    productTitle,
    categoryIDs,
    productDescription,
    productDiscountPrice,
    productPrice,
    productSku,

    productQty,
  } = req.body;

  const fileData = await fileUpload(req.file.path);

  const Product = await prisma.product.create({
    data: {
      productTitle,
      categoryIDs,
      productDescription,
      productPrice: parseInt(productPrice),
      photo: fileData ? fileData.secure_url : "",
      productDiscountPrice: parseInt(productDiscountPrice),
      productSku,
      productQty: parseInt(productQty),
    },
  });
  res.status(200).json({ Product, message: " Product created" });
});

//});

/**
 * @description : this is a Product deleteMultipleProduct controller
 * @route : /api/v1/auth/Product
 * @method: delete
 * @access: public
 */

export const deleteMultipleProduct = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  const idArray = Array.isArray(id) ? id : id.split(",");

  const deleteMultipleProduct = await prisma.product.deleteMany({
    where: {
      id: { in: idArray },
    },
  });

  res.status(200).json({ deleteMultipleProduct, message: " Product deleted" });
});
/**
 * @description : this is a Product delete Product controller
 * @route : /api/v1/auth/Product
 * @method: delete
 * @access: public
 */

// export const deleteProduct = expressAsyncHandler(async (req, res) => {
//   const { id } = req.params;

// const product = await prisma.product.findUnique({ where: { id } });
// const public_id = getPublicIdFromUrl(product.photo);

//   const deleteProduct = await prisma.product.delete({
//     where: {
//       id,
//     },
//   });
//   if (deleteProduct) {

//     await fileDelete(public_id)

//   }

//   res.status(200).json({ deleteProduct, message: " Product deleted" });
// });

// export const deleteProduct = expressAsyncHandler(async (req, res) => {
//   const { id } = req.params;
//   const product = await prisma.product.findUnique({ where: { id } });
//   const public_id = getPublicIdFromUrl(product.photo);

//   const deleteProduct = await prisma.product.delete({ where: { id } }); // Add await here
//   if (deleteProduct) {
//     await fileDelete(public_id); // Delete the previous image
//   }

//   res.status(200).json({ deleteProduct, message: "Product deleted" });
// });





export const deleteProduct = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  
    const product = await prisma.product.findUnique({ where: { id } });

    const public_id = getPublicIdFromUrl(product.photo);
   

    const deletedProduct = await prisma.product.delete({ where: { id } });

    if (deletedProduct) {
      await fileDelete(public_id); // Delete the image from Cloudinary
    }

    res.status(200).json({ deletedProduct, message: 'Product deleted' });
   
});









/**
 * @description : this is a Product update controller
 * @route : /api/v1/auth/Product
 * @method: patch
 * @access: public
 */

export const updateProduct = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  let fileData;

  if (req.file) {
    const product = await prisma.product.findUnique({ where: { id } });
    const public_id = getPublicIdFromUrl(product.photo);
    if (product.photo) {
      await fileDelete(public_id); // Delete the previous image
    }
    fileData = await fileUpload(req.file.path);  
  }

  const {
    productTitle,
    categoryIDs,
    slug,
    productDescription,
    productDiscountPrice,
    productPrice,
    productSku,
    productQty,
  } = req.body;
  const updateProduct = await prisma.product.update({
    where: { id },
    data: {
      productTitle,
      slug: slugify(productTitle),
      categoryIDs,
      productDescription,
      productPrice: parseInt(productPrice),
      photo: fileData ? fileData.secure_url : undefined,
      productDiscountPrice: parseInt(productDiscountPrice),
      productSku,
      productQty: parseInt(productQty),
    },
  });
  res.status(200).json({ updateProduct, message: " Product updated" });
});

/**
 * @description : this is a  filters Product controller
 * @route : /api/v1/auth/Product/filterproducts
 * @method: post
 * @access: public
 */

export const productsFilters = expressAsyncHandler(async (req, res) => {
  const { ids } = req.params;

  if (!ids) {
    return res.status(400).json({ error: "No category IDs provided" });
  }

  const categoryIdsArray = ids.split(",");

  const products = await prisma.product.findMany({
    where: {
      categoryIDs: {
        hasSome: categoryIdsArray,
      },
    },
  });

  res.status(200).json({ products, message: "Products filtered successfully" });
});

//this is pagination code in using sparate contaroller start

// export const productsPagination = expressAsyncHandler(async (req, res) => {
//   const page = Number(req.params.page) || 1;
//   const limit= Number(req.params.limit) || 2;

//   if (page <= 0) {
//     page = 1;
//   }
//   if (limit <= 0 || limit > 100) {
//     limit = 2;
//   }
//   const skip = (page - 1) * limit;

//   const productsFilters = await prisma.product.findMany({
//     skip: skip,
//     take: limit,
//   });
//   const totalProducts = await prisma.product.count();

//   const totalPages = Math.ceil(totalProducts / limit)

//   res.status(200).json({productsFilters,totalProducts, caurantPages: page , limit: limit  });
// });

// //

//this is pagination code in using sparate contaroller end

//this is products count code in using sparate contaroller start

// export const productsCount = expressAsyncHandler(async (req, res) => {

//   const totalProducts = await prisma.product.count();
//   console.log(totalProducts);
//   res.status(200).json(totalProducts);

// })

//this is products count code in using sparate contaroller end
