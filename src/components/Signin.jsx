import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Signin = () => {
  const [loginDetails] = React.useState(
    JSON.parse(localStorage.getItem("formDetails") || "[]")
  );

  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState();
  const [email, setEmail] = React.useState("");
  const [wrongEmail, setWrongEmail] = React.useState(false);
  const [wrongDetails, setWrongDetails] = React.useState(false);
  const [noAccount, setNoAccount] = React.useState(false);
  const [forgotPassword, setforgotPassword] = React.useState(false);
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    setWrongEmail(false);
    setWrongDetails(false);
    e.preventDefault();

    loginDetails.length
      ? loginDetails.forEach((value) => {
          if (
            value.name == name &&
            value.password == password &&
            value.email == email
          ) {
            Navigate("/MainComponent", { state: { session: true } });
          } else if (
            value.name == name &&
            value.password == password &&
            value.email != email
          ) {
            setWrongEmail(true);
          } else {
            setWrongDetails(true);
          }
        })
      : setNoAccount(true);
  };

  return (
    <main className="Signin">
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
          <button className="Signup"
            onClick={() => {
              Navigate("/Signup");
            }}
          >
            Sign Up
          </button>
        </div>
      ) : (
        <div>
          <header
            style={{
              display: "flex",
              justifyContent: "center",
              font: "2rem sans-serif",
              py: "16px",
            }}
          >
            Login
          </header>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                label="Name"
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                label="Password"
                name="passowrd"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <input
                label="Email"
                name="email"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {/* Add more form fields here */}
              <button type="submit" /* variant="contained" */ color="primary">
                Submit
              </button>
            </div>
          </form>
          {wrongEmail && <div>The email is incorrect</div>}
          {wrongDetails && <div>the name or the number is incorrect</div>}
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
            <small>
              <Link to="/Signup">Signup</Link>
            </small>
          </div>
        </div>
      )}
    </main>
  );
};
export default Signin;
