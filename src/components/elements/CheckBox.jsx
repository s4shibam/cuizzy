function CheckBox({ className, text, ...rest }) {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={`${className}`}>
      <input
        className='mr-4 h-5 w-5 cursor-pointer '
        type='checkbox'
        {...rest}
      />

      <span className='w-full select-none text-black dark:text-white'>
        {text}
      </span>
    </label>
  );
}

export default CheckBox;
