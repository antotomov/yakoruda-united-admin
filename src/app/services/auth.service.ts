import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[] = [
    {
      id: '1',
      username: 'stafo@gmail.com',
      password: 'STAF0zaKMET',
    }
  ]
  currentSession = sessionStorage.getItem('session');
  session: User = this.currentSession ? JSON.parse(this.currentSession) as User : {} as User;

  constructor(private router: Router, private http: HttpClient) { }

  login(username: string, password: string) {
    let user = this.users.find(user => user.username === username && user.password === password)
    if (user) {
      this.session = user;
      sessionStorage.setItem('session', JSON.stringify(this.session));
    }

    return user;
  }

  logout() {
    this.session = {} as User;
    sessionStorage.removeItem('session')
    this.router.navigateByUrl('/')
  }

  getHomePageData(): Observable<any> {
    return this.http.get('https://yakoruda-united-default-rtdb.firebaseio.com/home.json')
  }

  getProjectsData(): Observable<any> {
    return this.http.get('https://yakoruda-united-default-rtdb.firebaseio.com/projects.json')
  }

  getAboutUsData(): Observable<any> {
    return this.http.get('https://yakoruda-united-default-rtdb.firebaseio.com/about-us.json')
  }

  getBusinessCatalogData(): Observable<any> {
    return this.http.get('https://yakoruda-united-default-rtdb.firebaseio.com/business-catalog.json')
  }

  getContactUsData(): Observable<any> {
    return this.http.get('https://yakoruda-united-default-rtdb.firebaseio.com/contact-us.json')
  }

  getServicesData(): Observable<any> {
    return this.http.get('https://yakoruda-united-default-rtdb.firebaseio.com/services.json')
  }

  createSomeData(data: any) {
    this.http.post('https://yakoruda-united-default-rtdb.firebaseio.com/home.json', { ...data }).subscribe()
  }

  getLogo(): Observable<string> {
    return this.http.get('https://yakoruda-united-default-rtdb.firebaseio.com/logo.json') as Observable<string>
  }
}
