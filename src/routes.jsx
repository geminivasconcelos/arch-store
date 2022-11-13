import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Categories from "./pages/Categories";

import Home from "./pages/Home";


export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/products/category/:name" element={<Categories />} />
    

            </Routes>
        </BrowserRouter>
    );
};