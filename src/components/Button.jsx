function Button({ type, text, style, pending, children }) {
  return (
    <button
      className={`btn ${style}`}
      type={type ? type : "button"}
      disabled={pending}
    >
      {pending ? children : text}
    </button>
  );
}

export default Button;
