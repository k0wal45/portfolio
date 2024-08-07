import React from "react";

const AText = ({ title, header, text }) => {
  return (
    <div className="flex flex-col items-start justify-center gap-4 max-w-[35rem]">
      <h2 className="font-bold text-xl font-montserrat-black text-primary bg-primary bg-opacity-30 p-4 w-min whitespace-nowrap">
        {title}
      </h2>

      <h3 className="font-montserrat-black text-3xl">{header}</h3>

      <p className="text-lg font-montserrat text-neutral-300 text-justify">
        {text}
      </p>
    </div>
  );
};

export default AText;
