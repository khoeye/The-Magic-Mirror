import './App.css';
import Hero from './components/hero/hero';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from './pages/Home';
import AdvancedSearch from './pages/AdvancedSearch';
import CardSearch from './pages/CardSearch';
function App() {

  return (
    <div className="App">
      <Hero/>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cardSearch" element={<CardSearch />} />
          <Route path="advancedSearch" element={<AdvancedSearch />} />
        </Route>
      </Routes>
    </BrowserRouter>     */}
    </div>
  );
}

export default App;
