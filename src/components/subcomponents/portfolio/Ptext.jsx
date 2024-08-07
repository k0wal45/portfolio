import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Ptext = ({ title, text, technologies, codelink, demolink }) => {
  return (
    <div className="max-w-md flex flex-col justify-center items-start text-start gap-4 p-4">
      <p className="text-xl font-montserrat-black">{title}</p>
      <p className="text-lg font-montserrat text-neutral-300">{text}</p>
      <ul className="flex  flex-wrap justify-center items-center gap-8">
        {technologies.map((tech) => (
          <li className="p-4 rounded-lg bg-neutral-900 shadow-md font-montserrat-bold">
            {tech}
          </li>
        ))}
      </ul>
      <ul className="flex justify-center items-center gap-8 mt-4">
        <li className="font-montserrat-bold">
          <a
            href={codelink}
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center gap-2"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" /> Code
          </a>
        </li>
        <li className="font-montserrat-bold">
          <a
            href={demolink}
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center gap-2"
          >
            <FontAwesomeIcon icon={faLink} size="2x" /> Site Demo
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Ptext;
