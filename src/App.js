import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./pages/Home";
import Host from "./pages/Host"
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/host" element={<Host />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
