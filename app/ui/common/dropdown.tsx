
const Dropdown = ({isOpen} : {isOpen: boolean}) => {

  return (
    <div className="relative">
      {/* Trigger */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Dropdown
      </button>

      {/* Dropdown Menu */}
      <div 
        className={`absolute left-0 mt-2 py-2 w-48 bg-white rounded shadow-xl ${!isOpen && 'hidden'}`}
       
      >
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Link 1</a>
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Link 2</a>
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Link 3</a>
      </div>
    </div>
  );
};

export default Dropdown;
