import deMessages from './de.json';
import enMessages from './en.json';

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: 'en',
  locale: 'en',
  messages: {
    de: deMessages,
    en: enMessages,
  },
}));
