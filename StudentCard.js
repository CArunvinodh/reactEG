import React from "react";

function StudentCard(props) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h3>{props.name}</h3>
      <p>Department: {props.dept}</p>
    </div>
  );
}

export default StudentCard;
