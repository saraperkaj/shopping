import { Route, Routes } from "react-router-dom";
import Index from "./Pages/Index";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Index />} />
        <Route path="/new" element={<New />} />
        <Route path="/products/:id" element={<Show />} />
        <Route path="/products/:id/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
