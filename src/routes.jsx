import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    Outlet
} from "react-router-dom";
import Categories from "./pages/Categories/Categories";

import Home from "./pages/Home";


function ProtectedRoute(props) {
    const token = localStorage.getItem('token');
    return token ? <Outlet /> : <Navigate to={props.redirect} />;
}

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/products/categories/:name" element={<Home />} />
                {/* <Route path='/Categories/categories' element={<Categories />} /> */}

                {/* <Route element={<ProtectedRoute redirect="/Login" />}>
        <Route path='/History' element={<History />} />
        <Route path='/Calculation' element={<Calculation />} />
        <Route path='/Result' element={<Result />} />
        </Route> */}

                {/* <Route path='/Help' element={<Help/>} /> */}

            </Routes>
        </BrowserRouter>
    );
};