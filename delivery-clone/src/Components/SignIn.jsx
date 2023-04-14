import React, { useState } from "react";
import axios from "axios";
import "../styles/signin.css";

const SignIn = () => {
  const handleGoHome = () => {
    window.location.href = "/";
  };
  const countries = [
    "United States",
    "Canada",
    "Mexico",
    "Brazil",
    "Argentina",
    "United Kingdom",
    "France",
    "Germany",
    "Spain",
    "Italy",
    "Lithuania"
  ];

  const SignUpForm = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");

    const handleNameChange = (event) => {
      setName(event.target.value);
    };

    const handleLastNameChange = (event) => {
      setLastName(event.target.value);
    };

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };

    const handleCountryChange = (event) => {
      setCountry(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      
      // Make a POST request to the server-side endpoint to create a new user
      axios.post("http://localhost:3003/register", {
        name: name,
        lastName: lastName,
        email: email,
        country: country
      })
      .then(response => {
        console.log("Registration successful");
      })
      .catch(error => {
        console.error(error);
      });
    };

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Country:
          <select value={country} onChange={handleCountryChange}>
            <option value="">-- Select a country --</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </label>
        <br />
        <input type="submit" value="Register" />
      </form>
    );
  };
  const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

    const handleLogin = () => {
      // Handle login here
    };

    return (
      <form>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button onClick={handleLogin}>Login</button>
      </form>
    );
  };

  return (
    <>
      <SignUpForm />
      <SignInForm />
      <button className="center-button" onClick={handleGoHome}>Go back to Home</button>
    </>
  );
};

export default SignIn;
