import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import "./styles/base.css";
import "./styles/layout.css";
import "./styles/card.css";
import "./styles/result.css";

export default function App() {
    return (
        <>
            <Navbar />
            <Home />
        </>
    );
}
