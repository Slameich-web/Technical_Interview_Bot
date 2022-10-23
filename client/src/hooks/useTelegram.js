const TG = window.Telegram.WebApp;

export function useTelegram() {
    const onClose = () => {
        TG.close();
    };
    const onChangeTextButton = (text) => {
        if (text) {
            TG.MainButton.setText(text)
        }
    };
    return {
        TG,
        onClose,
        onChangeTextButton,
        user: TG.initDataUnsafe?.user
    }
}