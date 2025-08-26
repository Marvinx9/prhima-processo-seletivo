import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./page/Home";
import { Servicos } from "./page/Servicos";
import { Carreiras } from "./page/Carreiras";
import { Convencao } from "./page/Convencao";
import { Portal } from "./page/Portal";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/carreiras" element={<Carreiras />} />
        <Route path="/convencao" element={<Convencao />} />
        <Route path="/portal" element={<Portal />} />
      </Route>
    </Routes>
  );
}
