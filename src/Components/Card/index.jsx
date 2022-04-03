const Card = ({ title, description, className, image, children }) => {
  return (
    <div className={`${className} bg-slate-100 shadow-md rounded`}>
      {image && <img src={image} alt="descrição da imagem" />}
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
    </div>
  );
};

export default Card;
