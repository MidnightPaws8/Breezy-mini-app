// Utility functions for Telegram Web App

export const isTelegramWebApp = (): boolean => {
  return Boolean(window?.Telegram?.WebApp);
};

export const getTelegramWebApp = () => {
  if (!isTelegramWebApp()) {
    throw new Error('Telegram WebApp is not available. Please open this app through Telegram.');
  }
  return window.Telegram.WebApp;
};