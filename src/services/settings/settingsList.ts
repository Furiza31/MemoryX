import BaseSettings from './BaseSettings';
import LanguageSettings from './languages';

const settingsList: {key: string; settings: BaseSettings}[] =
[
  {
    key: 'language',
    settings: LanguageSettings
  }
]

export default settingsList
