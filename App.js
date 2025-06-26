import React from "react";
import StudentCard from "./StudentCard";

function App() {
  return (
    <div>
      <h1>Student Profiles</h1>
      <StudentCard name="Anjali" dept="CSE" />
      <StudentCard name="Ravi" dept="ECE" />
    </div>
  );
}

export default App;
