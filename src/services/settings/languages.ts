import BaseSettings from './BaseSettings';
import { i18n } from 'src/boot/i18n';
import availableLanguages from 'src/i18n';

class LanguageSettings extends BaseSettings {
  constructor() {
      super('language', 'languages', 'translate', '/settings/languages', 'languageDescription', 'fr');
  }

  public load() {
    i18n.global.locale = super.get() as keyof typeof availableLanguages || super.default;
  }
}

export default new LanguageSettings();
