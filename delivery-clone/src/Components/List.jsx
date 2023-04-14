import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/list.css";
import Nav from "./Nav";

function FundList() {
  const [funds, setFunds] = useState([]);

  useEffect(() => {
    // Make a GET request to retrieve all the funds from the server
    axios
      .get("http://localhost:3003/create")
      .then((response) => {
        setFunds(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Nav />
      <div className="container-list">
        <div className="list">
          <div className="fundheader">Containers List</div>
          <ul>
            {funds.map((fund) => (
              <li key={fund.id}>
                <img
                  className="fundimg"
                  src={process.env.PUBLIC_URL + "/fundImage.png"}
                  alt={fund.title}
                />
                <div className="details">
                  <h2>{fund.title}</h2>
                  <p>{fund.description}</p>
                  <p>Country: {fund.country}</p>
                  <p>Amount: {fund.amount}</p>
                  <p>Flamable: {fund.isFlamable ? 'Yes' : 'No'}</p>
                  <p>Short-term: {fund.isShortTerm ? 'Yes' : 'No'}</p>
                <div
                  className="progress-bar"
                  style={{ width: fund.amount / 10 + "%" }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}

export default FundList;
