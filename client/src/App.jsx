import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import { Main } from "./components/main";
import { Questions } from "./components/questions";
import { useTelegram } from "./hooks/useTelegram";
function App() {
  const { TG } = useTelegram();
  useEffect(() => {
    TG.ready();
  }, [TG]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path="questions" element={<Questions />} />
      </Routes>
    </div>
  );
}

export default App;
