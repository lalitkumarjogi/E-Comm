import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = [944, 984, 984].map((n) => `https://cdn1.smartprix.com/rx-i4U4FAoxX-w1200-h1200/4U4FAoxX.jpg`);
 

  constructor (private product:ProductService){}
  ngOnInIt(){
    this.product.popularproducts().subscribe((data)=>{
  console.log(data)
    })
  }


}
