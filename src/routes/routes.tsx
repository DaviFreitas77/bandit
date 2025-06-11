import { Routes, Route } from "react-router-dom";
import InfoProduct from "../pages/infoProduct";
import App from "../App";
import Glasses from "../pages/glasses";
export default function AppRoute() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/produto/:id" element={<InfoProduct />} />
            <Route path="/glasses" element={<Glasses />} />
        </Routes>
    );
}
