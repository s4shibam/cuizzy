function NavButton({ text }) {
  return (
    <button
      type='button'
      className='nav-menu border-0 py-1 font-medium uppercase tracking-wider md:text-xl'
    >
      {text}
    </button>
  );
}

export default NavButton;
