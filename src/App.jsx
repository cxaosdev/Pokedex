import { lazy, Suspense, useEffect } from "react";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchMultiplePokemonById } from "./RTK/thunk";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

const Main = lazy(() => import("./pages/Main"));
const Detail = lazy(() => import("./pages/Detail"));
const Search = lazy(() => import("./pages/Search"));
const Favorite = lazy(() => import("./pages/Favorite"));

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
      <main className="flex justify-center flex-wrap gap-[20px] pt-[20px]">
        <Suspense fallback={<div>로딩 중...</div>}>
          <Routes>
            <Route path={"/"} element={<Main />} />
            <Route path="/detail/:pokemonId" element={<Detail />} />
            <Route path={"/search"} element={<Search />} />
            <Route path={"/favorite"} element={<Favorite />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
