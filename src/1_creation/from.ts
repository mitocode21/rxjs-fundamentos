import { from } from "rxjs";
import { Product } from "../model/product";

let product1 = new Product();
product1.idProduct = 1;
product1.name = "TV";
product1.price = 1000;

let product2 = new Product();
product2.idProduct = 2;
product2.name = "PC";
product2.price = 3000;

const obs = from([product1, product2]);
obs.subscribe(x => console.log(x));