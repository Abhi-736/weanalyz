import React from "react";
import DashboardImg from "../assets/Dashboard.svg";
import MyTicket from "../assets/MyTickets.svg";
import NewTicket from "../assets/NewTicket.svg";
import captcha from "../assets/captcha.png"

const Dashboard = () => {
  const [active, setActive] = React.useState("dashboard");

  return (
    <div className="Dashboard">
      <header>
        <h2>HelpDesk</h2>
        <ul className="nav-menu">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="75"
              height="27"
              viewBox="0 0 75 27"
              fill="none"
            >
              <path
                d="M37.5 25.3125V1.6875H65.625C66.8682 1.6875 68.0605 1.86529 68.9396 2.18176C69.8186 2.49822 70.3125 2.92745 70.3125 3.375V23.625C70.3125 24.0726 69.8186 24.5018 68.9396 24.8182C68.0605 25.1347 66.8682 25.3125 65.625 25.3125H37.5ZM65.625 27C68.1114 27 70.496 26.6444 72.2541 26.0115C74.0123 25.3785 75 24.5201 75 23.625V3.375C75 2.47989 74.0123 1.62145 72.2541 0.988515C70.496 0.355579 68.1114 0 65.625 0L9.375 0C6.8886 0 4.50403 0.355579 2.74587 0.988515C0.987721 1.62145 0 2.47989 0 3.375L0 23.625C0 24.5201 0.987721 25.3785 2.74587 26.0115C4.50403 26.6444 6.8886 27 9.375 27H65.625Z"
                fill="black"
              />
            </svg>
          </li>

          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="28"
              viewBox="0 0 24 28"
              fill="none"
            >
              <path
                d="M12 28C13.8921 28 15.427 26.4332 15.427 24.5H8.57305C8.57305 26.4332 10.1079 28 12 28ZM23.5387 19.8127C22.5037 18.6774 20.5671 16.9695 20.5671 11.375C20.5671 7.12578 17.6486 3.72422 13.7132 2.88969V1.75C13.7132 0.783672 12.9461 0 12 0C11.0539 0 10.2868 0.783672 10.2868 1.75V2.88969C6.35145 3.72422 3.43288 7.12578 3.43288 11.375C3.43288 16.9695 1.49628 18.6774 0.461286 19.8127C0.139858 20.1655 -0.00264152 20.5871 3.70385e-05 21C0.00592988 21.8969 0.695392 22.75 1.71967 22.75H22.2803C23.3046 22.75 23.9946 21.8969 24 21C24.0026 20.5871 23.8601 20.1649 23.5387 19.8127Z"
                fill="black"
              />
            </svg>
          </li>

          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="28"
              viewBox="0 0 24 28"
              fill="none"
            >
              <path
                d="M2 28C2 28 0 28 0 25.6667C0 23.3333 2 16.3333 12 16.3333C22 16.3333 24 23.3333 24 25.6667C24 28 22 28 22 28H2ZM12 14C13.5913 14 15.1174 13.2625 16.2426 11.9497C17.3679 10.637 18 8.85651 18 7C18 5.14348 17.3679 3.36301 16.2426 2.05025C15.1174 0.737498 13.5913 0 12 0C10.4087 0 8.88258 0.737498 7.75736 2.05025C6.63214 3.36301 6 5.14348 6 7C6 8.85651 6.63214 10.637 7.75736 11.9497C8.88258 13.2625 10.4087 14 12 14Z"
                fill="black"
              />
            </svg>
          </li>

          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="25"
              viewBox="0 0 27 25"
              fill="none"
            >
              <path
                d="M26.6263 13.6059L17.6259 24.5416C16.8223 25.518 15.4293 24.8345 15.4293 23.435V17.186H8.14326C7.43073 17.186 6.85748 16.4895 6.85748 15.6238V9.37483C6.85748 8.50909 7.43073 7.81259 8.14326 7.81259H15.4293V1.56362C15.4293 0.170627 16.8169 -0.519362 17.6259 0.457038L26.6263 11.3927C27.1246 12.0046 27.1246 12.994 26.6263 13.6059ZM10.2862 24.2161V21.6124C10.2862 21.1828 9.99692 20.8313 9.64334 20.8313H5.14311C4.19485 20.8313 3.42874 19.9004 3.42874 18.7483V6.25035C3.42874 5.09819 4.19485 4.16736 5.14311 4.16736H9.64334C9.99692 4.16736 10.2862 3.81585 10.2862 3.38624V0.782505C10.2862 0.352889 9.99692 0.00138444 9.64334 0.00138444H5.14311C2.30369 0.00138444 0 2.8004 0 6.25035V18.7483C0 22.1982 2.30369 24.9972 5.14311 24.9972H9.64334C9.99692 24.9972 10.2862 24.6457 10.2862 24.2161Z"
                fill="black"
              />
            </svg>
          </li>
        </ul>
      </header>

      <main className="DashboardContainer">
        <div className="sidebar">
          <ul className="sidebarMenu">
            <li
              onClick={() => {
                setActive("dashboard");
              }}
            >
              {" "}
              <svg
                className={active == "dashboard" ? "showSVG" : "hideSVG"}
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="20"
                viewBox="0 0 13 20"
                fill="none"
              >
                <path
                  d="M2.42611 0L0 2.33956L7.88057 9.95556L0 17.5716L2.42611 19.9111L12.75 9.95556L2.42611 0Z"
                  fill="black"
                />
              </svg>
              <img src={DashboardImg} alt="dashboard icon" />
              Dashboard
            </li>
            <li
              onClick={() => {
                setActive("newTicket");
              }}
            >
              <svg
                className={active == "newTicket" ? "showSVG" : "hideSVG"}
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="20"
                viewBox="0 0 13 20"
                fill="none"
              >
                <path
                  d="M2.42611 0L0 2.33956L7.88057 9.95556L0 17.5716L2.42611 19.9111L12.75 9.95556L2.42611 0Z"
                  fill="black"
                />
              </svg>
              <img src={NewTicket} />
              New Ticket
            </li>
            <li
              onClick={() => {
                setActive("myTicket");
              }}
            >
              <svg
                style={{ display: "hidden" }}
                className={active == "myTicket" ? "showSVG" : "hideSVG"}
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="20"
                viewBox="0 0 13 20"
                fill="none"
              >
                <path
                  d="M2.42611 0L0 2.33956L7.88057 9.95556L0 17.5716L2.42611 19.9111L12.75 9.95556L2.42611 0Z"
                  fill="black"
                />
              </svg>
              <img src={MyTicket} />
              My ticket
            </li>
          </ul>
        </div>
        <div className="mainContainer">
          {(active == "dashboard" && <DashboardP />) ||
            (active == "newTicket" && <NewTicketP />) ||
            (active == "myTicket" && <MyTicketP />)}
          <footer className="mcFooter"> Footer Area</footer>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

const DashboardP = () => {
  return (
    <div className="dashboardPage">
      <header>Dashboard</header>
      <main>
        <div className="box blue">
          <p>Total Tickets</p>
          <h4>12</h4>
        </div>

        <div className="box green">
          <p>Total Solved</p>
          <h4>8</h4>
        </div>

        <div className="box red">
          <p>
            Total
            <br /> Waiting <br /> Approved
          </p>
          <h4>2</h4>
        </div>

        <div className="box yellow">
          <p>Total Tickets</p>
          <h4>2</h4>
        </div>
      </main>
    </div>
  );
};

const NewTicketP = () => {
  return (
    <div className="newTicket">
      <header>Create New Ticket</header>
      <form>
        <div>
          <label htmlFor="TicketNo">Ticket No.</label>
          <input type="text" id="TicketNo" />
        </div>
        <div>
          <label htmlFor="Date">Date.</label>
          <input type="text" id="Date" />
        </div>
        <div>
          <label htmlFor="Name">Name.</label>
          <input type="text" id="Name" />
        </div>
        <div>
          <label htmlFor="Department">Department.</label>
          <input type="text" id="Department" />
        </div>
        <div className="inputWidthFull">
<label htmlFor="Subject">Subject.</label>
<input type="text" id="Subject"/>
        </div>
        <div className="verticle">
<label htmlFor="Category">Category.</label>
<input type="text" id="Category"/>
        </div>
        <div className="textbox verticle">
<label htmlFor="Description">Description.</label>
<input type="text" id="Description"/>
        </div>
        <div className="verticle">
<label htmlFor="Type">Type.</label>
<input type="text" id="Type"/>
        </div>
        <div className="verticle">
<label htmlFor="Priority">Priority.</label>
<input type="text" id="Priority"/>
        </div>
        <img src={captcha} alt="catcha"/>
        <button className="submit">Submit</button>

      </form>
    </div>
  );
};

const MyTicketP = () => {
  return <div>myTIcktsp</div>;
};
