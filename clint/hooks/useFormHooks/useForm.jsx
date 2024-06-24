// import { useState } from "react"


// const useForm = (initialState) => {

// const [input, setInput] = useState(initialState);

// const handleFormReset = () =>{

// setInput(initialState)
// }
//  const handleInputChange = (e) =>{

//     setInput((prevState)=>({
//         ...prevState,
//         [e.target.name]: e.target.value
//     })
       

//     )

// }


//   return {input,handleInputChange, handleFormReset,setInput}
    
// }

// export default useForm







import { useState } from "react";

const useForm = (initialState) => {
  const [input, setInput] = useState(initialState);

  // onChange

  const handleInputChange = (e) => {
    const {  type  } = e.target;
    if (type === "file") {
      setInput((input)=>({
        ...input,
        [e.target.name]: e.target.files[0]
      }));
    } else {
      setInput((input)=>({
        ...input,
        [e.target.name]: e.target.value
      }));
    }
  };

// form reset

const formReset = () =>{
  setInput(initialState)
}

  return{input, handleInputChange, formReset,setInput }
};

export default useForm;
