import localStorage from '../localStorage';

abstract class BaseSettings {
    public title: string;
    public icon: string;
    public link: string;
    public description: string;
    private _key: string;
    public default: string;

    public abstract load(): void;

    constructor(key: string, title: string, icon: string, link: string, description: string, defaultValue: string) {
        this.title = title;
        this.icon = icon;
        this.link = link;
        this.description = description;
        this._key = key;
        this.default = defaultValue;
    }

    public get(): string {
      return localStorage.getString(this._key);
    }

    public set(value: string): void {
      localStorage.set(this._key, value);
      this.load();
    }
}

export default BaseSettings;
