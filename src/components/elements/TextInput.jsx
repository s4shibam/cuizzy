function TextInput({ icon, ...rest }) {
  return (
    <div className='text-input flex w-full items-center rounded-md border border-dullWhite bg-white p-2 outline-none dark:border-gray-600 dark:bg-darkText/60 h-14'>
      <input
        className='ml-1 w-full rounded-lg border-none bg-transparent font-medium tracking-wide text-darkText outline-none dark:text-lightText lg:text-xl'
        {...rest}
      />
      <span className='material-icons-outlined mx-1 flex cursor-pointer items-center justify-center text-darkText dark:text-lightText md:text-3xl'>
        {icon}
      </span>
    </div>
  );
}

export default TextInput;
