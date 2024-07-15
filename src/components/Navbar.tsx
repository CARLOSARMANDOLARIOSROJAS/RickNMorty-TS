import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Character } from "../models";

interface NavbarProps {
  query: string;
  setQuery: (query: string) => void;
  favoritesCount: Character[];
}

export const Navbar: React.FC<NavbarProps> = ({ setQuery, favoritesCount }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-around items-center mb-5 p-2 bg-black">
      <h2 className="font-bold text-center mb-5 sm:mb-0 text-4xl text-white">
        Rick and Morty Characters
      </h2>
      <div className="flex items-center space-x-7">
        <input
          className="border border-gray-300 text-gray-700 p-2 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out shadow-sm hover:shadow-md w-full sm:w-auto"
          type="text"
          placeholder="Search character"
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="relative flex items-center gap-2">
          <FontAwesomeIcon icon={faHeart} className="text-red-500 text-3xl" />
          <span className="absolute top-0 right-0 text-xs rounded-full w-5 h-6 flex items-center text-white">
            {
              favoritesCount.length 
            }
          </span>
        </div>
      </div>
    </div>
  );
};
