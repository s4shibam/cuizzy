import { useGAEventTracker } from '../../hooks';

function NavButton({ text }) {
  const gaEventTracker = useGAEventTracker('Nav Button');

  return (
    <button
      className="nav-menu border-0 py-1 font-medium uppercase tracking-wider md:text-xl"
      type="button"
      onClick={() => gaEventTracker({ label: text })}
    >
      {text}
    </button>
  );
}

export default NavButton;
