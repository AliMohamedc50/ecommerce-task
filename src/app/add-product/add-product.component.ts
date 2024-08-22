import { Component, EventEmitter, Output } from '@angular/core';
import { IProduct } from '../../types/IProducts';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  @Output() addcar = new EventEmitter<IProduct>()
 car = {
    name: '',
    price: 0,
    description: ''
  };

  onAddCar() {
    this.addcar.emit(this.car)
  }
}
