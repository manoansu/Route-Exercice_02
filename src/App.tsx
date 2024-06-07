import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home/Index";
import HomeBody from "./Routes/Home/HomeBody";
import Promotion from "./Routes/Home/Promotion";
import Subscription from "./Routes/Home/Subscription";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeBody />} />
          <Route path="promotion" element={<Promotion />} />
          </Route>
          <Route path="sub" element={<Subscription />} />
      </Routes>
    </BrowserRouter>
  );
}
