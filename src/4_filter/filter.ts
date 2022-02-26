import { filter, from } from 'rxjs';
import { Product } from '../model/product';

let product1 = new Product();
product1.idProduct = 1;
product1.name = "TV"
product1.price = 20;

let product2 = new Product();
product2.idProduct = 2;
product2.name = "PC"
product1.price = 70;

const obsProducts = from([product1, product2]);

obsProducts
    .pipe(filter(p => p.price > 50))
    .subscribe(x => console.log(x));
