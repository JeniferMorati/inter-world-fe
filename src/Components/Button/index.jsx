const Button = ({
  text, action, className,
}) => {
  return (
    <button
      className={`${className} bg-purple-800 text-white p-2 rounded`}
      onClick={action}
    >
      {text}
    </button>
  );
}

export default Button;