import { Home, Cart } from "./pages";
import { Header } from "./components";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="px-4 sm:px-8 max-w-7xl mx-auto cursor-default">
            <Header />
            <main className="mb-12">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
