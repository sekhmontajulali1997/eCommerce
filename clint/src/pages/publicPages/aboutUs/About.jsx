import { useState } from "react";

const About = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    foods: [],
  });
  const handleInputChange = (e) => {

if (e.target.name === "foods") {
  const { value, checked } = e.target;
  let allFoods = { ...input };

  if (checked) {
    allFoods.foods.push(value);
   
  }else{
    allFoods.foods = allFoods.foods.filter((item) => item !== value)
    
  }
  setInput(allFoods)
  
}else{ 
  setInput((prevSate) => ({
    ...prevSate,
    [e.target.name]: e.target.value,
  }));
}
  


  };

  const handleInputSubmite = (e) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xxl-6">
            <div>
              <form action="">
                <input
                  type="text"
                  onChange={handleInputChange}
                  value={input.name}
                  name="name"
                  placeholder="name"
                />
                <input
                  type="email"
                  onChange={handleInputChange}
                  value={input.email}
                  name="email"
                  placeholder="email"
                />

                <input
                  type="checkbox"
                  name="foods"
                  onChange={handleInputChange}
                  value="mango"
                />
                <label htmlFor="">mango</label>
                <input
                  type="checkbox"
                  name="foods"
                  onChange={handleInputChange}
                  value="banana"
                />
                <label htmlFor="">banana</label>
                <input
                  type="checkbox"
                  name="foods"
                  onChange={handleInputChange}
                  value="apple"
                />
                <label htmlFor=""> apple</label>

                <button onClick={handleInputSubmite}>submite</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
