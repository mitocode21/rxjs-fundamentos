import { Product } from "../model/product";
import { Client } from "../model/client";
import { merge, of } from "rxjs";

let product1 = new Product();
product1.idProduct = 1;
product1.name = "TV";
product1.price = 1000;

let product2 = new Product();
product2.idProduct = 2;
product2.name = "PC";
product2.price = 3000;

let client1 = new Client();
client1.idClient = 1;
client1.name = "mitocode";

let client2 = new Client();
client2.idClient = 2;
client2.name = "code";

let obs1 = of(product1);
let obs2 = of(product2);
let obs3 = of(client1);
let obs4 = of(client2);

merge(obs1, obs2, obs3, obs4).subscribe(x => console.log(x));