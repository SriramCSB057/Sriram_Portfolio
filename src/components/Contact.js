import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="text-center">
      <h2 className="fw-bold fs-2 mb-3">Contact Me</h2>

      <div className="d-flex justify-content-center gap-4 mt-3">

        <a href="https://github.com/SriramCSB057" target="_blank" rel="noreferrer">
          <Github size={35} color="white" />
        </a>

        <a href="https://linkedin.com/in/sriram-g-k-a96bb727b" target="_blank" rel="noreferrer">
          <Linkedin size={35} color="white" />
        </a>

        <a href="https://gmail.com">
          <Mail size={35} color="white" />
        </a>

      </div>
    </div>
  );
}
