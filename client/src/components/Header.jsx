import { FaSearch } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap ">
            <span className="text-slate-500">MERN</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <li className="hidden sm:inline text-slate-700 hover:underline">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hidden sm:inline text-slate-700 hover:underline">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="hidden sm:inline text-slate-700 hover:underline">
            {currentUser ? (
              <img
                src={currentUser.user.avatar}
                className="rounded-full w-7 h-7 object-cover"
                alt="profile"
              />
            ) : (
              <NavLink to="/sign-in">Sign In</NavLink>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
