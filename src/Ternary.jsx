import React, { useState } from "react";

const Ternary = () => {
  const [age, setAge] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setAge(value === "" ? "" : parseInt(value, 10));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Check Voting Eligibility</h1>
      <input type="number" value={age} onChange={handleChange} placeholder="Enter age"/>
      <p>
        {age === "" ? "Please enter your age.": age >= 18? "✅ Eligible to vote.": "❌ Not eligible to vote."}
      </p>
    </div>
  );
};

export default Ternary;
