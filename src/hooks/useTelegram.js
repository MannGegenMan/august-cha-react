const tg = window.Telegram?.WebApp;

export function useTelegram() {
 const onClose = () => {
    if (tg) {
      tg.close();
    }
 };

 const onToggleButton = () => {
    if (tg && tg.MainButton) {
      if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
      } else {
        tg.MainButton.show();
      }
    }
 };

 return {
    onClose,
    onToggleButton,
    user: tg?.initDataUnsafe?.user,
 };
}