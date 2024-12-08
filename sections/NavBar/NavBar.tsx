import Link from "next/link";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <ul className="flex justify-around py-4">
        <li>
          <a href="#about" className="text-lg font-semibold hover:text-blue-500">
            About
          </a>
        </li>
        <li>
          <a href="#experiences" className="text-lg font-semibold hover:text-blue-500">
            Experiences
          </a>
        </li>
        <li>
          <a href="#projects" className="text-lg font-semibold hover:text-blue-500">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="text-lg font-semibold hover:text-blue-500">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
