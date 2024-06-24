import expressAsyncHandler from "express-async-handler";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// create All authControllers
/**
 * @description : this is a user get controller
 * @route : /api/v1/auth/users
 * @method: get
 * @access: public
 */

export const getUsers = expressAsyncHandler(async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json({ users, message: " here is your all users" });
});

/**
 * @description : this is a user create controller
 * @route : /api/v1/auth/users
 * @method: post
 * @access: public
 */

export const createUsers = expressAsyncHandler(async (req, res) => {
  const { name, email,answer, password } = req.body;
  const users = await prisma.user.create({
    data: { name, email,answer, password },
  });
  res.status(200).json({ users, message: " users created" });
});

/**
 * @description : this is a user deleteMultipleUsers controller
 * @route : /api/v1/auth/users
 * @method: delete
 * @access: public
 */

export const deleteMultipleUsers = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  const idArray = Array.isArray(id) ? id : id.split(",");

  const deleteusers = await prisma.user.deleteMany({
    where: {
      id: { in: idArray },
    },
  });

  res.status(200).json({ deleteusers, message: " user deleted" });
});
/**
 * @description : this is a user delete Users controller
 * @route : /api/v1/auth/users
 * @method: delete
 * @access: public
 */

export const deleteUsers = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  

  const deleteusers = await prisma.user.delete({
    where: {
      id
    },
  });

  res.status(200).json({ deleteusers, message: " user deleted" });
});

/**
 * @description : this is a user update controller
 * @route : /api/v1/auth/users
 * @method: patch
 * @access: public
 */

export const updateUsers = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  const updateusers = await prisma.user.update({
    where: { id },
    data: { name, email, password },
  });
  res.status(200).json({ updateusers, message: " user updated" });
});
