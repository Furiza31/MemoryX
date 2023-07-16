import { useMeStore } from 'src/stores/me'
import localStorage from './localStorage'
import { Router } from 'src/router'
import { api } from 'src/boot/axios'

class Authentification{

  private static instance: Authentification
  private me = useMeStore()

  private constructor ()  {
    if (!Authentification.instance) {
      Authentification.instance = this
    }
    return Authentification.instance
  }

  public static getInstance (): Authentification  {
    if (!Authentification.instance) {
      Authentification.instance = new Authentification()
    }
    return Authentification.instance
  }

  public getToken(): string {
    return this.me.getToken
  }

  public isLogged(): boolean {
    return !!this.me.getToken
  }

  public logout(): void {
    this.me.logout()
    localStorage.remove('me')
    api.defaults.headers['authorization'] = ''
    Router.push({ path: '/auth/login' })
  }

  public checkLogin(): void {
    if (localStorage.has('me')) {
      this.login(
        (
          localStorage.get('me') as {id: number, username: string, email: string, token: string}
        ),
        true
      )
    }
  }

  public login(me: {id: number, username: string, email: string, token: string}, rememberMe: boolean): void {
    this.me.login(me.id, me.username, me.email, me.token)
    if (rememberMe) localStorage.set('me', me)
    api.defaults.headers['authorization'] = me.token
    Router.push({ path: '/' })
  }
}

export default Authentification
