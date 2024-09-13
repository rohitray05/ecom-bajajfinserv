import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product:any
  @Output() productSelected = new EventEmitter<string>(); 
  
  constructor(private router:Router){}
  
  
  getDetails(){
    this.productSelected.emit(this.product.id);
    //New Implementation with parameterized Route
    this.router.navigateByUrl(`product/${this.product.id}`)
  }
}
