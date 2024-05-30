// Navbar.js


const Navbar = () => {
  return (
    <nav className="bg-gray-800 ">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-white font-bold">Logo</span>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
