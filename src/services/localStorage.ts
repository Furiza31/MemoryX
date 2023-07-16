import { LocalStorage, WebStorageGetMethodReturnType } from 'quasar'

export default {
  set <T extends WebStorageGetMethodReturnType> (key: string, value: T) {
    if (value) LocalStorage.set(key, value)
    else LocalStorage.remove(key)
  },
  get <T extends WebStorageGetMethodReturnType> (key: string) {
    return LocalStorage.getItem<T>(key)
  },
  getString (key: string): string {
    return LocalStorage.getItem<string>(key) || ''
  },
  has (key: string) {
    return LocalStorage.has(key)
  },
  remove (key: string) {
    LocalStorage.remove(key)
  },
  clear () {
    LocalStorage.clear()
  }
}
