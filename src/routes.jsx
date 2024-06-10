import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageBase from "./Pages/PageBase/Index.jsx";
import Home from "./Pages/Home/index.jsx";
import Sobre from "./Pages/Sobre/Sobre.jsx";
import Projetos from "./Pages/Projetos/Projetos.jsx";
import Contato from "./Pages/Contato/Contato.jsx";
import Page404 from "./Pages/Page404/Page404.jsx";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageBase />}>
          <Route index element={<Home />}></Route>
          <Route path="Sobre" element={<Sobre />}></Route>
          <Route path="Projetos" element={<Projetos />}></Route>
          <Route path="Contato" element={<Contato />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
