import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { HtmlPage } from "./components/category/HtmlPage";
import { Main } from "./components/main";
import { useTelegram } from "./hooks/useTelegram";
function App() {
  const { TG } = useTelegram();
  useEffect(() => {
    TG.ready();
  }, [TG]);
  return (
    <div className="App">
      <Routes>
        <Route index element={<Main />} />
        <Route path="html" element={<HtmlPage />} />
      </Routes>
    </div>
  );
}

export default App;
