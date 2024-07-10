import { Character } from "../models";

export const CharacterCard = ({ character }: { character: Character }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="border border-gray-300 p-2 rounded-lg max-w-max shadow-lg">
        <div className="flex-shrink-0">
          <img className="h-60 w-60 rounded-full object-cover" src={character.image} alt={character.name} />
          <div className="mt-4 text-center">
            <p className="text-xl font-bold truncate">{character.name}</p>
            <p className={
              character.status === "Alive"
                ? "text-green-400 font-black"
                : character.status === "Dead"
                ? "text-red-500 font-black"
                : "text-yellow-500 font-black" 
            }>{character.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
