import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PRODUCTS } from '../product-listing-page/products.constant';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details-page.component.html',
  styleUrl: './product-details-page.component.css'
})
export class ProductDetailsPageComponent implements OnInit{
  productId;
  productDetails;
  product = PRODUCTS

  constructor(private route:ActivatedRoute,private router:Router){}
 
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = +params.get('id');
      this.getDetails(this.productId)
    });
  }

  getDetails(productId){
    this.productDetails = this.product.filter(prd=>prd.id === productId)[0];

  }

  buyProduct(){
    const input = prompt('Please enter Payment OTP');
    const OTP = [1234]
    if (input !== null && input.trim() !== '' && OTP.includes(+input)) {
      alert('Payment SuccessFull')
      //Navigate to Profile page and Show Recent Order
      this.router.navigateByUrl('/profile')
    } else {
      alert('Incorrect OTP Try Again')
    }
  }
  
}
