import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  register(name:any,email:any,password:any,place:any){
    const data={
      name,
      email,
      password,
      place
    }

    return this.http.post("http://localhost:5000/register",data)
  }

  login(email:any,password:any){
    const data={
      email,
      password
    }
    return this.http.post("http://localhost:5000/login",data)
  }

  addProduct(name:any,price:any,quantity:any,category:any){
    const data={
      name,
      price,
      quantity,
      category
    }
    return this.http.post("http://localhost:5000/addproduct",data)
  }

  viewProducts(){
    return this.http.get("http://localhost:5000/viewproducts")
  }
}
