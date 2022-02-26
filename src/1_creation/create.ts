import { Observable } from "rxjs";

const obs = Observable.create(function(observer) {
    observer.next('Hola');
    observer.next('Coders');
    observer.complete();
  });

  obs.subscribe(x => console.log(x));
  