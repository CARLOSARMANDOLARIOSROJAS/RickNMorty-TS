import { CharacterCard } from "./components/CharacterCard";
import { Navbar } from "./components/Navbar";
import { useFavorites } from "./hooks/useFavorites";
import { useFetchCharacters } from "./hooks/useFetchCharacters";
import { useSearchCharacter } from "./hooks/useSearchCharacter";

function App() {
  const { characters, loadNext, loadPrev, loading, info } =
    useFetchCharacters();
  const { query, setQuery, filteredCharacters } =
    useSearchCharacter(characters);
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <>
      <Navbar query={query} setQuery={setQuery} />
      <ul className="grid grid-cols-3 gap-2 mb-2">
        {filteredCharacters.map((character) => (
          <CharacterCard 
          character={character} 
          key={character.id}
          isFavorite={favorites.some((c) => c.id === character.id)}
          toggleFavorite={() => toggleFavorite(character)}
          />
        ))}
      </ul>

      <div className="flex justify-center gap-5 p-4">
        <button
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={loadPrev}
          disabled={!info.prev || loading}
        >
          {loading ? "Loading..." : "Prev"}
        </button>
        <button
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={loadNext}
          disabled={!info.next || loading}
        >
          {loading ? "Loading..." : "Next"}
        </button>
      </div>
    </>
  );
}

export default App;
