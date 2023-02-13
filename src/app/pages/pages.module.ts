import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { PagesRoutingModule } from './pages-routing.module';
import { HeaderComponent } from './header/header.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import {FormsModule} from '@angular/forms';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { HomeComponent } from './home/home.component';
import { SellerAddPComponent } from './seller-add-p/seller-add-p.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    HeaderComponent,
    SellerAuthComponent,
    SellerHomeComponent,
    HomeComponent,
    SellerAddPComponent
  ],
  exports:[
    HeaderComponent,
    HomeComponent,
    SellerAuthComponent,SellerHomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,NgbModule,
    FontAwesomeModule
  ]
})
export class PagesModule { }
