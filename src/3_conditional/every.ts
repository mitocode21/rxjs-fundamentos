import { every, from } from 'rxjs';
import { Product } from '../model/product';

let product1 = new Product();
product1.idProduct = 1;
product1.name = "TV"

let product2 = new Product();
product2.idProduct = 2;
product2.name = "TC"

const obsProducts = from([product1, product2]);

obsProducts.pipe(
    every(p => p.name.startsWith("T"))
).subscribe(x => console.log(x));
