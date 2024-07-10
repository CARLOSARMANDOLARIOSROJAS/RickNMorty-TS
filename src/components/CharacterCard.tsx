import { Character } from "../models";

interface CharacterCardProps {
  character: Character;
  toggleFavorite: () => void;
  isFavorite: boolean;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  toggleFavorite,
  isFavorite,
}) => {
  return (
    <div className="flex items-center justify-center">
      <div className="border border-gray-300 p-2 rounded-lg max-w-max shadow-lg">
        <div className="flex-shrink-0">
          <img
            className="h-60 w-60 rounded-full object-cover"
            src={character.image}
            alt={character.name}
          />
          <div className="mt-4 text-center">
            <p className="text-xl font-bold truncate">{character.name}</p>
            <p
              className={
                character.status === "Alive"
                  ? "text-green-400 font-black"
                  : character.status === "Dead"
                  ? "text-red-500 font-black"
                  : "text-yellow-500 font-black"
              }
            >
              {character.status}
            </p>
            <button
              className={`mt-2 px-4 py-2 text-sm font-medium rounded-md focus:outline-none ${
                isFavorite
                  ? "bg-red-500 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
              onClick={toggleFavorite}
            >
              {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
