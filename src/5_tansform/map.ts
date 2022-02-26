import { from, map } from 'rxjs';
import { Product } from '../model/product';

let product1 = new Product();
product1.idProduct = 1;
product1.name = "TV"
product1.price = 20;

let product2 = new Product();
product2.idProduct = 2;
product2.name = "PC"
product2.price = 70;

let product3 = new Product();
product3.idProduct = 3;
product3.name = "LAPTOP"
product3.price = 90;

let product4 = new Product();
product4.idProduct = 4;
product4.name = "STEREO"
product4.price = 120;

let list = [product1, product2, product3, product4];

const obsProducts = from(list);

obsProducts
    .pipe(map(p => p.price * 10))
    .subscribe(x => console.log(x));