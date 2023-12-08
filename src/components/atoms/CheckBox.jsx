function CheckBox({ className, text, ...rest }) {
  return (
    <label className={`${className}`}>
      <input className="mr-4 h-5 w-5 cursor-pointer accent-primary" type="checkbox" {...rest} />

      <span className="w-full select-none text-black dark:text-white">{text}</span>
    </label>
  );
}

export default CheckBox;
