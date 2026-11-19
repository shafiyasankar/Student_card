import React from "react";
import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import "./App.css";

function App() {
  const students = [
    {
      name: "Shafiya S",
      rollno: "311824201048",
      department: "AI & DS",
      year: "2nd Year",
      college: "ABC Engineering College"
    },
    {
      name: "Subashini",
      rollno: "311824201049",
      department: "AI & DS",
      year: "2nd Year",
      college: "ABC Engineering College"
    },
    {
      name: "Sania",
      rollno: "311824201050",
      department: "AI & DS",
      year: "2nd Year",
      college: "ABC Engineering College"
    }
  ];

  return (
    <div>
      <Header />

      <div className="container">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            rollno={student.rollno}
            department={student.department}
            year={student.year}
            college={student.college}
          />
        ))}
      </div>
    </div>
  );
}

export default App;