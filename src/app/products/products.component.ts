import { Component, Input } from '@angular/core';
import { IProduct } from '../../types/IProducts';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  @Input() car:IProduct
}
