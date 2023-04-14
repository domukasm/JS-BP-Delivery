import React from "react";
import Create from "./Create";

function SmallContainer({ funds, setFunds, newFund, isNew }) {
  const handleCreateFund = () => {
    if (isNew) {
      setFunds([...funds, newFund]);
    }
  };

  return (
    <div className="container small-container">
      <h2>Small Container</h2>
      <Create />
      <Create />
    </div>
  );
}

export default SmallContainer;