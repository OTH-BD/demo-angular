import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  imports: [NgFor,NgIf],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  
  products :any;

   constructor(private productService : ProductService){

   }

  ngOnInit(): void {
    this.getAllProducts();
    
  }
  getAllProducts() : void{
    this.products = this.productService.getAllProducts();

  }

  //  ---Methode reserve pour service backend 

  // getAllProducts() : void{
  //   this.productService.getAllProducts().subscribe({
  //      next : resp => {
  //      this.products = resp
  //      },
  //  error : err =>{
  //   console.log(err);
  //  }
  // });

  // }

 handelDelete(product:any) : void {
     let v = confirm('Etes vous sure de vouloir supprimer! ')
          if(v==true){
            this.productService.deleteProduct(product);


            this.getAllProducts();
              
            }

  }

  // reserver pour le service backend 

  // handelDelete(product:any) : void {
  //   let v = confirm('Etes vous sure de vouloir supprimer! ')
  //   if(v==true){
  //     this.productService.deleteProduct(product).subscribe({
  //          next : value => {
  //            this.getAllProducts();
  //            },
  //          error : err =>{
  //          console.log(err);
  //         }
  //        });



       
  //    }

  // }

}
