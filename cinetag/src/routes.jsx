import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Favorites from "./pages/favorites";
import Base from "./pages/base";
import Player from "./pages/player";
import NotFound from "./pages/notFound";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<Home />}></Route>
          <Route path="favorites" element={<Favorites />}></Route>
          <Route path=":id" element={<Player />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
