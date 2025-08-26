import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./page/Home";
import { Servicos } from "./page/Servicos";
import { Carreiras } from "./page/Carreiras";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/carreiras" element={<Carreiras />} />
      </Route>
    </Routes>
  );
}
