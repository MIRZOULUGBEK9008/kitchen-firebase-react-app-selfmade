function Button({ type, text, style }) {
  return (
    <button className={`btn ${style}`} type={type ? type : "button"}>
      {text}
    </button>
  );
}

export default Button;
