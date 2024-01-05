import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Signin = () => {
  const [loginDetails] = React.useState(
    JSON.parse(localStorage.getItem("formDetails") || "[]")
  );

  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState();
 
  const [wrongDetails, setWrongDetails] = React.useState(false);
  const [noAccount, setNoAccount] = React.useState(false);
  const [forgotPassword, setforgotPassword] = React.useState(false);
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
   
    setWrongDetails(false);
    e.preventDefault();

    loginDetails.length
      ? loginDetails.forEach((value) => {
          if (
            value.name == name &&
            value.password == password 
           
          ) {
            Navigate("/Dashboard", { state: { session: true } });
          } else if (
            value.name == name &&
            !value.password == password 
            
          ) {setWrongDetails(true);
            
          }
        })
      : setNoAccount(true);
  };

  return (
    <main className="Login">
      {forgotPassword ? (
        <div className="forgotPassword">
          <p>
            Don’t worry, Enter your email below and we will<br/> send you a link to
            change password.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input placeholder="Your Email" type="email" />
            <button type="submit"> Submit</button>
          </form>
          <button className="signupBtn"
            onClick={() => {
              Navigate("/Signup");
            }}
          >
            Sign Up
          </button>
        </div>
      ) : (
        <div className="Signin">
          <header
          >
            Helpdesk System
          </header>
          <form onSubmit={handleSubmit}>
            
              <input
                label="Name"
                name="name"
                placeholder="Username"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
              placeholder="Password"
                label="Password"
                name="passowrd"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              
              
              {/* Add more form fields here */}
              <button type="submit">
                Submit
              </button>
            
          </form>
         
          {wrongDetails && <div>the details are incorrect</div>}
          {noAccount && (
            <div /* severity="info" */>
              No account found with that information{" "}
            </div>
          )}

          <div className="links">
            <a
              onClick={() => {
                setforgotPassword(true);
              }}
            >
              Forgot Password
            </a>
            
              <Link to="/Signup">Signup</Link>
           
          </div>
        </div>
      )}
    </main>
  );
};
export default Signin;
