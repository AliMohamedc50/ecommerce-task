import { Component } from '@angular/core';
import { IProduct } from '../types/IProducts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce-task';
    cars:IProduct[] = [
    {
    name: "mustang",
    price: 25000,
    image: "https://i.pinimg.com/236x/3e/42/78/3e42780dce9e2c513cd0535165ea3cf9.jpg",
    description: "black bullitt mustang model 2022"
  },
    {
    name: "Porsche",
    price: 25000,
    image: "https://i.pinimg.com/236x/23/25/b1/2325b1356a56762c2b80eef16dec56c1.jpg",
    description: "Porsche 911 GT3 RS 2021"
  },
    {
    name: "Bugatti",
    price: 25000,
    image: "https://i.pinimg.com/originals/eb/9e/97/eb9e978108d7a30c654654b8210668fa.jpg",
    description: "Bugatti "
  },
]
onAddDataToChild(event:IProduct) {
  this.cars.push(event)
}
}
