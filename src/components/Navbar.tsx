
interface NavbarProps {
  query: string;
  setQuery: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ setQuery}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-around items-center mb-5 p-2 bg-black">
      <h2 className="font-bold text-center mb-5 sm:mb-0 text-4xl text-white">
        Rick and Morty Characters
      </h2>
      <input
        className="border border-gray-300 text-gray-700 p-2 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out shadow-sm hover:shadow-md w-full sm:w-auto"
        type="text"
        placeholder="Search character"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};
