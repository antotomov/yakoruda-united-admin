import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  businessPageData: Observable<any> = new Observable();
  logo$: Observable<string> = new Observable();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.businessPageData = this.authService.getBusinessCatalogData()
    this.logo$ = this.authService.getLogo();
  }
}
