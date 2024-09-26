import { useParams } from "react-router-dom";
import { selectPokemonById } from "../RTK/selector";
import { useSelector } from "react-redux";
import FavoriteButton from "../component/Favorite";
import FlipCard from "../component/FlipCard";

export default function Detail() {
  const { pokemonId } = useParams();
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)));
  if (!pokemon) {
    return <p>로딩 중...</p>;
  }
  return (
    <div className="flex flex-col justify-center items-center border border-[gray] p-[30px] rounded-[10px] bg-gray-100">
      <div className="text-[28px] mb-[10px] ">
        {pokemon.name}
        <FavoriteButton pokemonId={Number(pokemonId)} />
      </div>
      <div className="text-center whitespace-pre-wrap ">
        {pokemon.description}
      </div>
      <FlipCard front={pokemon.front} back={pokemon.back} />
    </div>
  );
}
