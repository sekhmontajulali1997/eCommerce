1. ata controller



export const createProduct = expressAsyncHandler(async (req, res) => {
  console.log(req.body);

  const {
    productTitle,
    categoryIDs,
    productDescription,
    productDiscountPrice,
    productPrice,
    productSku,
    productQty,
  } = req.body;

  const fileData = await fileUpload(req.file.url)
  


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
const [ProductImg, setProductImg] = useState(null);


  const { input, formReset, handleInputChange } = useForm({
    productTitle: "",
    productPrice: "",
    productDiscountPrice: "",
    productSku: "",
    productQty: "",
    photo :"",
    productDescription: "",
  });



//
  // for photo upload

  const handleUploadPhoto = (e) => {
    setProductImg(e.target.files[0]);

    
  };



ata submite button 

 dispatch(createProduct({ ...input, categoryIDs: categorys, photo: formData }));








 <input
           className="upload-image"
                                        data-target="image-result"
                                        id="change-avatar"
                                        type="file"
                                        max={1}
                                        name="photo"
                                        
                                        
                                        onChange={handleUploadPhoto}
                                        h





