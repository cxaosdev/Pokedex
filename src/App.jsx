import { useEffect } from "react";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchMultiplePokemonById } from "./RTK/thunk";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import Favorite from "./pages/Favorite";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.pokemon);
  console.log(pokemonData);
  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, []);

  return (
    <>
      <div className="bg-black">
        <h1 className="text-[50px] text-center text-white mb-[10px]">
          포켓몬 도감
        </h1>
        <nav className="flex gap-[20px] justify-center text-yellow-400 text-[25px]">
          <Link to={"/"}>메인</Link>
          <Link to={"/detail/1"}>상세정보</Link>
          <Link to={"/search"}>검색</Link>
          <Link to={"/favorite"}>찜목록</Link>
        </nav>
      </div>
      <main className="flex justify-center flex-wrap gap-[20px] pt-[20px]">
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
