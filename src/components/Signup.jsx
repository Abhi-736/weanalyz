import React from "react";
import {Link} from "react-router-dom";


const Signup= () => {
  const [loginDetails, setLoginDetails] = React.useState([]);

  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState();
  const [email, setEmail] = React.useState("");
  const [showAlert, setshowAlert] = React.useState(false);
  const [loginbtn,showLoginbtn] =React.useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    setLoginDetails((value) => {
      return [...value, { 'name': name, 'password': password, 'email': email }];
    });
  };
  React.useEffect(() => {
    
      const storedDetails = JSON.parse(localStorage.getItem("formDetails") || "[]");

      const match = storedDetails.some((value) => {
        return (
          value.name === name &&
          value.password === password &&
          value.email === email
        );
      });
  
      if (match) {
        setshowAlert(true);
      } else {
        // Update localStorage with the updated login details
        setshowAlert(false);
        localStorage.setItem("formDetails", JSON.stringify(loginDetails));
name&&password&&email?showLoginbtn(true):null
        /* navigate("/Login"); */

      }
    
      
  }, [loginDetails]);

  return (
    <div  className="Signup">
      <main className="SignupContainer">
      <header style={{display:'flex', justifyContent:'center', font:'2rem sans-serif'}}>HelpDesk System </header>
      <h4>Sign up here</h4>
      <form onSubmit={handleSubmit}>
       
          <input placeholder="Name"
            label="Name"
            name="name"
            /* value={name} */
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input placeholder="Password"
            label="Password"
            name="Password"
            type="password"
            /* value={number} */
            onChange={(e) => {
              
              setPassword(e.target.value)
            }}
          />
          <input placeholder="Email"
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
        
      </form>
      {showAlert &&<div >The entry already exists!</div>}
      {loginbtn &&<div>Thankyou for signing up now <Link to='/'>Login</Link></div>}
   
      </main> 
      </div>
  );
};

export default Signup;