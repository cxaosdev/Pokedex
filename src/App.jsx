import { useEffect } from "react";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchMultiplePokemonById } from "./RTK/thunk";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import Favorite from "./pages/Favorite";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.pokemon);
  console.log(pokemonData);
  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, []);
  return (
    <>
      <div className=" bg-[#1F1F1F] pt-[20px] pb-[30px]">
        <div className="flex items-center justify-center gap-4">
          <img
            className="w-[40px] "
            src="/src/assets/pokeball.png"
            alt="Pokeball"
          />
          <h1 className="text-[50px] text-center text-white mb-[10px]">
            포켓몬 도감
          </h1>
          <img
            className="w-[40px]"
            src="/src/assets/pokeball.png"
            alt="Pokeball"
          />
        </div>
        <nav className="flex gap-[40px] justify-center text-yellow-400 text-[25px]">
          <Link to={"/"}>메인</Link>
          <Link to={"/favorite"}>찜목록</Link>
          <input
            onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)}
            placeholder="⌕"
            className="border-b-[1px] border-[yellow] px-2 w-[150px] bg-[#1F1F1F] text-yellow-400 placeholder:text-yellow-400"
          />
        </nav>
      </div>
      <main className="flex justify-center flex-wrap gap-[20px] pt-[20px] bg-gray-300">
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path="/detail/:pokemonId" element={<Detail />} />
          <Route path={"/search"} element={<Search />} />
          <Route path={"/favorite"} element={<Favorite />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
