import { useEffect } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { useTelegram } from './hooks/useTelegram';
function App() {
    const { TG } = useTelegram()
    useEffect(() => {
        TG.ready();
    }, [TG])
    return (
        <div className="App">
            <Header />
        </div>
    );
}

export default App;
