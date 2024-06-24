import multer from "multer";

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.filename);
  },
});

// multer middleware

export const UserMulter = multer({ storage }).single("photo");
