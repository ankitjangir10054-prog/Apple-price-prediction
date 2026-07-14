function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}

        <div className="flex items-center gap-3">
          <img
            src="/apple.png"
            alt="Apple Logo"
            className="w-10 h-10 object-contain hover:rotate-12 transition duration-500"
          />

          <h1 className="text-3xl font-extrabold text-gray-800">
            <span className="text-green-600">iPrice</span> AI
          </h1>
        </div>

        {/* Menu */}

        <ul className="hidden md:flex gap-10 text-gray-700 font-semibold">

          <li className="hover:text-green-600 cursor-pointer transition">
            Home
          </li>

          <li className="hover:text-green-600 cursor-pointer transition">
            Features
          </li>

          <li className="hover:text-green-600 cursor-pointer transition">
            Predict
          </li>

          <li className="hover:text-green-600 cursor-pointer transition">
            About
          </li>

          <li className="hover:text-green-600 cursor-pointer transition">
            Contact
          </li>

        </ul>

        {/* Button */}

        <button
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300"
        >
          Start Prediction
        </button>

      </div>
    </nav>
  );
}

export default Navbar;