import { useSelector } from "react-redux";
import { Card } from "../assets/component/Card";

export default function Main() {
  const pokemonData = useSelector((state) => state.pokemon);

  // 로딩 중인 경우
  if (pokemonData.loading) {
    return (
      <div className="flex items-center justify-center">
        포켓몬 데이터를 불러오는 중입니다...
      </div>
    );
  }

  // 데이터가 없을 경우
  if (!pokemonData.data || pokemonData.data.length === 0) {
    return <div>포켓몬 데이터가 없습니다.</div>;
  }

  // 데이터가 있을 경우
  return (
    <>
      {pokemonData.data.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </>
  );
}
