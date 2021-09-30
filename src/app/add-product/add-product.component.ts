import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../services/data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    price: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    quantity: ['', [Validators.required, Validators.pattern('[0-9a-z]*')]],
    category: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
  });

  constructor(private fb:FormBuilder,private ds:ServiceService) { }

  



  ngOnInit(): void {
  }

  addProduct(){

    const name=this.productForm.value.name
    const price=this.productForm.value.price
    const quantity=this.productForm.value.quantity
    const category=this.productForm.value.category
    if(this.productForm.valid){
      this.ds.addProduct(name,price,quantity,category)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
        }
      },
      (result)=>{
        alert(result.error.message)
      })
    }
    else{
      alert("invalid form... Please Fill the fields")
    }
    
    
  }

}
