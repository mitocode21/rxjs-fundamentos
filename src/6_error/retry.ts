import { interval, of, throwError } from 'rxjs';
import { mergeMap, retry } from 'rxjs/operators';

const source = interval(1000);
const example = source.pipe(
  mergeMap(val => {
    if (val > 5) {
      return throwError('Error!');
    }
    return of(val);
  }),
  retry(2)
);

const subscribe = example.subscribe({
  next: val => console.log(val),
  error: val => console.log(`${val}: Retried 2 times then quit!`)
});