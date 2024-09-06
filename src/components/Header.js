import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        <img src="/logo192.png" alt="Company Logo" className="h-2 inline-block mr-2 w-25 h-20" />
      </div>

      {/* User Avatar */}
      <div className="flex items-center">
        <span className="mr-4 text-gray-700 font-medium"></span>
        <img 
          src="https://via.placeholder.com/40" 
          alt="User Avatar" 
          className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
        />
      </div>
    </header>
  );
};

export default Header;
