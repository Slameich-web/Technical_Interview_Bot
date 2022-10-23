const TG = window.Telegram.WebApp;

export function useTelegram() {
    const onClose = () => {
        TG.close();
    };
    return {
        TG,
        onClose,
        user: TG.initDataUnsafe?.user
    }
}