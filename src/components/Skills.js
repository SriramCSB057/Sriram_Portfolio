import React from "react";

export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Java",
    "Spring Boot",
    "MySQL",
    "Python (ML)",
    "Git/GitHub",
  ];

  return (
    <div className="text-center">
      <h2 className="fw-bold fs-2 mb-3">Skills</h2>

      <div className="row justify-content-center">
        {skills.map((skill, index) => (
         <div className="col-4 col-md-3 col-lg-2 bg-secondary text-white p-3 m-2 rounded float">
  {skill}
</div>
        ))}
      </div>
    </div>
  );
}
