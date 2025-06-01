import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products =[
    {id: 1 ,name: "Computer", price : 1300 , selected: true},
    {id: 2 ,name: "Printer", price : 9300 , selected: false},
    {id: 3 ,name: "Smart Phone", price : 4000 , selected: true},
  ]

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.products
   // return this.http.get("http://localhost:8083/products")
  }
  deleteProduct(product : any) : void{
    this.products = this.products.filter((p:any)=>p.id != product.id);
    // return this.http.delete("http://localhost:8083/products"+product.id)
  }
}
