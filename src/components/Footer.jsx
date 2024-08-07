import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer class="p-4 bg-neutral-900 shadow-inner text-neutral-200 w-full text-center">
      <p className="font-montserrat-bold text-lg">
        Copyright © {year} - All right reserved
      </p>
    </footer>
  );
};

export default Footer;
