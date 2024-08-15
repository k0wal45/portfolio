const AImg = ({ image, alt }) => {
  return (
    <img
      src={image}
      alt={alt}
      className="rounded-xl flex-1 w-full aspect-square lg:aspect-auto lg:max-w-[35rem] lg:max-h-[25rem] object-cover"
    />
  );
};

export default AImg;
