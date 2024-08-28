import React from "react";
import AText from "./subcomponents/about/AText";
import AImg from "./subcomponents/about/AImg";

import photo from "../assets/img/img2.webp";

const About = () => {
  function yearsPassedSince() {
    // Parse the target date string into a Date object
    const targetDateObj = new Date("08/08/2004");
    // Get the current date
    const currentDate = new Date();
    // Calculate the time difference in milliseconds
    const timeDiff = currentDate - targetDateObj;
    // Calculate the number of milliseconds in a year
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
    // Calculate the number of years passed
    const yearsPassed = timeDiff / millisecondsInYear;
    // Round down to the nearest whole number
    const roundedYears = Math.floor(yearsPassed);
    return roundedYears;
  }

  return (
    <section
      id="about"
      className="py-12 p-8 flex flex-col lg:flex-row justify-center items-center gap-8"
    >
      <AImg image={photo} alt="Daniel Kowalski Photo" />
      <AText
        title="About Me"
        header="From Intership in Kyndryl to Front-End Developer"
        text={`Hi! I'm a ${yearsPassedSince()}-year-old front-end developer who began exploring web
development during a 2022 internship at Kyndryl. I'm passionate about web development and I would love to take a deep dive into this world and explore other technolgoies and possibilities. In my final year of
school, I teamed up with friends to tackle a cybersecurity project. Now, I'm
excited to start a new chapter at Politechnika Śląska. In my free time, I
enjoy collecting LEGO and traveling around Europe, with hopes to explore
the world in the future.`}
      />
    </section>
  );
};

export default About;
