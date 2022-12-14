import {BrowserRouter, Route, Routes} from "react-router-dom";
import Menu2 from "./component/Menu2";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Menu3 from "./component/Menu3";
import Menu4 from "./component/Menu4";
import Menu5 from "./component/Menu5";
import MenuInfo from "./pages/MenuInfo";
import Host from "./pages/Host";
import Layout from "./pages/Layout";

function App() {
  return (
    <div className="root-wrap">
        <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
            <Route path="/menu2" element={<Menu2 />} />
            <Route path="/menu3" element={<Menu3 />} />
            <Route path="/menu4" element={<Menu4 />} />
            <Route path="/menu5" element={<Menu5 />} />
            </Route>
          <Route path="/*" element={<NotFound />} />
          <Route path="/host" element={<Host />}/>
          <Route path="/menuinfo" element={<MenuInfo />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
