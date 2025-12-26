// import {Link} from 'react-router-dom';
export default function Projects() {
  const projects = [
    {
      title: "Accessories Ecommerce Website",
      desc: "Full-stack ecommerce built using React + Spring Boot + MySQL.",
      tech: "React, Spring Boot, MySQL",
    },
    // {
    //   title: "Student Management System",
    //   desc: "CRUD operations with filters, pagination & search.",
    //   tech: "Java, Spring Boot, MySQL",
    // },
    // {
    //   title: "Portfolio Website",
    //   desc: "Responsive portfolio using React & Bootstrap.",
    //   tech: "React, Bootstrap",
    // },
  ];

  return (
    <div>
      <h2 className="fw-bold fs-2 text-center mb-4">Projects</h2>

      <div className="row justify-content-center">

        {projects.map((p, i) => (
          <div
            key={i}
            className="col-md-4 col-12"
            data-aos="fade-up"
          >
            <div className="bg-secondary p-4 rounded shadow m-2">
              <h3 className="fw-bold">{p.title}</h3>
              <p className="mt-2">{p.desc}</p>
              <p className="text-warning">Tech Used: {p.tech}</p>

              <button className="btn btn-primary mt-2">  <a
    href="https://stylishzayshop-057.vercel.app"
    target="_blank"
    rel="noreferrer"
    className="text-white text-decoration-none"
  >
    View
  </a></button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
