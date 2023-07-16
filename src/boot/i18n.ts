import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';
import messages from 'src/i18n';

const i18n = createI18n({
  locale: 'fr',
  globalInjection: true,
  messages,
});

export default boot(({ app }) => {

  // Set i18n instance on app
  app.use(i18n);
  app.config.globalProperties.$t = (key: string) => i18n.global.t(key);
});

export { i18n };
