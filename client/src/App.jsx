import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Page } from "./components/category/Page";
import { useTelegram } from "./hooks/useTelegram";
function App() {
  const { TG } = useTelegram();
  useEffect(() => {
    TG.ready();
  }, [TG]);
  return (
    <div className="App">
      <Routes>
        <Route path="html" element={<Page title={"HTML"} />} />
        <Route path="css" element={<Page title={"CSS"} />} />
        <Route path="javascript" element={<Page title={"JavaScript"} />} />
      </Routes>
    </div>
  );
}

export default App;
