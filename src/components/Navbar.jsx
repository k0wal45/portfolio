import resume from "../assets/DanielKowalskiResume.pdf";

const Navbar = () => {
  return (
    <nav class="navbar bg-neutral-900 fixed p-4 shadow-lg z-50 max-w-screen">
      <div class="dropdown navbar-start inline-block lg:hidden">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 border-2 border-neutral bg-white rounded-box w-52 text-neutral-900"
        >
          <li className="text-xl font-montserrat-bold">
            <a href="#header">Home</a>
          </li>

          <li className="text-xl font-montserrat-bold">
            <a href="#about">About</a>
          </li>

          <li className="text-xl font-montserrat-bold">
            <a href="#projects">Projects</a>
          </li>

          <li className="text-xl font-montserrat-bold">
            <a href="#contact">Contact</a>
          </li>
          <li className="text-xl font-montserrat-bold bg-primary text-white rounded-xl">
            <a href={resume}>
              Get Resume
            </a>
          </li>
        </ul>
      </div>

      <a
        href="#header"
        class="font-montserrat-black text-xl navbar-end lg:navbar-start"
      >
        Daniel Kowalski
      </a>

      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li className="text-xl font-montserrat-bold">
            <a href="#header">Home</a>
          </li>

          <li className="text-xl font-montserrat-bold">
            <a href="#about">About</a>
          </li>

          <li className="text-xl font-montserrat-bold">
            <a href="#projects">Projects</a>
          </li>

          <li className="text-xl font-montserrat-bold">
            <a href="#contact">Contact</a>
          </li>

          <li className="text-xl font-montserrat-bold bg-primary">
            <a href={resume} download="/DanielKowalskiCV.pdf">
              Get Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
