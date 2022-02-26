import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const source = throwError(new Error('This is an error!'));
const example = source.pipe(catchError(val => of(`I caught: ${val}`)));
example.subscribe(val => console.log(val));