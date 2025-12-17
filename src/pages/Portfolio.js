import React, { useEffect } from "react";
import AOS from "aos";
import MyNavbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-dark text-white min-h-screen">

      <MyNavbar />

      <div className="container pt-5 mt-5">
        <section id="home" data-aos="fade-up">
          <Header />
        </section>

        <section id="about" className="mt-5" data-aos="fade-right">
          <About />
        </section>

        <section id="skills" className="mt-5" data-aos="fade-left">
          <Skills />
        </section>

        <section id="projects" className="mt-5" data-aos="zoom-in">
          <Projects />
        </section>

        <section id="contact" className="mt-5 mb-5" data-aos="fade-up">
          <Contact />
        </section>
      </div>

      <Footer />

    </div>
  );
}
