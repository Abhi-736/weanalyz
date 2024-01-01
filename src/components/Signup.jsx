import React from "react";
import {Link} from "react-router-dom";


const Signup= () => {
  const [loginDetails, setLoginDetails] = React.useState([]);

  const [name, setName] = React.useState("");
  const [number, setNumber] = React.useState();
  const [email, setEmail] = React.useState("");
  const [showAlert, setshowAlert] = React.useState(false);
  const [loginbtn,showLoginbtn] =React.useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name);
    console.log(number);
    console.log(email);

    setLoginDetails((value) => {
      return [...value, { 'name': name, 'number': number, 'email': email }];
    });
  };
  React.useEffect(() => {
    
      const storedDetails = JSON.parse(localStorage.getItem("formDetails") || "[]");

      const match = storedDetails.some((value) => {
        return (
          value.name === name &&
          value.number === number &&
          value.email === email
        );
      });
  
      if (match) {
        setshowAlert(true);
      } else {
        // Update localStorage with the updated login details
        setshowAlert(false);
        localStorage.setItem("formDetails", JSON.stringify(loginDetails));
name&&number&&email?showLoginbtn(true):null
        /* navigate("/Login"); */

      }
    
      
  }, [loginDetails]);

  return (
    <div  style={{height:'82vh'}}>
      <header style={{display:'flex', justifyContent:'center', font:'2rem sans-serif'}}>Signup</header>
      <form onSubmit={handleSubmit}>
        <div style={{flexDirection:'column'}}>
          <input
            label="Name"
            name="name"
            /* value={name} */
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            label="Password"
            name="Password"
            type="password"
            /* value={number} */
            onChange={(e) => {
              
              const parsedNumber = parseFloat(e.target.value);
              if (!isNaN(parsedNumber)) { 
                setNumber(parsedNumber);
              } else {
                setNumber(undefined); 
              }
            }}
          />
          <input
            label="Email"
            name="email"
            type="email"
            /* value={email} */
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {/* Add more form fields here */}
          <button type="submit"  color="primary">
            Submit
          </button>
        </div>
      </form>
      {showAlert &&<div >The entry already exists!</div>}
      {loginbtn &&<div>Thankyou for signing up now <Link to='/'>Login</Link></div>}
    </div>
  );
};

export default Signup;