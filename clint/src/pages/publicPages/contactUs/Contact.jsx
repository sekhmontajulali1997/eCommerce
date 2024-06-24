import { useState } from "react";

const Contact = () => {
  const category = [
    {
      id: 1,
      name: "man",
      slug: "man-cloth",
    },
    {
      id: 2,
      name: "woman",
      slug: "woman-cloth",
    },
    {
      id: 3,
      name: "shoes",
      slug: "man-shoes",
    },
  ];
  //   const tags = [
  //     {
  //       id: 1,
  //       name: "cutton",
  //       slug: "cutton-cloth",

  //   },
  //     {
  //       id: 2,
  //       name: "good",
  //       slug: "good-cloth",

  //   },
  //     {
  //       id: 3,
  //       name: "best",
  //       slug: "best-cloth",

  //   },
  // ]

  const [categorys, setcategorys] = useState([]);
  const handleInputCategory = (e) => {
    const { value, checked } = e.target;

   
    if (checked) {
      setcategorys([...categorys, value]);
    }else{
      setcategorys(categorys.filter((item)=> item !== value));
    }
  };
  
  const hsubmit=(e) =>{
    e.preventDefault()
    console.log(categorys);
  }

  return (
    <>
      {category?.length > 0
        ? category.map((item, index) => {
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  value={item.name}
                  name="category"
                  onChange={handleInputCategory}
                />
                <label htmlFor=""> {item.name}</label>
              </div>
            );
          })
        : "category not found"}

      <div>
        {" "}
        <button
          onClick={hsubmit}
          style={{ background: "blue", color: "white" }}
        >
          {" "}
          submit
        </button>
      </div>
    </>
  );
};

export default Contact;










