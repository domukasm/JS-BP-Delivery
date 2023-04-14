import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "../styles/create.css";

function FundForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");
  const [amount, setAmount] = useState(0);
  const [containerSize, setContainerSize] = useState("");
  const [isFlammable, setIsFlammable] = useState("");
  const [isShortTerm, setIsShortTerm] = useState("");

  const handleGoHome = () => {
    window.location.href = "/";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = uuidv4();

    // Create an object with the form data and UUID
    const fund = { id, title, description, country, amount, containerSize, isFlammable, isShortTerm };

    // Make a POST request to store the fund in your JSON file
    axios
      .post("http://localhost:3003/create", fund)
      .then((response) => {
        console.log(response.data);
        setTitle("");
        setDescription("");
        setCountry("");
        setAmount(0);
        setContainerSize("");
        setIsFlammable("");
        setIsShortTerm("");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title for package:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Short Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="amount">Weight in KG's:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(event) => setAmount(Number(event.target.value))}
          />
        </div>
        <div>
          <label htmlFor="container-size">Container Size:</label>
          <select id="container-size" value={containerSize} onChange={(event) => setContainerSize(event.target.value)}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <div>
          <label htmlFor="is-flammable">Is it Flammable?:</label>
          <select id="is-flammable" value={isFlammable} onChange={(event) => setIsFlammable(event.target.value)}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="is-short-term">Is it Short-term?:</label>
          <select id="is-short-term" value={isShortTerm} onChange={(event) => setIsShortTerm(event.target.value)}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button type="submit">Create Fund</button>
      </form>
      <div className="center-button">
        <button onClick={handleGoHome}>Go back to Home</button>
      </div>
    </div>
  );
}

export default FundForm