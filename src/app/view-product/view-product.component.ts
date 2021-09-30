import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/data.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  products:any=[]

  constructor(private ds:ServiceService) { }

  ngOnInit(): void {

    this.ds.viewProducts().subscribe((result:any)=>{
      this.products.push(result.productData)
      

    })
    
  }

}
