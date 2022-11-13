import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    Outlet
} from "react-router-dom";
import Categories from "./pages/Categories/Categories";

import Home from "./pages/Home";


export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/products/category/:name" element={<Home />} />
            

            </Routes>
        </BrowserRouter>
    );
};