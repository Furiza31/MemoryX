import BaseSettings from './settings/BaseSettings.js';
import settingsList from './settings/settingsList.js';

class Settings {

  private static instance: Settings
  private settings = settingsList

  private constructor ()  {
    if (!Settings.instance) {
      Settings.instance = this
    }
    return Settings.instance
  }

  public static getInstance (): Settings {
    if (!Settings.instance) {
      Settings.instance = new Settings()
    }
    return Settings.instance
  }

  public getSettings() {
    return this.settings.map(setting => setting.settings)
  }

  public loadAll() {
    this.settings.forEach(setting => {
      setting.settings.load()
    })
  }

  public get(key: string): null | BaseSettings {
    const setting = this.settings.find(setting => setting.key === key)
    if (setting) return setting.settings
    return null
  }
}

export default Settings
