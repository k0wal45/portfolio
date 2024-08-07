import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BubleImg from "./subcomponents/BubleImg";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import TechStack from "./TechStack";

const Hero = () => {
  return (
    <header
      id="header"
      className=" mx-auto min-h-screen flex flex-col justify-center items-center w-screen gap-8 p-8 mt-24 lg:mt-0 bg-boxes text-white border-b-4"
    >
      <div className=" flex flex-col-reverse lg:flex-row justify-center items-center gap-8 lg:gap-0">
        <div className="flex flex-col gap-8 max-w-xl">
          <h1 className="text-6xl font-montserrat-bold">
            Front-End React
            <br />
            Developer
          </h1>
          <p className="font-montserrat text-lg">
            Hi I'm Daniel Kowalski and I'm React Front-End Developer located in
            Katowice, Poland{" "}
          </p>
          <div className="flex mx-auto lg:mx-0">
            <a
              href="https://github.com/k0wal45"
              target="_blank"
              rel="noreferrer"
              className="grid place-items-center p-4 rounded-l-xl bg-white"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2xl"
                className="text-[#2a2a2a] hover:text-blue-600 duration-200 "
              />
            </a>
            <div className="border-[1px] border-[#2a2a2a]"></div>
            <a
              href="https://www.linkedin.com/in/daniel-kowalski-17566a278/"
              target="_blank"
              rel="noreferrer"
              className="grid place-items-center p-4 rounded-r-xl bg-white"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2xl"
                className="text-[#2a2a2a] hover:text-blue-600 duration-200"
              />
            </a>
          </div>
        </div>
        <BubleImg />
      </div>
      <TechStack />
    </header>
  );
};

export default Hero;
