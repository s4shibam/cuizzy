function Form({ children, className, ...rest }) {
  return (
    <form className={`grid h-3/4 grid-cols-1 ${className}`} {...rest}>
      {children}
    </form>
  );
}

export default Form;
