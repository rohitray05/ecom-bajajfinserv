import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { EcomServiceService } from '../ecom-service.service';
import { PRODUCTS } from './products.constant';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-listing-page',
  standalone: true,
  imports: [ProductComponent,CommonModule],
  templateUrl: './product-listing-page.component.html',
  styleUrl: './product-listing-page.component.css'
})

export class ProductListingPageComponent implements OnInit{
    products = PRODUCTS;
    filterText = '';
    productFilters = {
      category:new Set(),
      price:new Set()
    }
    cateGoryFilter = [];
    selectedCategory;
    displayProducts;
    selectedProduct
    constructor(){

    }

    ngOnInit(): void {
      this.getProductList();
      //If API then will run category after getting the response
      this.getFilterCategory();
    }

    getProductList():void{
        this.displayProducts = this.products;
       //this.ecomService.getProducts().subscribe(data=>{
       //   console.log(data)
       //})
    }

    getFilterCategory(){
       //Categorize Filteing
       const cat = Object.keys(this.productFilters);
       const category = new Set()
       this.products.forEach(product=>{
        this.productFilters.category.add(product.category);
       })

       this.productFilters.category.forEach(cat=>{
         this.cateGoryFilter.push({label:cat,value:cat})
       })

      console.log(this.productFilters)
    }

    onCategoryChange(event: any): void {
      this.selectedCategory = event.target.value;
      this.filterByCategory(this.selectedCategory);
    }

    filterByCategory(category){
       this.displayProducts = this.products.filter(prd=>prd.category === category)
    }
     
    //Initial pLAN BUT BETTER TO GO FOR Parameterized Route from product to Product Details
    productSelected(productId){
       this.selectedProduct = this.displayProducts.filter(prd=>prd.id === productId)
       console.log(this.selectedProduct)
    }
}
