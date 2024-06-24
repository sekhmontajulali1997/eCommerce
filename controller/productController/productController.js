import expressAsyncHandler from "express-async-handler";
import { PrismaClient } from "@prisma/client";
import slugify from "slugify";
import { fileUpload } from "../../utiles/Cloudenary.js";


const prisma = new PrismaClient();
// create All authControllers
/**
 * @description : this is a Product get controller
 * @route : /api/v1/auth/Product
 * @method: get
 * @access: public
 */

export const getProduct = expressAsyncHandler(async (req, res) => {
  const Product = await prisma.Product.findMany({});
  res.status(200).json({ Product, message: " here is your all Product" });
});
/**
 * @description : this is a Product get controller
 * @route : /api/v1/auth/Product
 * @method: get
 * @access: public
 */

export const getSingleProduct = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const singleProduct = await prisma.product.findMany({
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
  console.log(req.body);
  console.log(req.files);

  const {
    productTitle,
    categoryIDs,
    productDescription,
    productDiscountPrice,
    productPrice,
    productSku,
    productQty,
  } = req.body;

  const fileData = await fileUpload(req.file.path)
  


  const Product = await prisma.product.create({
    data: {
      productTitle,
     
      categoryIDs,
      productDescription,
      productPrice: parseInt(productPrice),
      photo: fileData.secure_url,
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

  const deleteProduct = await prisma.product.deleteMany({
    where: {
      id: { in: idArray },
    },
  });

  res.status(200).json({ deleteProduct, message: " Product deleted" });
});
/**
 * @description : this is a Product delete Product controller
 * @route : /api/v1/auth/Product
 * @method: delete
 * @access: public
 */

export const deleteProduct = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  const deleteProduct = await prisma.product.delete({
    where: {
      id,
    },
  });

  res.status(200).json({ deleteProduct, message: " Product deleted" });
});

/**
 * @description : this is a Product update controller
 * @route : /api/v1/auth/Product
 * @method: patch
 * @access: public
 */

export const updateProduct = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const {
    productTitle,
    categoryIDs,
    slug,
    productDescription,
    photo,
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
      photo,
      productDiscountPrice: parseInt(productDiscountPrice),
      productSku,
      productQty: parseInt(productQty),
    },
  });
  res.status(200).json({ updateProduct, message: " Product updated" });
});
