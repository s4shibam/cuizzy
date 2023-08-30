function TextInput({ icon, ...rest }) {
  return (
    <div className="flex h-[52px] w-full items-center rounded-md border border-black/30 bg-white p-2 outline-none dark:border-white/30 dark:bg-black/50">
      <input
        className="ml-1 w-full rounded-lg border-none bg-transparent font-medium tracking-wide text-black outline-none dark:text-white lg:text-xl"
        {...rest}
      />
      <span className="material-symbols-outlined mx-1 flex cursor-pointer items-center justify-center text-black dark:text-white md:text-3xl">
        {icon}
      </span>
    </div>
  );
}

export default TextInput;
