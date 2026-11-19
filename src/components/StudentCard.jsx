import React from "react";
import "./StudentCard.css";

function StudentCard({ name, rollno, department, year, college }) {
  return (
    <div className="student-card">
      <div className="profile">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Student"
        />
      </div>

      <h2>{name}</h2>

      <div className="details">
        <p><b>Roll Number:</b> {rollno}</p>
        <p><b>Department:</b> {department}</p>
        <p><b>Year:</b> {year}</p>
        <p><b>College:</b> {college}</p>
      </div>

      <button>View Student</button>
    </div>
  );
}

export default StudentCard;