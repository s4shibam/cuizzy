function Form({ children, className, ...rest }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <form className={`form grid h-3/4 grid-cols-1 ${className}`} {...rest}>
      {children}
    </form>
  );
}

export default Form;
