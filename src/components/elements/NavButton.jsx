function NavButton({ text }) {
  return (
    <button
      type='button'
      className='border-button border-0 py-1 font-medium uppercase tracking-wider md:text-xl'
    >
      {text}
    </button>
  );
}

export default NavButton;
