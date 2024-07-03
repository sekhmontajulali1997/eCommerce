//import { useState } from "react";
import { Link } from "react-router-dom";
import useForm from "../../../hooks/useFormHooks/useForm";

const Home = () => {
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
  const tags = [
    {
      id: 1,
      name: "cutton",
      slug: "cutton-cloth",

  },
    {
      id: 2,
      name: "good",
      slug: "good-cloth",

  },
    {
      id: 3,
      name: "best",
      slug: "best-cloth",

  },
]

  const { input,setInput } = useForm({
    category: [],
    tags: [],
  });


  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;
  
    if (name === "category" || name === "tags") {
      let updatedInput = { ...input };
  
      if (checked) {
        updatedInput[name].push(value);
      } else {
        updatedInput[name] = updatedInput[name].filter((item) => item !== value);
      }
  
      setInput(updatedInput);
    } else {
      setInput((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  
  const handleInputSubmit = (e) => {
    e.preventDefault();
  
    console.log(input);
  };






  // const handleInputChange = (e) => {
  //   if (e.target.name === "category") {
  //     const { value, checked } = e.target;

  //     let getCategory = { ...input };
  //   //  let getTags = { ...input };

  //     if (checked) {
  //       getCategory.category.push(value);
  //     } else {
  //       getCategory.category = getCategory.category.filter(
  //         (item) => item !== value
  //       );
  //     }

  //     // if (checked === "tags") {
  //     //   getTags.tags.push(value);
  //     // } else {
  //     //   getTags.tags = getTags.tags.filter((item) => item !== value);
  //     // }

  //     setInput(getCategory);
  //   } else {
  //     setInput((prevState) => ({
  //       ...prevState,
  //       [e.target.name]: e.target.value,
  //     }));
  //   }
  // };

  // const handleInputSubmit = (e) => {
  //   e.preventDefault();

  //   console.log(input);
  // };

  return (
    <>
      <div style={{ margin: "10px" }}>
      
        <Link to="about"> about</Link>
      </div>
      <div>
        <Link to="contact"> contact</Link>
      </div>

      <div>
        <form action="">
          {category?.length > 0
            ? category.map((item, index) => {
                return (
                  <div key={index} style={{ margin: "50px" }}>
                    <div>
                      <input
                        type="checkbox"
                        name="category"
                        value={item.name}
                        onChange={handleInputChange}
                      />
                      <label>{item.name}</label>
                    </div>
                  </div>
                );
              })
            : "no"} 
          {tags?.length > 0
            ? tags.map((item, index) => {
                return (
                  <div key={index} style={{ margin: "50px" }}>
                    <div>
                      <input
                        type="checkbox"
                        name="tags"
                        value={item.name}
                        onChange={handleInputChange}
                      />
                      <label>{item.name}</label>
                    </div>
                  </div>
                );
              })
            : "no"}

          <button onClick={handleInputSubmit}> submit</button>
        </form>
      </div>
    </>
  );
};

export default Home;

// const handleInputChange = (e) => {

//   if (e.target.name === "category") {
//     const { value, checked } = e.target;
//     let allCategory = {...input}

//   if (checked) {

//     allCategory.category.push(value)

//   }else{
//     allCategory.category = allCategory.category.filter((item) => item !== value)
//   }

//     setInput(allCategory)
//   }else{
//     setInput((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   }

// };
