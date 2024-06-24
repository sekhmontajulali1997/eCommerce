import expressAsyncHandler from "express-async-handler";
import { PrismaClient } from "@prisma/client";
import slugify from "slugify";
import { fileUpload } from "../../utiles/Cloudenary.js";
const prisma = new PrismaClient();
// create All authControllers
/**
 * @description : this is a createCategory get controller
 * @route : /api/v1/auth/createCategory
 * @method: get
 * @access: public
 */

export const getcreateCategory = expressAsyncHandler(async (req, res) => {
  const createCategory = await prisma.createCategory.findMany();
  res.status(200).json({ createCategory, message: " here is your all createCategory" });
});

/**
 * @description : this is a createCategory get controller
 * @route : /api/v1/auth/get single
 * @method: get single category
 * @access: public
 */
export const getSingleCategory = expressAsyncHandler(async(req,res) =>{
  const {id} = req.params
  const getSingleCategory = await prisma.createCategory.findMany({
    where: {id}
  })
  res.status(200).json({getSingleCategory, message:"This is Your category"})
})

/**
 * @description : this is a createCategory create controller
 * @route : /api/v1/auth/createCategory
 * @method: post
 * @access: public
 */

export const createcreateCategory = expressAsyncHandler(async (req, res) => {



  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  const {name, photo,  slug,} = req.body;

  const fileData = await fileUpload(req.file.path)
  

  const createCategory = await prisma.createCategory.create({
    data: { name, photo: fileData.secure_url  , slug: slugify(name), },
  });
  res.status(200).json({ createCategory, message: " createCategory created" });
});

/**
 * @description : this is a createCategory deleteMultiplecreateCategory controller
 * @route : /api/v1/auth/createCategory
 * @method: delete
 * @access: public
 */

export const deleteMultiplecreateCategory = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  const idArray = Array.isArray(id) ? id : id.split(",");

  const deletecreateCategory = await prisma.createCategory.deleteMany({
    where: {
      id: { in: idArray },
    },
  });

  res.status(200).json({ deletecreateCategory, message: " createCategory deleted" });
});
/**
 * @description : this is a createCategory delete createCategory controller
 * @route : /api/v1/auth/createCategory
 * @method: delete
 * @access: public
 */

export const deletecreateCategory = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  

  const deletecreateCategory = await prisma.createCategory.delete({
    where: {
      id
    },
  });

  res.status(200).json({ deletecreateCategory, message: " createCategory deleted" });
});

/**
 * @description : this is a createCategory update controller
 * @route : /api/v1/auth/createCategory
 * @method: patch
 * @access: public
 */

export const updatecreateCategory = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name,slug } = req.body;
  const updatecreateCategory = await prisma.createCategory.update({
    where: { id },
    data: { name, slug:slugify(name)  },
  });
  res.status(200).json({ updatecreateCategory, message: " createCategory updated" });
});

//////////////


// export const ProductAndCategory = expressAsyncHandler(async (req, res) => {

//   const { product_id,category_id } = req.body;
//   const ProductAndCategory = await prisma.ProductAndCategory.create({
   
//     data: { product_id, category_id },
//   });
//   res.status(200).json({ ProductAndCategory, message: " ProductAndCategory updated" });
// });
