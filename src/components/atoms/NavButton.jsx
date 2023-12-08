function NavButton({ text }) {
  return (
    <button
      className="nav-menu border-0 py-1 font-medium uppercase tracking-wider md:text-xl"
      type="button"
    >
      {text}
    </button>
  );
}

export default NavButton;
